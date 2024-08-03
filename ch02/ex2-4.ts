// 2.5.4 타입 구성하기

// 유니언 타입

function getLength(obj: string | string[]) {
  return obj.length;
}



type Status = "Ready" | "Waiting";



enum Status {
  READY = "Ready",
  WAITING = "Waiting",
}



// 제네릭 타입

function identity(arg: any): any {
  return arg;
}



function identity<T>(arg: T): T {
  return arg;
}