import { Module } from '@nestjs/common';
import { App3Controller } from './app3.controller';
import { App3Service } from './app3.service';

@Module({
  imports: [],
  controllers: [App3Controller],
  providers: [App3Service],
})
export class App3Module {}
