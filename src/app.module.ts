import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { CucusModule } from './cucus/cucus.module';
import { CucusController } from './cucus/cucus.controller';
import { CucusService } from './cucus/cucus.service';
import { FileService } from './file/file.service';
import { FileController } from './file/file.controller';
import { FileModule } from './file/file.module';
require('dotenv').config({ path: '.env' });

@Module({
  imports: [
    MongooseModule.forRoot(
      `mongodb://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@127.0.0.1:27017/cucuit-db`,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      },
    ),
    FileModule,
    CucusModule,
  ],
  controllers: [
    AppController,
    CucusController,
    FileController,
  ],
  providers: [
    AppService,
    CucusService,
    FileService,
  ],
})
export class AppModule {
}
