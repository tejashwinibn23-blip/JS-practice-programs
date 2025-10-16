const p1=new Promise((resolve,reject)=>{
    setTimeout(()=>{resolve("level one promises")},2000);
});
const p2=new Promise((resolve,reject)=>{
    setTimeout(()=>{resolve("level two promises")},10000);
})
async function handler()
{
console.log("hi");
const one=await p1;
console.log(one);
const two=await p2;
console.log(two);
}
handler();