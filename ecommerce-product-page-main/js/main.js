
    /* product counter */
    const addBtn = document.querySelector('.plus');
    const minusBtn = document.querySelector('.minus');
    const countDisplay = document.querySelector('.form p');
    const addToCart = document.querySelector('.cart-button')
    const basketDisplay = document.createElement('div')
    const header = document.querySelector('header')

    basketDisplay.classList.add('.basket-display')
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
    addBtn.addEventListener('click', (event) => {
      event.preventDefault(); // Prevents the default behavior of the <img> tag
      countDisplayNum += 1;
      countDisplay.innerText = countDisplayNum;

      product.quantity += 1
    });

    minusBtn.addEventListener('click',()=>{
        countDisplayNum -=1
        countDisplay.innerText = countDisplayNum
    });


/* adding click listener to cart button */
let totalCalc = product.quantity * product.price
total = document.createElement('p')
total.textContent = totalCalc


addToCart.addEventListener('click',()=>{
    basket.push(product)
  
    
    updatePrice()
    priceTotal()
    
    
})



/*click function to display */
basketDisplayBtn.addEventListener('click',()=>{
    basketDisplay.style.display = 'block'
    header.appendChild(basketDisplay)
    
    arrows.style.display = 'none'
    checkEmpty()
  
})

/* function to check cart to show how much to display */

const checkEmpty = ()=>{
    if (basket.length === 0){
        basketDisplay.innerText = "Empty"
    }else{
    basketDisplay.appendChild(cart)
    basketDisplay.appendChild(nameShoe)
    basketDisplay.appendChild(price)
    basketDisplay.appendChild(total)
   
    }
}

/* creating function to disaply text */
cart = document.createElement('h2')
cart.innerText = 'Cart'
let nameShoe = document.createElement('p')
nameShoe.textContent = product.name
let price = document.createElement('p')



const updatePrice = () => {
    price.textContent = `${product.price} * ${product.quantity}`;
}

const priceTotal = ()=>{
    total.textContent = product.price * product.quantity
}




   




