import { Body, Controller, Get, Post, Put } from '@nestjs/common';
import { AppService } from './app.service';
import { Case } from './Case';

@Controller("/webhook")
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post("/create")
  async handleCreatedCaseWebhook(@Body() body: Case) {
    console.log("create webhook triggered");
    const data = await this.appService.handleCreatedCaseWebhook(body);
    return data;
  }

  @Post("/update")
  async handleUpdateCaseWebhook(@Body() body: Case) {
    console.log("update webhook triggered");
    const data = await this.appService.handleUpdateCaseWebhook(body);
    return data;
  }
}
