const btn = document.querySelectorAll<HTMLButtonElement | null>('.btn');
const box = document.querySelectorAll<HTMLDivElement | null>('.fields-box--element');
const body = document.querySelector<HTMLBodyElement | null>('.body');
const inputText = document.querySelector<HTMLInputElement | null>('.fname');

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
// 1.2
box[0]?.addEventListener('mouseover', () => {
  box[0].style.backgroundColor = 'red';
});

// const increaseFontSizeBy1px = () => {
// const style = window.getComputedStyle(document.getElementById('here')).getPropertyValue('font-size');
//   const currentSize = parseFloat(style);
//   let newSize = '';
//   newSize = `${currentSize + 1}px`;
//   return newSize;
// };

const counter = document.querySelector<HTMLElement>('#here');

btn[5]?.addEventListener('click', () => {
  // box[5].style.fontSize = increaseFontSizeBy1px();
  let count = 0;
  const timer = setInterval(() => {
    counter.innerHTML = (((count++) + 1).toString());
    if (count === 10) {
      clearInterval(timer);
    }
  }, 3000);
});
// ?

const counterExtra = document.querySelector<HTMLElement>('#hereExtra');
let extraCounter = 0;
const extra = () => {
  counterExtra.innerHTML = (((extraCounter++) + 1).toString());
};
let extraTimer:NodeJS.Timer;
box[4]?.addEventListener('mouseover', () => {
  extraTimer = setInterval(extra, 1000);
});
box[4]?.addEventListener('mouseleave', () => {
  clearInterval(extraTimer);
  counterExtra.innerHTML = '0';
});
// input
inputText?.addEventListener('input', () => {
  const inputChangeP = document.querySelector<HTMLElement>('.input-text');

  inputChangeP.innerHTML = inputText.value;
});
// šei nospiežot 7.pogu aiziet konsolēt ik pēc 1 sekundes vienu un to pašu
const Clo = () => {
  console.log('hello');
};
btn[7]?.addEventListener('click', () => {
  setInterval(Clo, 3000);
});