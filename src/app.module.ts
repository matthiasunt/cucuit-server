import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { EventsModule } from './events/events.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/cucudb'),
    EventsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
}
