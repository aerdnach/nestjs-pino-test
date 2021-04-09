import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { PinoLogger } from 'nestjs-pino';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly pinologger: PinoLogger,
  ) {}

  @Get()
  getHello(): string {
    this.pinologger.info('logging stuff');
    return this.appService.getHello();
  }

  @Get('/another')
  getAnotherHello(): string {
    this.pinologger.info('another log');
    return this.appService.getAnotherHello();
  }
}
