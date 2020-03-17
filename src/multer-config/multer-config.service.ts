import { Injectable } from '@nestjs/common';
import { MulterModuleOptions, MulterOptionsFactory } from '@nestjs/platform-express';
import * as GridFsStorage from 'multer-gridfs-storage';
import * as crypto from 'crypto';
import * as path from 'path';

require('dotenv').config({ path: '.env' });

@Injectable()
export class GridFsMulterConfigService implements MulterOptionsFactory {
  gridFsStorage: GridFsStorage;

  private db = `mongodb://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@127.0.0.1:27017/${process.env.ENVIRONMENT}-cucuit`;


  constructor() {
    this.gridFsStorage = new GridFsStorage({
      url: this.db,
      options: { useUnifiedTopology: true },
      file: (req, file) => {
        return new Promise((resolve, reject) => {
          crypto.randomBytes(16, (err, buf) => {
            if (err) {
              return reject(err);
            }
            if (file.mimetype !== 'image/jpeg' && file.mimetype !== 'image/png') {
              reject({ status: 'error', message: 'Invalid image format' });
            }

            const filename = buf.toString('hex') + path.extname(file.originalname);
            const fileInfo = {
              filename: filename,
              bucketName: 'images',
            };
            resolve(fileInfo);
          });
        });
      },
    });
  }


  createMulterOptions(): MulterModuleOptions {
    return {
      storage: this.gridFsStorage,
    };
  }
}
