// 2.6.4 접근자 데커레이터

function Enumerable(enumerable: boolean) {
  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    descriptor.enumerable = enumerable;
  }
}

class Person {
  constructor(private name: string) {}

  @Enumerable(true)
  get getName() {
    return this.name;
  }

  @Enumerable(false)
  set setName(name: string) {
    this.name = name;
  }
}

const person = new Person('Dexter');
for (let key in person) {
  console.log(`${key}: ${person[key]}`);
}

// name: Dexter
// getName: Dexter