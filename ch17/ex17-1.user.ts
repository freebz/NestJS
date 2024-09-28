// 17.3 유저 서비스에 클린 아키텍처 적용하기

export class User {
  constructor(
    private id: string,
    private name: string,
    private email: string,
    private password: string,
    private signupVerifyToken: string,
  ) { }
}