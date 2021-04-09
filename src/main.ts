import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as fs from 'fs';
import * as path from 'path';

async function bootstrap() {
  const rootDir = path.join(__dirname, './..');
  const logDir = path.join(rootDir, 'log');
  const anotherDir = path.join(rootDir, 'anotherDir');

  try {
    fs.existsSync(logDir) || fs.mkdirSync(logDir);
    fs.existsSync(anotherDir) || fs.mkdirSync(anotherDir);
  } catch (err) {
    console.log(err);
  }

  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
