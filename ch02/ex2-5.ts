// 2.6 데커레이터

class CreateUserDto {
  @IsEmail()
  @MaxLength(60)
  readonly email: string;

  @IsString()
  @Matches(/^[A-Za-z\d!@#$%^&*()]{8,30}$/)
  readonly password: string;
}



// tsconfig.json
{
  "compilerOptions": {
        ...
    "experimentalDecorators": true
        ...
  }
}



function deco(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
  console.log('데커레이터가 평가됨');
}

class TestClass {
  @deco
  test() {
    console.log('함수 호출됨');
  }
}

const t = new TestClass();
t.test();

// 데커레이터가 평가됨
// 함수 호출됨



function deco(value: string) {
  console.log('데커레이터 평가됨');
  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    console.log(value);
  }
}

class TestClass {
  @deco('HELLO')
  test() {
    console.log('함수 호출됨')
  }
}

// 데커레이터가 평가됨
// HELLO
// 함수 호출됨