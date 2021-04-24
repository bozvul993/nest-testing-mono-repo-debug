import { Injectable } from '@nestjs/common';

@Injectable()
export class App3Service {
  getHello(): string {
    return 'Hello World! App3';
  }
}
