// 특정 컨트롤러 전체에 적용할 때

@Controller('users')
@UseFilters(HttpExceptionFilter)
export class UsersController {
  ...
}