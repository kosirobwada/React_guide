let a = 0;
console.log(a);

new Promise((resolve, reject) => {
    a = 1;
    resolve();
}).then((b) => {
    console.log(b)
}).catch((c) => {
    console.log('cateh', c)
})

setTimeout(() => {
    a = 1;
    console.log(a);
}, 2000);
