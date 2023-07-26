const allImages = document.querySelectorAll('.carousel-item')
console.log(allImages)

rightArrow = document.querySelector('.right-arrow')
leftArrow = document.querySelector('.left-arrow')
let currentPosition = 0


rightArrow.addEventListener('click', () => {
    if (currentPosition < allImages.length - 1) {
      allImages[currentPosition + 1].classList.add('active');
      allImages[currentPosition].classList.remove('active');
      currentPosition += 1;
    

    } else {
      allImages[0].classList.add('active'); // Go back to the first image
      allImages[currentPosition].classList.remove('active');
      currentPosition = 0;
     
    }
  });


leftArrow.addEventListener('click',()=>{
    if(currentPosition != 0 ){

    
  
    allImages[currentPosition - 1].classList.add('active')
    allImages[currentPosition].classList.remove('active')
    currentPosition -= 1

    }else{
    allImages[allImages.length - 1].classList.add('active')
    allImages[currentPosition].classList.remove('active')
    currentPosition = allImages.length - 1
    }
})


/* wide view carousel */
const imageSelector = document.querySelectorAll('.row-image');

imageSelector.forEach((item, index)=>{
    
    item.addEventListener('click',()=>{
      
    imageSelector.forEach((item)=>{
        item.style.border = 'none'
        item.style.filter = 'blur(0)'

    })

      item.style.border = "2px solid orange"
      item.style.filter = 'blur(2px)'
        allImages.forEach((image)=>{
            image.classList.remove('active')
        })
        allImages[index].classList.add('active')
        
    })
})
