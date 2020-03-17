import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateCucuDto } from './dto/create-cucu.dto';
import { Cucu } from './interfaces/cucu.interface';

@Injectable()
export class CucusService {
  constructor(
    @InjectModel('Cucu') private readonly cucusModel: Model<Cucu>,
  ) {
  }

// https://hangouts.google.com/call/B1JC24NwIfcVoQyCSq00AEEI
// https://join.skype.com/cJnfLxgVuWeN

  async create(createCucuDto: CreateCucuDto): Promise<any> {
    const createdCucu = new this.cucusModel(createCucuDto);
    if (createdCucu.inviteUrl.includes('hangouts.google.com')
      || createdCucu.inviteUrl.includes('join.skype.com')
      || createdCucu.inviteUrl.includes('zoom.us')) {
      return createdCucu.save();
    } else {
      return {
        status: 'error',
        message: 'Invite url not valid',
      };
    }


  }

  async findAll(): Promise<Cucu[]> {
    return this.cucusModel.find().exec();
  }
}
