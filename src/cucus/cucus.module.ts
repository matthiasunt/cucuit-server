import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CucusService } from './cucus.service';
import { CucusController } from './cucus.controller';
import { CucuSchema } from './schemas/cucu.schema';
import { MulterModule } from '@nestjs/platform-express';
import { GridFsMulterConfigService } from '../multer-config/multer-config.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Cucu', schema: CucuSchema },
    ]),
    MulterModule.registerAsync({
      useClass: GridFsMulterConfigService,
    }),
  ],
  controllers: [
    CucusController,
  ],
  providers: [
    GridFsMulterConfigService,
    CucusService,
  ],
  exports: [
    MongooseModule.forFeature([
      { name: 'Cucu', schema: CucuSchema },
    ]),
  ],
})
export class CucusModule {
}
