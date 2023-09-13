
    const addBtn = document.querySelector('.plus');
    const minusBtn = document.querySelector('.minus');
    const countDisplay = document.querySelector('.form p');
    const addToCart = document.querySelector('.cart-button')
    const basketDisplay = document.createElement('div')
    const header = document.querySelector('header')

    const basketDisplayBtn = document.querySelector('.basketDisplayBtn')
    const arrows = document.querySelector('.arrows')
    basketDisplay.id = 'basketDisplay'

    /* add to cart */
/* creating array and object*/
    let quantity = 0
    let basket = []
    const product = {
        name:'Fall Limited Edition Sneaker',
        quantity: quantity,
        price: 125.00
    }

    let countDisplayNum = 0;
  

    /* give function to add button */
    addBtn.addEventListener('click', () => {
     
      countDisplayNum += 1;
      countDisplay.innerText = countDisplayNum;

      product.quantity += 1
    });

    minusBtn.addEventListener('click',()=>{
        countDisplayNum -=1
         countDisplay.innerText = countDisplayNum
       product.quantity -=1
       notZero()
        
    });


/* adding click listener to cart button */
let totalCalc = product.quantity * product.price
total = document.createElement('p')
total.textContent = totalCalc
const basketItems = document.querySelector('.basket-items')

addToCart.addEventListener('click',()=>{
    
    basket.push(product)
  
    
    updatePrice()
    priceTotal()
   
    
    basketItems.style.display = 'block'
    basketItems.textContent = product.quantity
    checkZero()
    
})



/*click function to display */
basketDisplayBtn.addEventListener('click',( )=>{
    basketDisplay.style.display = 'block'
    header.appendChild(basketDisplay)
    
    /* get rid of the arrows so it is not shown underneath the basket div */
    arrows.style.display = 'none'
    checkEmpty()

  
})

/* function to check cart to show how much to display */

const checkEmpty = ()=>{
    /* if there is nothing in the basket, the cart event listener div will say "empty"*/
    if (basket.length === 0){
        basketDisplay.innerText = "Empty"

    /* if it is not empty, add the styles to the cart click event listener div */
    }else{
        basketDisplay.appendChild(cart)
    basketDisplay.appendChild(cartImage)
 
    basketDisplay.appendChild(nameShoe)
    basketDisplay.appendChild(price)
    basketDisplay.appendChild(total)
   
    
    }
}

/* creating function to disaply text */
let cartImage = document.createElement('img')
cartImage.src = "images/image-product-1-thumbnail.jpg"
cart = document.createElement('h2')

cart.classList.add('cart')
cart.innerText = 'Cart'
let nameShoe = document.createElement('p')
nameShoe.classList.add('name-shoe','form-text')
nameShoe.textContent = product.name
let price = document.createElement('p')
price.classList.add('cart-price', 'total-row', 'form-text')
total.classList.add('cart-total', 'total-row', 'form-text')

/* updating price to add to function so cart will show the correct price when clicked */
const updatePrice = () => {
    price.textContent = `${product.price} * ${product.quantity}`;
}

/* updating the total price so it shows next to the above funciton */
const priceTotal = ()=>{
    total.textContent = product.price * product.quantity
    
       

}


/* if user removes item cart counter will not be shown */
const checkZero = ()=>{
   if (product.quantity <= 0){
    basketItems.style.display = "none"
   }
}

const notZero =()=>{
    if (countDisplay.innerText === 0){
        minusBtn.style.display = 'none'
       
    }
}




