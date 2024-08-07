const decrease= document.getElementById('decrease');
const countlabel= document.getElementById('countlabel')
const productcount=document.getElementById('productcount')
const increase= document.getElementById('increase');
const reset= document.getElementById('reset');
const product1=document.getElementById("product1");
const product2=document.getElementById("product2");
const reset2=document.getElementById("reset2");
const finalprice=document.getElementById("finalprice")
let sub=document.getElementById('sub')




let count=0;
let product=0;

increase.onclick=function(){
    count++;
    countlabel.textContent=count;
}
        decrease.onclick=function(){
            count--;
            countlabel.textContent=count;
        }
                reset.onclick=function(){
                    count=0;
                    countlabel.textContent=count;
                }


product1.onclick= function(){
    product+=5;
    productcount.textContent=product;
}
            product2.onclick= function(){
                product-=5;
                productcount.textContent=product;
            }
                    reset2.onclick= function(){
                        product=0;
                        productcount.textContent=product;
                    }
sub.onclick=function(){
    sub=product*count
    finalprice.textContent=(`${sub}$`);
    if (sub==0 || sub<0){
        alert('you have no money or you put nothing in the cart');
}
    else{
      alert (`you have paid ${finalprice.textContent}`);
    }
}