import { Module } from '@nestjs/common';
import { MulterModule } from '@nestjs/platform-express';
import { FileService } from './file.service';
import { FileController } from './file.controller';
import { GridFsMulterConfigService } from '../multer-config/multer-config.service';

@Module({
  imports: [
  ],
  controllers: [
    FileController,
  ],
  providers: [
    GridFsMulterConfigService,
    FileService,
  ],
})
export class FileModule {
}
