// 5.1.2 전역 모듈

@Global()
@Module({
  providers: [CommonService],
  exports: [CommonService],
})
export class CommonModule { }