// 7.4.2 class-transformer 활용

export declare function Transform(transformFn: (params: TransformFnParams) => any, options?:
TransformOptions): PropertyDecorator;

export interface TransformFnParams {
    value: any;
    key: string;
    obj: any;
    type: TransformationType;
    options: ClassTransformOptions;
}



@Transform(params => {
  console.log(params);
  return params.value;
})
@IsString()
@MinLength(2)
@MaxLength(30)
readonly name: string;



$ curl -X POST http://localhost:3000/users -H "Content-Type: application/json" -d
'{"name":"YOUR_NAME", "email": "YOUR_EMAIL@gmail.com", "password":"pass123$"}'
{
  value: 'YOUR_NAME',
  key: 'name',
  obj: {
    name: 'YOUR_NAME',
    email: 'YOUR_EMAIL@gmail.com',
    password: 'pass123$'
  },
  type: 0,
  options: {
    enableCircularCheck: false,
    enableImplicitConversion: false,
    excludeExtraneousValues: false,
    excludePrefixes: undefined,
    exposeDefaultValues: false,
    groups: undefined,
    ignoreDecorators: false,
    strategy: undefined,
    targetMaps: undefined,
    version: undefined
  }
}



@Transform(params => params.value.trim())
@IsString()
@MinLength(2)
@MaxLength(30)
readonly name: string;



@Transform(({ value, obj }) => {
  if (obj.password.includes(obj.name.trim())) {
    throw new BadRequestException('password는 name과 같은 문자열을 포함할 수 없습니다.');
  }
  return value.trim();
})



// email의 형식이 잘못된 경우

$ curl -X POST http://localhost:3000/users -H "Content-Type: application/json" -d
'{"name": "YOUR_NAME", "email": "@gmail.com", "password: "PASSWORD"}'
{
  "statusCode": 400,
  "message": [
    "email must be an email"
  ],
  "error": "Bad Request"
}



// password의 길이가 잛은 경우

$ curl -X POST http://localhost:3000/users -H "Content-Type: application/json" -d
'{"name": "YOUR_NAME", "email": "YOUR_EMAIL@gmail.com", "password": "PASS"}'
{
  "statusCode": 400,
  "message": [
    "password must match /^[A-Za-z\\d!@#$%^&*()]{8,30}$/ regular expression"
  ],
  "error": "Bad Request"
}



// password에 이름과 같은 문자열이 포함된 경우

$ curl -X POST http://localhost:3000/users -H "Content-Type: application/json" -d
'{"name": "YOUR_NAME", "email": "YOUR_MAIL@gmail.com", "password": "YOUR_NAME-PASSWORD"}'
{
  "statusCode": 400,
  "message": "password는 name과 같은 문자열을 포함할 수 없습니다.",
  "error": "Bad Request"
}



// name의 앞뒤에 공백이 포함된 경우: 정상 동작

$ curl -X POST http://localhost:3000/users -H "Content-Type: application/json" -d
'{"name": "YOUR_NAME", "email": "YOUR_EMAIL@gmail.com", "password": "PASSWORD"}'