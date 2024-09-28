throw new HttpException(
  {
    errorMessage: 'id는 0보다 큰 정수여야 합니다',
    foo: 'bar'
  },
  HttpStatus.BAD_REQUEST
);


{
  "errorMessage":"id는 0보다 큰 정수여야 합니다",
  "foo":"bar"
}


constructor(objectOrError?: string | object | any, description?: string);