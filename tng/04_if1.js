// 내가 작성한 것

// let grade = 79;
// if (grade == 100){
//   console.log(`당신의 점수는 ${grade}점입니다. <A+>`);
// }
// else if ( grade >= 90 && grade < 100){
//   console.log(`당신의 점수는 ${grade}점입니다. <A>`);
// }
// else if (grade >= 80 && grade < 90){
//   console.log(`당신의 점수는 ${grade}점입니다. <B>`);
// }
// else if (grade >= 70 && grade < 80){
//   console.log(`당신의 점수는 ${grade}점입니다. <C>`);
// }
// else if (grade >= 60 && grade < 70){
//   console.log(`당신의 점수는 ${grade}점입니다. <D>`);
// }
// else if (grade < 60) {
//   console.log(`당신의 점수는 ${grade}점입니다. <F>`);
// }


// 강사님이 작성(업그레이드판)

let grade = 55;
let rank = 'F';  // 초기화는 무조건 하는 게 좋다! undefined 되면 페이탈 오류 날 수도

if(grade > 100 || grade < 0 || typeof grade !== 'number') {
  console.log('입력값 오류');
}
else {
  if (grade == 100){
    rank='A+';
  }
  else if ( grade >= 90){
    rank='A';
  }
  else if (grade >= 80){
    rank='B';
  }
  else if (grade >= 70){
    rank='C';
  }
  else if (grade >= 60){
    rank='D';
  }
  else {
    rank='F';
  }
  console.log(`당신의 점수는 ${grade}점입니다. <${rank}>`);
}

