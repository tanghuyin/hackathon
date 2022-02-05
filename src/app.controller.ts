import { Body, Controller, Get, HttpCode, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { Case } from './Case';

@Controller("/webhook")
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post()
  handleCreatedCaseWebhook(@Body() body: Case): string {
    return this.appService.handleCreatedCaseWebhook(body);
  }
}
