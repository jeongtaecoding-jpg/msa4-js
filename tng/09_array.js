
//    ******************* 내 답변 **********************

// // 원본은 보존하면서 오름차순 정렬 해주세요.
// const ARR1 = [ 6, 3, 5, 8, 92, 3, 7, 5, 100, 80, 40 ];
// const copy = [...ARR1];
// const resultARR1 = ARR1.sort((a, b) => a - b);
// console.log copy, resultARR1);


// // 짝수와 홀수를 분리해서 각각 새로운 배열 만들어 주세요.
// let ARR2 = [5,7,3,4,5,1,2];

// let resultARR_odd;
// let resultARR_even;

// resultARR_odd = ARR2.filter(item => (item % 2) !== 0);
// resultARR_even = ARR2.filter(item => (item % 2) === 0);

// console.log(resultARR_odd, resultARR_even);


// 각 요소에 3으로 나눈 나머지를 구해서, 그 나머지를 모아 새로운 배열로 생성해 주세요.
// const ARR3 = [5,7,3,4,5,1,2,0];
// let resultARR3 = ARR3.map(val => val % 3);
// console.log(resultARR3);




//    *************** 강사님 답변 **********************

const ARR1 = [ 6, 3, 5, 8, 92, 3, 7, 5, 100, 80, 40 ];
const copy = [...ARR1];
copy.sort((a, b) => a - b);
console.log(ARR1, copy);


const ARR2 = [5,7,3,4,5,1,2,0];
const even = ARR2.filter(val => val % 2 === 0);
const odd = ARR2.filter(val => val % 2 !== 0);
console.log(even, odd);


const ARR3 = [5,7,3,4,5,1,2,0];
console.log(ARR3.map(val => val % 3));


// 
const ARR4 = [5,7,3,4,5,1,2,0];
const result = test(ARR4); 
console.log(ARR4, result);

function test(arr) {
  return arr.sort((a, b) => a = b);
}
