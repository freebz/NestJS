@Get()
getHello(@Req() req): string {
    console.log(req.user);
}