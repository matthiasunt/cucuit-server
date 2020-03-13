import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { EventsService } from './events.service';
import { EventsController } from './events.controller';
import { EventSchema } from './schemas/event.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: 'Event',
        schema: EventSchema,
      },
    ]),
  ],
  controllers: [
    EventsController,
  ],
  providers: [
    EventsService,
  ],
})
export class EventsModule {
}
