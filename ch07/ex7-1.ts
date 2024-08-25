// 7.1 파이프

@Get(':id')
findOne(@Param('id', ParseIntPipe) id: number) {
  return this.usersService.findOne(id);
}



$ curl http://localhost:3000/users/WRONG
{
  "statusCode": 400,
  "message": "Validation failed (numeric string is expected)",
  "error": "Bad Request"
}



@Get(':id')
findOne(@Param('id', new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE }))
id: number) {
  return this.usersService.findOne(id);
}



$ curl http://localhost:3000/users/WRONG
{
  "statusCode": 406,
  "message": "Validation failed (numeric string is expected)",
  "error": "Not Acceptable"
}



@Get()
findAll(
  @Query('offset', new DefaultValuePipe(0), ParseIntPipe) offset: number,
  @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number,
) {
  console.log(offset, limit);

  return this.usersService.findAll();
}


$ curl http://localhost:3000/users