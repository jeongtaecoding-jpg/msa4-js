// 내 버전

// const NONE = document.getElementsByClassName('none-li');
// NONE[7].style.backgroundColor = 'beige';


// const UL = document.querySelector('#ul'); // 부모 요소 접근
// const LI = document.createElement('li'); // 요소 생성
// LI.textContent = "장기";


// const TARGET = document.querySelector('ul li:nth-child(3)'); // 타겟 요소
// UL.insertBefore(LI, TARGET);

// const tagEle = document.getElementsByTagName('li');

// for ( let i = 0; i < tagEle.length; i++ ) {
//   tagEle[i].style.color = i % 2 ? 'red' : 'blue';
// }





// // 강사님 버전

const parentUl = document.querySelector('#ul');

// 1. '사과 게임' 위에 '장기' 콘텐츠를 가진 li 태그 삽입
// 넣을 위치 지정할 노드 선택
const appleLi = document.querySelector('#apple');
// 새로운 노드(장기 li) 생성
const newKoreanChess = document.createElement('li');

// textContent는 순수 텍스트를 전달하고, innerHTML 은 태그를 인식해서 전달하기에 보안상 위험!!!
newKoreanChess.textContent = '장기';
// '장기' 노드 삽입
parentUl.insertBefore(newKoreanChess, appleLi);


// // 2. '어메이징브릭'에 베이지 배경색 추가
const ulChildList = document.querySelectorAll('#ul > li')
ulChildList.forEach(item => {
  if(item.textContent === '어메이징브릭') {
    item.style.backgroundColor = 'beige';
  }
});


// 3. 리스트의 요소들의 글자색을 짝수(줄)는 빨강, 홀수(줄)는 파랑으로 수정
// ulChildList.forEach((item, key) => {
//   // 인덱스가 0부터 시작하니까 +1해서 사용
//   if((key + 1) % 2 === 0) {
//     item.style.color = 'red';
//   }
//   else {
//     item.style.color = 'blue';
//   }
// });

function setLineColor() {
  try {
    const ulChildList = document.querySelectorAll('#ul > li');
    if(ulChildList && ulChildList.length === 0) {
      throw new Error('노드 없음');
    }
ulChildList.forEach((item, key) => {
  // 인덱스가 0부터 시작하니까 +1해서 사용
  if((key + 1) % 2 === 0) {
    item.style.color = 'red';
  }
  else {
    item.style.color = 'blue';
  }
 });
 } catch(err) {
  console.log(err);
 }
}
setLineColor();

// 요소 추가 시 주의 사항 : 스타를 마지막에 추가할 시 그 함수를 한번 더 호출해야 한다.
// ulchildList 등의 노드들도 한번 더 가져와야 한다.
const starcreft = document.createElement('li');
starcreft.textContent = '스타';
parentUl.insertBefore(starcreft, appleLi);
setLineColor();
