import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getAnotherHello(): string {
    return 'Another Hello World!';
  }
}
