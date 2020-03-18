import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateCucuDto } from './dto/create-cucu.dto';
import { Cucu } from './interfaces/cucu.interface';

@Injectable()
export class CucusService {
  constructor(
    @InjectModel('Cucu') private readonly cucuModel: Model<Cucu>,
  ) {
  }

  async create(createCucuDto: CreateCucuDto): Promise<any> {
    const createdCucu = new this.cucuModel(createCucuDto);
    if (createdCucu.inviteUrl.includes('hangouts.google.com')
      || createdCucu.inviteUrl.includes('join.skype.com')
      || createdCucu.inviteUrl.includes('meet.jit.si')
      || createdCucu.inviteUrl.includes('zoom.us')) {
      createdCucu.createdDate = new Date();
      return createdCucu.save();
    } else {
      return {
        status: 'error',
        message: 'Invite url not valid',
      };
    }
  }

  async incrementClickCounter(id: string): Promise<Cucu> {
    return this.cucuModel
      .findByIdAndUpdate(
        id, {
          $inc: { clickCounter: 1 },
        }, { new: true }).exec();
  }

  async findAll(): Promise<Cucu[]> {
    return this.cucuModel.find().exec();
  }

  async findByDate(date: string): Promise<Cucu[]> {
    return this.cucuModel.find({
      startDate: {
        $gte: new Date(date),
      },
    })
      .sort({ startDate: 1 })
      .limit(100)
      .exec();
  }

  async findByLanguageAndDate(lang: string, date: string): Promise<Cucu[]> {
    return this.cucuModel.find({
      language: {
        $eq: lang,
      },
      startDate: {
        $gte: new Date(date),
      },
    }).sort({ startDate: 1 })
      .limit(100)
      .exec();
  }
}
