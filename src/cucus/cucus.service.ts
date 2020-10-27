import { Model } from 'mongoose';
import { HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateCucuDto } from './dto/create-cucu.dto';
import { Cucu } from './interfaces/cucu.interface';
import { DeleteCucuDto } from './dto/delete-cucu.dto';

@Injectable()
export class CucusService {
  constructor(
    @InjectModel('Cucu') private readonly cucuModel: Model<Cucu>,
  ) {
  }

  async create(createCucuDto: CreateCucuDto): Promise<any> {
    const createdCucu = new this.cucuModel(createCucuDto);
    if (createdCucu.inviteUrl.includes('google')
      || createdCucu.inviteUrl.includes('skype')
      || createdCucu.inviteUrl.includes('jit')
      || createdCucu.inviteUrl.includes('zoom')) {
      createdCucu.createdDate = new Date();
      return createdCucu.save();
    } else {
      console.error(`Invalid Invite Url: ${createdCucu.inviteUrl}`);
      return {
        status: 'error',
        message: 'Invite url not valid',
      };
    }
  }

  async delete(deleteCucuDto: DeleteCucuDto): Promise<any> {
    return this.cucuModel.findOneAndDelete({
      _id: {
        $eq: deleteCucuDto._id,
      },
      uid: {
        $eq: deleteCucuDto.uid,
      },
    }).exec();
  }

  async getCucu(id: string): Promise<Cucu | HttpStatus> {
    if (id && id.length === 24) {
      return this.cucuModel.findById(id, { uid: 0 }).exec();
    } else {
      return HttpStatus.NOT_FOUND;
    }
  }

  async incrementClickCounter(id: string): Promise<Cucu> {
    return this.cucuModel
      .findByIdAndUpdate(
        id, {
          $inc: { clickCounter: 1 },
        }, { new: true }).exec();
  }

  async findByDate(date: string): Promise<Cucu[]> {
    return this.cucuModel.find({
      startDate: {
        $gte: new Date(date),
      },
    }, { uid: 0 })
      .sort({ startDate: 1 })
      .limit(100)
      .exec();
  }

  async findByUid(uid: string): Promise<Cucu[]> {
    return this.cucuModel.find({
      uid: {
        $eq: uid,
      },
    })
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
    }, { uid: 0 }).sort({ startDate: 1 })
      .limit(100)
      .exec();
  }
}
