// 2.5.2 타입스크립트에서 지원하는 타입

typeof instance === "undefined"



// 객체 타입

const dexter = {
  name: 'Dexter Han',
  age: 21,
  hobby: ['Movie', 'Billiards'],
}



// 함수 타입

typeof func === "function"



// any / unknown / never

type NonString<T> = T extends string ? naver : T;