import { Logger } from '@nestjs/common';
...
@module({
    ...
  providers: [Logger]
})
export class UsersModule { }