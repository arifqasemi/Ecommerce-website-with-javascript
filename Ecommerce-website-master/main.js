
var bar = document.querySelector('.hamburger');
aside = document.querySelector('.navbar');
var close = document.querySelector('.close');

   // Cart file //
var bag = document.querySelector('.bag');
var Cart = document.querySelector('.Cart');


  // menu display //
bar.addEventListener('click', ()=>{
    aside.classList.add('active');
})
//    // menu close //
close.addEventListener('click', ()=>{
    aside.classList.remove('active');
})

    // Cart display //
// bag.addEventListener('click', (e)=>{
//     e.preventDefault();
//    Cart.classList.toggle('display') ;
// })

  // Render  Product From Array
  var productPlace = document.querySelector('.pro-container');
  var productEL = document.querySelector(".products");
  
  
  
  
  function renderProduct(){
    
  products.forEach((x) => {
    let {id,name,incart,price,imgSrc}=x
    //  console.log(x);
     productPlace.innerHTML +=`
     <div class="pro"onclick="showDetails(${id})">
     <img src="${imgSrc}">
     <div class="des">
         <span>${name}</span>
         <h5>Engagement Daimond</h5>
         <div class="star">
             <i class="fas fa-star"></i>
             <i class="fas fa-star"></i>
             <i class="fas fa-star"></i>
             <i class="fas fa-star"></i>
             <i class="fas fa-star"></i>
         </div>
         <h4>$${price}</h4>
     </div>
  </div>
     `
  });
  
  
  }
  renderProduct();
  
  
  // add onclick event for the cart 
   var shopping = document.querySelectorAll('.cart');
  
  
  for( let i=0; i < shopping.length; i++){
   shopping[i].addEventListener('click', ()=>{
  console.log('itw')
  
   })
  }
  
  
    
  // product details
  const detail = document.querySelector('.productsDetails')
  
  let bottle =[];
  
  function showDetails(id){
      // console.log(id)
  
      
    let find= products.find((x)=>x.id === id)
    bottle.push(find);
    console.log(find)
    sessionStorage.setItem('productDetials', JSON.stringify(bottle))
    window.location = 'sproduct.html';
    return false
  
    
  }
  
  
  function getProduct(){
    let bottle =JSON.parse(sessionStorage.getItem('productDetials')) || [];
  
    let dog = document.querySelector('.product-name')
    console.log(bottle)
    bottle.find((item)=>{
      dog.innerHTML+=`
      <div class="contain">
      <div class="image">
      <img src="image/diamond7.png" alt="">
      </div>
      <div class="detials">
       <h5>name: ${item.name}</h5>
       <h5>price: $${item.price}</h5>
       <h5>instock: ${item.instock}</h5>
       <div class="size">
       <select >
                  <option>Select Size</option>
                  <option>XL</option>
                  <option>XXL</option>
                  <option>Small</option>
                  <option>Large</option>
                 
       </select>
       <a class="cart" onclick="setItem(${item.id}) "> add to card</a>
       </div>
       <h5>Product Details:</h5>
       <p>${item.description}</p>
       <a class="cart" href="index.html">Go back</a>
      </div>
  </div>
     `
  
    })
  
  }

  let box =[];

  function setItem(id){
    
   
    let bottle =JSON.parse(sessionStorage.getItem('productDetials')) || [];
    // localStorage.setItem("cart", JSON.stringify(bottle));


    let local =JSON.parse( localStorage.getItem("cart"))
    if(local==null){
      localStorage.setItem("cart", JSON.stringify(bottle));
    }
      let search =local.find((item)=>item.id ===id)
      if(search !==undefined){
        alert('the product already exists in the cart') 
      }
     else if(local){
      let local =JSON.parse( localStorage.getItem("cart"))
      local.push(...bottle)
      localStorage.setItem("cart", JSON.stringify(local));
      
     }else{
     let bottle =JSON.parse(sessionStorage.getItem('productDetials')) || [];
     localStorage.setItem("cart", JSON.stringify(bottle));
      
     }
     

  
     calculate();
   }



 


   // //   increase item number in cart //
  var cart1 = document.querySelector('.cartNumber');

  function incrementNumber(id){ 
    local =JSON.parse( localStorage.getItem("cart"))   || [];
     let search =local.find((x)=>x.id ===id);

    if(search !==undefined && search.incart < search.instock){
      search.incart += 1;
      document.getElementById(id).innerHTML =search.incart;

    }
    localStorage.setItem("cart", JSON.stringify(local));
    renderPrice();
    calculate();

  
  }



   function decrementNumber(id){
    local =JSON.parse( localStorage.getItem("cart"))   || [];
    let search =local.find((x) =>x.id ===id)
   if(search !==undefined  && search.incart >0){
    search.incart -= 1;
    document.getElementById(id).innerHTML =search.incart;
   
    // update(id)
   }
   
    // renderPrice();
    localStorage.setItem("cart", JSON.stringify(local));
    calculate();
    renderPrice();

  }


   function update(id){
    local =JSON.parse( localStorage.getItem("cart"))   || [];
    let itemSelected =id;
    let search =local.find((x) =>x.id ===id)
    document.querySelector('.number').innerHTML =search.incart;
  calculate();
  }


  function calculate(id){
    local =JSON.parse( localStorage.getItem("cart"))   || [];
   let cartTotal = document.querySelector('.number');
   cartTotal.innerHTML =local.map((x) =>x.incart).reduce((x,y) => x+y,0);


}


    // total price //
  function renderPrice(){
    local =JSON.parse( localStorage.getItem("cart"))   || [];
   let totalPrice=0;
   local.forEach((item)=>{
  
  totalPrice += item.price * item.incart;
  })
  
    document.querySelector('.subtotal span').innerHTML=totalPrice.toFixed(2);
   
  }


  // // remove item from the cart //
  function removeItem(id){
    local = local.filter((x) => x.id !== id);
   localStorage.setItem("cart",JSON.stringify(local))
   renderCart();
   calculate();
   renderPrice()
  }