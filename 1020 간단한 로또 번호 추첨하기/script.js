const NumberBox = document.querySelector('#number-box');
const TextBox = document.querySelector('#text-box');
const Play = document.querySelector('#play');
let Numbers = [0];

function getNumber (event) {
  if (Numbers.length==7) {
    NumberBox.innerHTML = '';
    TextBox.innerHTML = '';
    Play.innerText = '추첨하기';
    Numbers = [0];
    return
  }

  let NewNumber = 0;
  while (NewNumber in Numbers) {
    NewNumber = Math.floor(Math.random() * 45)+1;
  }
  Numbers.push(NewNumber);

  const span = document.createElement('span');
  span.classList.add('number')
  span.innerText = NewNumber;
  NumberBox.appendChild(span);

  if (Numbers.length==7) {
    const h4 = document.createElement('h4');

    h4.innerText = '6개의 번호가 모두 선택되었습니다.';

    TextBox.appendChild(h4);
    Play.innerText = '다시 뽑기';
  }

}

Play.addEventListener('click', getNumber);