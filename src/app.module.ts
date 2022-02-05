import { CacheModule, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HttpModule } from '@nestjs/axios';
import { CaseController } from './CaseController';
import { CaseService } from './CaseService';

@Module({
  imports: [CacheModule.register(), HttpModule],
  controllers: [AppController, CaseController],
  providers: [AppService, CaseService],
})
export class AppModule {}
