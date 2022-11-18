var shoppingCart =document.querySelector('.cartItem');
  
// get the product from localstorage
let local =JSON.parse( localStorage.getItem("cart"))   || [];
renderCart();


function renderCart(){
 shoppingCart.innerHTML ='';
 if(local.length !==0){
  local.forEach((item)=> {
   shoppingCart.innerHTML +=`
   <div class="cartItem-element">
   <div class="product-image">
   <i class="fa-solid fa-xmark" id="cross" onclick="removeItem(${item.id})"></i>
   <img src="/image/diamon12.png" alt="">
   <h4>${item.name}</h4>
  </div>
   <p>$${item.price}</p>
   <div class="product-unit">
    <div class="icon"><span class="minus1" onclick=" decrementNumber( ${item.id})">-</span></div>
    <p class="cartNumber" id="${item.id}">${item.incart}</p>
    <div class="icon"><span class="plus1" onclick=" incrementNumber( ${item.id})">+</span></div>
    </div>
 </div>
   `
  })
 }
}
