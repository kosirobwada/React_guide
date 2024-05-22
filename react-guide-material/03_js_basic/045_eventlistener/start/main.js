const h1Element = document.querySelector('h1');
console.log(h1Element);
console.log(h1Element.textContent);
h1Element.textContent = '変更後のタイトル1';

const btnEl = document.querySelector('button');
// btnEl.addEventListener('click', (e) => {
//     console.dir(e.target.textContent);
//     console.log('hello');
// })
const helloFn = (e) => {
    console.dir(e.target.textContent)
    console.log('hello')
}
btnEl.addEventListener('click', helloFn);