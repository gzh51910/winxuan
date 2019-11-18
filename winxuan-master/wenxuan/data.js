var ul=document.querySelector('.newgoods-box').children;
var lis=ul[0].children
var arr=[];
for(let i=0;i<lis.length;i++){
    let o={};
    o.title=lis[i].querySelector('.name').innerText;
    o.con=lis[i].querySelector('span').innerText;
    o.img=lis[i].querySelector('.img img').src;
    arr.push(o)
}
console.log(arr);
