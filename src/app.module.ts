import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { v4 as uuid } from 'uuid';
import { LoggerModule } from 'nestjs-pino';
import pino from 'pino';

@Module({
  imports: [
    LoggerModule.forRootAsync({
      useFactory: () => ({
        pinoHttp: [
          {
            genReqId: () => uuid(),
            prettyPrint: {
              translateTime: true,
              singleLine: false,
              colorize: false,
              messageFormat: `{pid} - reqId:{req.id} - url:{req.url} - message:{msg}`,
              hideObject: true,
            },
          },
          pino.destination('./log/app.log'),
        ],
      }),
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
