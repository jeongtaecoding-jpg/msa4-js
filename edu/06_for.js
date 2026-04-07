//  for 문

//  기본문법
// for(초기값; 조건식; 1회 루프당 증감 값) {
//     // 반복하고 싶은 처리
// }


// for(let startDan = 0; startDan < 3; startDan++) {
//   if (startDan === 1) {
//     // break: 처리중 break를 만나면 그 즉시 루프 종류
//     break;
//   }
//   console.log(`${startDan}번째 루프문`);
// }


// for(let startDan = 0; startDan < 5; startDan++) {
//   // continue: 만나는 즉시 그 다음 루프로 진행
//   if(startDan % 2 === 0) {
//     continue;
//   }
//   console.log(`${startDan}번째 루프문`);
// }


// breakpoint(빨간 점)는 for, if문이나 console같이 실행되는 문장에만 적어 놓는다.

// for (let startDan = 0; startDan < 3; startDan++) {
//     console.log(`부모: ${startDan}번째`);

//     for (let z = 0; z < 3; z++) {
//       console.log(`자식: ${z}번째`);
//     }
// }


// for (let a = 1; a < 10; a++) {
//    console.log(`2 X ${a} = ${2*a}`)
// }

let startDan = 2;

for ( let startDan = 2; startDan < 10; startDan++){
   console.log( `** ${startDan}단 **`);

   for ( let j = 1; j < 20; j++)
    console.log(`${startDan} X ${j} = ${startDan*j}`);
}
