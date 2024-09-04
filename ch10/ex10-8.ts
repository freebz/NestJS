// 10.5 유저 서비스의 이메일 인증 처리와 JWT 발급

// 10.5.1 회원 가입 이메일 인증

const url = `${baseUrl}/users/email-verify?signupVerifyToken=${signupVerifyToken}`;