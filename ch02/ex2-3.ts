// 2.5.3 타입 정의하기

const user = {
  name: 'Dexter',
  age: 21,
}



interface User {
  name: string;
  age: number;
}

const user: User = {
  name: 'Dexter',
  age: 21,
}



class User {
  constructor(name: string, age: number) { }
}

const user: User = new User('Dexter', 21);


type MyUser = User;