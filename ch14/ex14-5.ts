// 14.2.2 인터벌 선언 방식

@Interval('intervalTask', 3000)
handleInterval() {
  this.logger.log('Task Called by interval');
}