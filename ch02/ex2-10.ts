// 2.6.5 속성 데커레이터

function format(formatString: string) {
  return function (target: any, propertyKey: string): any {
    let value = target[propertyKey];

    function getter() {
      return `${formatString} ${value}`;
    }

    function setter(newVal: string) {
      value = newVal;
    }

    return {
      get: getter,
      set: setter,
      enumerable: true,
      configurable: true,
    }
  }
}

class Greeter {
  @format('Hello')
  greeting: string;
}

const t = new Greeter();
t.greetiing = 'World';
console.log(t.greeting);

// Hello World