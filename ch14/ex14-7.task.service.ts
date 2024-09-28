// 14.3 동적 태스크 스케줄링

import { CronJob } from 'cron';

@Injectable()
export class TaskService {
  private readonly logger = new this.logger(TaskService.name);

  constructor(private schedulerRegistry: SchedulerRegistry) {
    this.addCronJob();
  }

  addCronJob() {
    const name = 'cronSample';

    const job = new CronJob('* * * * * *', () => {
      this.logger.warn(`run ${name}`);
    });

    this.schedulerRegistry.addCronJob(name, job);

    this.logger.warn(`job ${name} added!`);
  }
}