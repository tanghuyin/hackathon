import { Injectable } from '@nestjs/common';
import { Case } from './Case';

@Injectable()
export class AppService {
  handleCreatedCaseWebhook(body: Case): string {
    console.log(body);
    return "hello webhook";
  }
  getHello(): string {
    return 'Hello World!';
  }
}
