import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as path from 'path';
import * as fs from 'fs';

async function checkDirectory() {
  const rootDir = path.join(__dirname, './..');
  const logDir = path.join(rootDir, 'log');
  fs.existsSync(logDir) || fs.mkdirSync(logDir);
}

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}

checkDirectory();
bootstrap();
