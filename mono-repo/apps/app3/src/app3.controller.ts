import { Controller, Get } from '@nestjs/common';
import { App3Service } from './app3.service';

@Controller()
export class App3Controller {
  constructor(private readonly app3Service: App3Service) {}

  @Get()
  getHello(): string {
    return this.app3Service.getHello();
  }
}
