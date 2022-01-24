const _elementsnavBar = {
    menuMobile: document.querySelector('.menu-hamburguer'),
    navbar: document.querySelector('.navbar')
}
const _elementsGallery = {
    mainImg: document.querySelector('.product-img__main-img'),
    smallImg: document.querySelectorAll('.product-img__gallery-img')
}
const _elementsShop = {
    product: document.querySelectorAll('.product1')
}
_elementsnavBar.menuMobile.addEventListener('click', () =>{
    _elementsnavBar.navbar.classList.toggle('shownavbar')
    if(_elementsnavBar.menuMobile.classList.contains('fa-bars')){
        _elementsnavBar.menuMobile.classList.replace('fa-bars', 'fa-times')
    } else {
     _elementsnavBar.menuMobile.classList.replace('fa-times', 'fa-bars')
    }
})
_elementsGallery.smallImg.forEach(img =>{
    img.addEventListener('click', () =>{
      _elementsGallery.mainImg.src = img.src;
  })
})
_elementsShop.product.forEach(product =>{
    product.addEventListener('click', (e) =>{
        window.location.href = 'singleproduct.html'
    })
})