import { Inject } from "@nestjs/common";
import { ServiceA } from "./service-A";

// @Injectabl이 선언되어 있지 않습니다. BaseService 클래스를 직접 참조하지 않기 때문입니다.
export class BaseService {
  
  // @Inject(ServiceA) private readonly serviceA: ServiceA;
  constructor(private readonly serviceA: ServiceA) {}

  getHello(): string {
    return 'Hello World BASE!';
  }

  doSomeFuncFromA(): string {
    return this.serviceA.getHello();
  }
}