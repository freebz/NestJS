// 10.4.3 시그니처

HMACSHA256(
  base64UrlEncode(header) + "." +
  base64UrlEncode(payload),
  'secret'
)