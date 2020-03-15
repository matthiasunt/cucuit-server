import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateEventDto } from './dto/create-event.dto';
import { Event } from './interfaces/event.interface';

@Injectable()
export class EventsService {
  constructor(
    @InjectModel('Event') private readonly eventsModel: Model<Event>,
  ) {
  }

// https://hangouts.google.com/call/B1JC24NwIfcVoQyCSq00AEEI
// https://join.skype.com/cJnfLxgVuWeN

  async create(createEventDto: CreateEventDto): Promise<any> {
    const createdEvent = new this.eventsModel(createEventDto);
    if (createdEvent.inviteUrl.indexOf('hangouts.google.com') > -1 || createdEvent.inviteUrl.indexOf('join.skype.com') > -1) {
      return createdEvent.save();
    } else {
      return {
        status: 'error',
        message: 'Invite url not valid',
      };
    }


  }

  async findAll(): Promise<Event[]> {
    return this.eventsModel.find().exec();
  }
}
