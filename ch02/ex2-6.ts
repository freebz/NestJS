// 2.6.1 데커레이터 합성

@f
@g
test



function first() {
  console.log("first(): factory evaluated");
  return function (target: any, propertyKey: string, descriptor: PropertyDecorator) {
    console.log("first(): called");
  };
}

function second() {
  console.log("second(): factory evaluated");
  return function (target: any, propertyKey: string, descriptor: PropertyDecorator) {
    console.log("second(): called");
  };
}

class ExampleClass {
  @first()
  @second()
  method() {
    console.log('method is called');
  }
}

// first(): factory evaluated
// second(): factory evaluated
// second(): called
// first(): called
// method is called