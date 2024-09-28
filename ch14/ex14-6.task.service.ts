// 14.2.3 타임아웃 선언 방식

@Timeout('TimeoutTask', 5000)
handleTimeout() {
  this.logger.log('Task Called by timeout');
}