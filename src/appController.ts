import { Controller, Get, Render } from '@nestjs/common';
import { AppService } from './appService';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Render('index')
  getHello(): { message: string } {
    return {
      message: this.appService.getHello(),
    };
  }
}
