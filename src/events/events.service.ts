import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateEventDto } from './dto/create-event.dto';
import { Event } from './interfaces/event.interface';

@Injectable()
export class EventsService {
  constructor(@InjectModel('Event') private readonly catModel: Model<Event>) {
  }

  async create(createCatDto: CreateEventDto): Promise<Event> {
    const createdCat = new this.catModel(createCatDto);
    return createdCat.save();
  }

  async findAll(): Promise<Event[]> {
    return this.catModel.find().exec();
  }
}
