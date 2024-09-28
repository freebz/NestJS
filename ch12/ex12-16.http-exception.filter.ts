...
export class HttpExceptionFilter implements ExceptionFilter {
  constructor(private logger: Logger) { }

    catch(exception: Error, host: ArgumentsHost) {
        ...
        const stack = exception.stack;

        const log = {
          timestamp: new Date(),
          url: req.url,
          response,
          stack,
        }
        this.logger.log(log);
        ...
    }
}