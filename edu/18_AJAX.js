const url = 'https://picsum.photos/v2/list?page=4&limit=5';

const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
  e.preventDefault();   // 기존 이벤트 취소

  const baseUrl = 'https://picsum.photos/v2/list';
  // const page = form.page.value;
  // const limit = form.limit.value;
  const page = form['page'].value;
  const limit = form['limit'].value;
  const url = `${baseUrl}?page=${page}&limit=${limit}`;

  // axios.get 기본 문법
  // axios.get(url)
  // .then(response => {
  //   // 요청이 성공 했을 때, 처리 작성 부분
  // })
  // .catch(error => {
  //   // 처리 중 예외가 발생했을 때, 처리 작성 부분
  // })
  // .finally(() => {
  //   // 성공여부와 관계없이 필요한 처리 작성 부분 (finally는 생략 가능)
  // });
  
  
  
  axios.get(url)
  .then(response => {
    console.log(response);
  
    // 카드들 넣을 컨테이너
    const container = document.querySelector('.container');
    container.textContent = '';
  
    // response.data : 서버가 보내온 데이터가 저장된 프로퍼티
    response.data.forEach(item => {
      
      // 카드 이미지 요소 생성
      const newCardImg = document.createElement('div');
      newCardImg.style.backgroundImage = `url('${item.download_url}')`;
      newCardImg.classList.add('card-img');
  
      // `url('${item.download_url}')`;  리터럴 템플릿 방법(이거 씀)
      // "url('" + item.download_url + "')"; + 연산자를 이용한 방법(안씀)
      
      // 카드 저작권자 요소 생성
      const newAuthor = document.createElement('span');
      newAuthor.textContent = `${item.id} : ${item.author}`;
  
      // 카드 요소 생성
      const newCard = document.createElement('div');
      newCard.classList.add('card');
      newCard.appendChild(newCardImg);
      newCard.appendChild(newAuthor);
  
      // 컨테이너에 카드 삽입
      container.appendChild(newCard);
    });
  })
  .catch(error => {
    console.error(error);
  });
})


// const btnSearch = document.querySelector('#btnSearch');
// btnSearch.addEventListener('click', () => {
//   const baseUrl = 'https://picsum.photos/v2/list';
//   const page = document.querySelector('#page').value;
//   const limit = document.querySelector('#limit').value;

//   const url = `${baseUrl}?page=${page}&limit=${limit}`;

//   // axios.get 기본 문법
//   // axios.get(url)
//   // .then(response => {
//   //   // 요청이 성공 했을 때, 처리 작성 부분
//   // })
//   // .catch(error => {
//   //   // 처리 중 예외가 발생했을 때, 처리 작성 부분
//   // })
//   // .finally(() => {
//   //   // 성공여부와 관계없이 필요한 처리 작성 부분 (finally는 생략 가능)
//   // });
  
  
  
//   axios.get(url)
//   .then(response => {
//     console.log(response);
  
//     // 카드들 넣을 컨테이너
//     const container = document.querySelector('.container');
//     container.textContent = '';
  
//     // response.data : 서버가 보내온 데이터가 저장된 프로퍼티
//     response.data.forEach(item => {
      
//       // 카드 이미지 요소 생성
//       const newCardImg = document.createElement('div');
//       newCardImg.style.backgroundImage = `url('${item.download_url}')`;
//       newCardImg.classList.add('card-img');
  
//       // `url('${item.download_url}')`;  템플릿 메소드 방법
//       // "url('" + item.download_url + "')";
      
//       // 카드 저작권자 요소 생성
//       const newAuthor = document.createElement('span');
//       newAuthor.textContent = `${item.id} : ${item.author}`;
  
//       // 카드 요소 생성
//       const newCard = document.createElement('div');
//       newCard.classList.add('card');
//       newCard.appendChild(newCardImg);
//       newCard.appendChild(newAuthor);
  
//       // 컨테이너에 카드 삽입
//       container.appendChild(newCard);
//     });
//   })
// })
// .catch(error => {
//   console.error(error);
// });

