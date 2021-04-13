import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { v4 as uuid } from 'uuid';
import { LoggerModule } from 'nestjs-pino';
import pino from 'pino';
import * as path from 'path';
import * as fs from 'fs';

function getLogDir() {
  const logPath = path.join(__dirname, '../log/');
  console.log('logPath in AppModule.ts', logPath);
  const rootDir = path.join(__dirname, './..');
  const logDir = path.join(rootDir, 'log');
  fs.existsSync(logDir) || fs.mkdirSync(logDir);
  return logDir;
}

@Module({
  imports: [
    LoggerModule.forRoot({
      pinoHttp: [
        {
          useLevel: 'info',
          genReqId: () => uuid(),
          prettyPrint: {
            translateTime: true,
            singleLine: true,
          },
        },
        pino.destination(getLogDir() + 'app.log'),
      ],
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
