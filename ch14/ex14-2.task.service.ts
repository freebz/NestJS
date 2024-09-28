// 14.2 태스크 스케줄링을 선언하는 3가지 방식

// 14.2.1 크론 잡 선언 방식

import { Injectable, Logger } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';

@Injectable()
export class TaskService {
  private readonly logger = new Logger(TaskService.name);

  @Cron('* * * * * *', { name: 'cronTask' })
  handleCron() {
    this.logger.log('Task Called');
  }
}