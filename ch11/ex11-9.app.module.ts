import { LoggerModule } from "./logging/logger.module";

@Module({
  imports: [LoggerModule],
  ...
})
export class AppModule { }