import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { EventsModule } from './events/events.module';
import { EventsController } from './events/events.controller';
import { EventsService } from './events/events.service';
import { FileService } from './file/file.service';
import { FileController } from './file/file.controller';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/cucuit-db'),
    EventsModule,
  ],
  controllers: [
    AppController,
    EventsController,
    FileController,
  ],
  providers: [
    AppService,
    EventsService,
    FileService,
  ],
})
export class AppModule {
}
