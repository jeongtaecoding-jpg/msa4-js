// Destructuring (구조분해) 문법
// 배열이나 객체에서 값을 추출하여 변수에 바로 할당하는 문법
const arr = [1, 2, 3, 4, 5];

// 하나하나 접근해서 하는건 비효율적
// let arrVal1 = arr[0];
// let arrVal2 = arr[1];

// const [val1, val2, val3, val4, val5] = arr;
// const [val1, , , , val5] = arr;
// const [val1, val2] = arr;
const [, val2, , val4] = arr;



// --------------------------------
const user = {
  name: '홍길동',
  age: 20,
  gender: 'M',
  addr: '서울시'
}
// addr 서울시 없으면 그냥 없음으로 뜸

// 질문: console.log(age)를 출력하면 20이 뜰 거라 생각해서 했는데 에러가 뜨고
// console.log(userAge)를 하니 20이 떴습니다. 근데 console.log(addr)은
// 또 출력이 되는데 이유가 무엇입니까?

//  답변 : age 와 addr의 차이점 : 선언을 한 차이!!! userAge가 선언된 거지 age선언이 된 것이 아님.
//  보충 설명해보자면 age에 userAge라는 새로운 변수명이 선언된 것이고 addr에는 단순한 디폴트 값이 부여된 것임.

// const age = 0;
const { age: userAge, gender, addr = '없음', info } = user;
console.log(age);
console.log(addr);
console.log(userAge);


