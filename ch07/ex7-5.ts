// 7.4.3 커스텀 유효성 검사기 작성

// not-in.ts

import { registerDecorator, ValidationOptions, ValidationArguments, ValidatorConstraint,
validatorConstraintInterface } from 'class-validator';

export function NotIn(property: string, validationOptions?: ValidationOptions) {
  return (object: Object, propertyName: strig) => {
    registerDecorator({
      name: 'NotIn',
      target: object.constructor,
      propertyName,
      options: validationOptions,
      constraints: [property],
      validator: {
        validate(value: any, args: ValidationArguments) {
          const [relatedPropertyName] = args.constrains;
          const relatedValue = (args.object as any)[relatedPropertyName];
          return typeof value === 'string' && typeof relatedValue === 'string' &&
            !relatedValue.includes(value);
        }
      }
    });
  };
}



@Transform(params => params.value.trim())
@NotIn('password', { message: 'password는 name과 같은 문자열을 포함할 수 없습니다.' })
@IsString()
@MinLength(2)
@MaxLength(30)
name: string;



$ curl -X POST http://localhost:3000/users -H "Content-Type: application/json" -d
'{"name": "YOUR_NAME", "email": "YOUR_EMAIL@gmail.com", "password": "YOUR_NAME-PASSWORD"}'
{
  "statusCode": 400,
  "message": [
    "password는 name과 같은 문자열을 포함할 수 없습니다.",
    "password must match /^[A-Za-z\\d!@#$%^&*()]{8,30}$/ regular expression"
  ],
  "error": "Bad Request"
}