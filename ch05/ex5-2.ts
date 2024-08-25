// 5.1.1 모듈 다시 내보내기

// CommonModule.ts

@Module({
  providers: [CommonService],
  exports: [CommonService],
})
export class CommonModule { }



// CommonService.ts

@Injectable()
export class CommonService {
  hello(): string {
    return 'Hello from CommonService';
  }
}



// CoreModule.ts

@Module({
  imports: [CommonModule],
  exports: [CommonModule],
})
export class CoreModule { }



// AppModule.ts

@Module({
  imports: [CoreModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}



// AppController.ts

@Controller()
export class AppController {
  constructor(private readonly commonService: CommonService) { }

  @Get('/common-hello')
  getCommonHello(): string {
    return this.commonService.hello();
  }
}