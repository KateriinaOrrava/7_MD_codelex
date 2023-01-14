/* eslint-disable quotes */

const btn = document.querySelectorAll<HTMLElement>('.btn');
const box = document.querySelectorAll<HTMLElement>('.fields-box--element');
const body = document.querySelector<HTMLElement>('.body');
const inputText = document.querySelector<HTMLInputElement>('.fname');

// 1//
btn[0]?.addEventListener('click', () => {
  box[0].style.backgroundColor = 'yellow';
});
// 2
btn[1]?.addEventListener('click', () => {
  box[1].innerHTML = 'SUCCESS';
});
// 3
btn[2]?.addEventListener('click', () => {
  box[2].style.opacity = '0';
});
// 4
btn[3]?.addEventListener('click', () => {
  if (box[3].style.opacity === '0') {
    box[3].style.opacity = '1';
  } else {
    box[3].style.opacity = '0';
  }
});
// 5
const colors: string[] = ['red', 'blue', 'green', 'grey', 'yellow'];
btn[4]?.addEventListener('click', () => {
  const randColor: string = colors[Math.floor(Math.random() * colors.length)];
  box[4].style.backgroundColor = randColor;
});
// 7
btn[6]?.addEventListener('click', () => {
  box[0].style.backgroundColor = '#18D5E1';
  box[1].style.backgroundColor = '#18D5E1';
  box[2].style.backgroundColor = '#18D5E1';
  box[3].style.backgroundColor = '#18D5E1';
  box[4].style.backgroundColor = '#18D5E1';
  box[5].style.backgroundColor = '#18D5E1';
  body.style.backgroundColor = '#000000';
});
// 6

const increaseFontSizeBy1px = () => {
  const style = window.getComputedStyle(document.getElementById('here')).getPropertyValue('font-size');
  const currentSize = parseFloat(style);
  let newSize = '';
  newSize = `${currentSize + 1}px`;
  return newSize;
};
btn[5]?.addEventListener('click', () => {
  box[5].style.fontSize = increaseFontSizeBy1px();
});

// ?
box[0]?.addEventListener('mouseover', () => {
  box[0].style.backgroundColor = 'red';
});

inputText?.addEventListener('input', () => {
  const inputChangeP = document.querySelector<HTMLElement>('.input-text');

  inputChangeP.innerHTML = inputText.value;
});

const contdownFunction = () => {
  let timeleft = 10;
  const downloadTimer = setInterval(() => {
    if (timeleft <= 0) {
      clearInterval(downloadTimer);
      document.getElementById("countdown").innerHTML = "Finished";
    } else {
      const timeHereLeft = `${timeleft} seconds remaining`;
      document.getElementById("countdown").innerHTML = timeHereLeft;
    }
    timeleft -= 1;
  }, 1000);
};
box[4]?.addEventListener('mouseover', () => {
  contdownFunction();
});
