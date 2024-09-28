@UseInterceptors(ErrorsInterceptor)
@Get(':id')
findOne(@Param('id') id: string) {
  throw new InternalServerErrorException();
}