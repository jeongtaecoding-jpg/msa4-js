const NONE = document.getElementsByClassName('none-li');
NONE[7].style.backgroundColor = 'beige';



const UL = document.querySelector('#ul'); // 부모 요소 접근
const LI = document.createElement('li'); // 요소 생성
LI.textContent = "장기";




const TARGET = document.querySelector('ul li:nth-child(3)'); // 타겟 요소
UL.insertBefore(LI, TARGET);

const tagEle = document.getElementsByTagName('li');

for ( let i = 0; i < tagEle.length; i++ ) {
  tagEle[i].style.color = i % 2 ? 'red' : 'blue';
}
