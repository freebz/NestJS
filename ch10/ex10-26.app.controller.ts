@Get('/with-pipe')
getHello3(@User(new ValidationPipe({ validateCustomDecorators: true })) user: UserEntity) {
  console.log(user);
}