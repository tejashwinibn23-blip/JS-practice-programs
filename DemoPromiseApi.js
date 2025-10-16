const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("promise 1");
  }, 1000);
});
const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("promise 2");
  }, 3000);
});
const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("promise 3");
  }, 3000);
});
Promise.any([p1,p2,p3]).then((res)=>console.log(res))