import { Controller } from '@nestjs/common';
import {
  Ctx,
  MessagePattern,
  MqttContext,
  Payload,
} from '@nestjs/microservices';

@Controller()
export class MqttController {
  @MessagePattern('musma_channel')
  getMusma(@Payload() data, @Ctx() context: MqttContext) {
    console.log('Client : getMusma, ', `Topic : ${context.getTopic()}`, data);
    return `Client data sended: ${data}`;
  }
  @MessagePattern('jayce_channel')
  getJayce(@Payload() data, @Ctx() context: MqttContext) {
    console.log('Client : getJayce, ', `Topic : ${context.getTopic()}`, data);
    return `Client data sended: ${data}`;
  }
}
