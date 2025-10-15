const cart = ["macbook", "necklace", "ring", "saree"];
const validcart = true;
const promise = createOrder(cart);
promise
  .then((res) => proceedtoPayment(res))
  .then((res) => {
    console.log(res);
  })
  .catch((err) => console.log(err.message));
function createOrder(cart) {
  const pr = new Promise((resolve, reject) => {
    if (validcart) {
      resolve("cart is valid");
    } else {
      const err = new Error("invalid cart");
      reject(err);
    }
  });
  return pr;
}
function proceedtoPayment(res) {
  console.log(res);
  const pr = new Promise((resolve, reject) => {
    resolve("payment success");
  });
  return pr;
}
