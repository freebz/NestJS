import { ExceptionModule } from "./exception/ExceptionModule";
...
@module({
  imports: [
      ...
      ExceptionModule,
  ],
})
export class AppModule { }