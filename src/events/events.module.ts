import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { EventsService } from './events.service';
import { EventsController } from './events.controller';
import { EventSchema } from './schemas/event.schema';
import { MulterModule } from '@nestjs/platform-express';
import { GridFsMulterConfigService } from '../multer-config/multer-config.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Event', schema: EventSchema },
    ]),
    MulterModule.registerAsync({
      useClass: GridFsMulterConfigService,
    }),
  ],
  controllers: [
    EventsController,
  ],
  providers: [
    GridFsMulterConfigService,
    EventsService,
  ],
  exports: [
    MongooseModule.forFeature([
      { name: 'Event', schema: EventSchema },
    ]),
  ],
})
export class EventsModule {
}
