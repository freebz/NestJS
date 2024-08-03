// 2.6.3 메서드 데커레이터

function HandleError() {
  return function(target: any, propertyKey: string, descriptor: PropertyDecorator) {
    console.log(target);
    console.log(propertyKey);
    console.log(descriptor);

    const method = descriptor.value;

    descriptor.value = function() {
      try {
        method();
      } catch (e) {
        // 에러 핸들링 로직 구현
        console.log(e);
      }
    }
  };
}

class Greeter {
  @HandleError()
  hello() {
    throw new Error('테스트 에러');
  }
}

const t = new Greeter();
t.hello();

// {contructor: false, hello: f}
// hello
// {value: f, writable: true, enumerable: false, configurable: true}



interface PropertyDecorator {
  configurable?: boolean; // 속성의 정의를 수정할 수 있는지 여부
  enumerable?: boolean;   // 열거형인지 여부
  value?: any;            // 속성 값
  wriable?: boolean;      // 수정 가능 여부
  get?(): any;            // getter
  set?(v: any): void;     // setter
}