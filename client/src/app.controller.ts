import { Controller, Get, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { AppService } from './app.service';
import {} from 'rxjs';

@Controller()
export class AppController {
  constructor(
    @Inject('mqttPractice') private client: ClientProxy,
    private readonly appService: AppService,
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('musma')
  getMusma() {
    return this.client.send('musma_channel', `{foo:musma}`);
  }
  @Get('jayce')
  getJayce() {
    return this.client.send('jayce_channel', `{foo:jayce}`);
  }
}
