
// start click modal imagen seccion

document.addEventListener('DOMContentLoaded', () => {

    var modal = document.getElementById("imageModal");
    var modalImg = document.getElementById("modalImage"); 
    var images = document.querySelectorAll('.box .image img');
    
    images.forEach(img => {
      img.onclick = function() {
        modal.style.display = "block";
        modalImg.src = this.src;
      }
    });    
    var span = document.getElementsByClassName("close")[0];
    span.onclick = function() { 
      modal.style.display = "none";
    }
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }
  });
  
// end modal click imagen 

// start btn click imagen

document.addEventListener("DOMContentLoaded", function() {
  const favoriteItems = JSON.parse(localStorage.getItem('favorites')) || [];
  const cartItems = JSON.parse(localStorage.getItem('cart')) || [];

  document.querySelectorAll('.fas.fa-heart').forEach(function(heartButton) {
    heartButton.addEventListener('click', function(event) {
      event.preventDefault();
      const product = getProductInfo(event.target); 
      if (heartButton.classList.contains('liked')) {
        heartButton.classList.remove('liked');
        heartButton.style.color = '#333'; 
        removeFavorite(product);
      } else {
        heartButton.classList.add('liked');
        heartButton.style.color = 'red'; 
        addFavorite(product);
      }
    });
  });

  function getProductInfo(element) {
    const productElement = element.closest('.box');
    return {
      id: productElement.dataset.productId,
      title: productElement.querySelector('h3').innerText,
      price: productElement.querySelector('.price').innerText,
      image: productElement.querySelector('img').src
    };
  }

  function addFavorite(product) {
    favoriteItems.push(product);
    localStorage.setItem('favorites', JSON.stringify(favoriteItems));
  }

  function removeFavorite(product) {
    const index = favoriteItems.findIndex(item => item.id === product.id);
    if (index !== -1) {
      favoriteItems.splice(index, 1);
      localStorage.setItem('favorites', JSON.stringify(favoriteItems));
    }
  }

  document.getElementById('heart-icon').addEventListener('click', function(event) {
    event.preventDefault();
    window.location.href = 'favoritos.html';
  });

  document.getElementById('cart-icon').addEventListener('click', function(event) {
    event.preventDefault();
    window.location.href = 'cart.html';
  });
});

// end btn click imagen 


