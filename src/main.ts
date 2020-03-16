import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as rateLimit from 'express-rate-limit';
import * as helmet from 'helmet';
require('dotenv').config({ path: '.env' });

async function bootstrap() {

  const app = await NestFactory.create(AppModule);
  app.enableCors();
  app.use(helmet());

  app.use(
    rateLimit({
      windowMs: 15 * 60 * 1000, // 15 minutes
      max: 1000, // limit each IP to 100 requests per windowMs
    }),
  );


  await app.listen(process.env.PORT);
}

bootstrap();
