// 변수(variable): 변하는 데이터(값)를 저장하는 공간


// var: 중복 선언 가능, 재할당 가능, 함수레벨 스코프(현재는 안 씀)
var num1; // 변수 선언
var num1  // 중복 선언 가능
var age = 1; // 변수 선언 및 초기화(변수 선언하고 최초의 값을 담음)

age = 20; // 재할당

num1 = 90; // num 1 변수의 초기화

str1 = 'sadsd'; // str1 변수 var로 선언 및 초기화 (앞의 키워드 생략시 var)


// let : 중복 선언이 불가능, 재할당 가능, 블록레벨 스코프
let name = '홍길동';
// let name; // 중복 선언 불가능
name = '둘리';
console.log(name);


// 상수 (const) : 중복 선언 불가능, 재할당 불가능, 블록레벨 스코프
const gender = 'M'
// const gender; // 중복 선언 불가능 
// gender = 'F'; // 재할당 불가능


// 호이스팅 (hoisting) : 인터프리터 변수와 함수의 메모리 공간을 선언 전에 미리 할당 하는 것
 console.log(hoho); // 이거는  undefined 출력
 var hoho = '호호';
 console.log(hoho); // '호호' 출력

 console.log(haha); // 참조 에러 발생 ( 페이탈 에러에 속하기 때문에 반드시 수정!!!!)
 let haha = '하하';
console.log(haha); // 한 마디로 var는 호이스팅 가능 / let, const는 불가능
