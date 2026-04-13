const btnevent = document.querySelector('#btnevent');
btnevent.addEventListener('click', () => {
  alert('안녕하세요. 숨어있는 div를 찾아주세요.');
});

const tile =  document.querySelector('.tile');

tile.addEventListener('mouseenter', dugundugun);

let onoff = false;

tile.addEventListener('click', () => {
  if (!onoff){
    alert('들켰다');
    tile.style.backgroundColor = 'purple';
    tile.removeEventListener('mouseenter', dugundugun);
    onoff = true;
  }
  else {
    alert('숨는다');
    tile.style.backgroundColor = 'white';
    tile.addEventListener('mouseenter', dugundugun);
    onoff = false;

    moveRandom();
  }
});

function dugundugun() {
   alert('두근두근');
}

function moveRandom() {
  const maxX = window.innerWidth - 110;
  const maxY = window.innerHeight - 110;

  const randomX = Math.random() * maxX;
  const randomY = Math.random() * maxY;

  tile.style.left = randomX + 'px';
  tile.style.top = randomY + 'px';
}
