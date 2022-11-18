    // filter product
    let icon = document.querySelector('#icon');
    let test = document.querySelector('.testing-product');
    icon.addEventListener('click', filterProduct);
    
    
    
    function filterProduct(){
    
      products.filter(()=>{
        let text = document.querySelector('.searchInput');
        let searchValue= text.value;
    
        for(i=0; i<products.length; i++){
          if(products[i].name.includes(searchValue)){
            test.innerHTML='';
             document.querySelector('.testing-product') .innerHTML+=`
         <div class="pro">
         <img src="image/diamond7.png">
         <div class="des">
             <span>${products[i].name}</span>
             <h5>Engagement Daimond</h5>
             <div class="star">
                 <i class="fas fa-star"></i>
                 <i class="fas fa-star"></i>
                 <i class="fas fa-star"></i>
                 <i class="fas fa-star"></i>
                 <i class="fas fa-star"></i>
             </div>
             <h4>$${products[i].price}</h4>
         </div>
         <a onclick="setItem(${products[i].id}) "><i class="fa fa-basket-shopping cart"></i></a>
      </div>
         `
    
          }else{
            // renderProduct()
          }
        }
        
      })
      
    }



