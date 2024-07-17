
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

  heartElements.forEach((el, index) => {
      el.id = `heart-${index + 1}`;
  });

  cartBtnElements.forEach((el, index) => {
      el.id = `cart-btn-${index + 1}`;
  });

  heartElements.forEach(el => {
      el.addEventListener('click', (event) => {
          event.preventDefault();
          updateFavorites(el.id);
      });
  });

  cartBtnElements.forEach(el => {
      el.addEventListener('click', (event) => {
          event.preventDefault();
          updateCart(el.id);
      });
  });

  function toggleCart() {
      const containerCartProducts = document.querySelector('.container-cart-products');
      containerCartProducts.classList.toggle('hidden-cart');
  }

  function toggleFavorites() {
      const containerFavorites = document.querySelector('.container-favorites');
      containerFavorites.classList.toggle('hidden-cart');
  }

  function updateFavorites(itemId) {
      const favoritesCount = document.getElementById('favorites-count');
      let count = parseInt(favoritesCount.textContent);
      favoritesCount.textContent = count + 1;
      toggleFavorites();
  }

  function updateCart(itemId) {
      const cartCount = document.getElementById('cart-count');
      let count = parseInt(cartCount.textContent);
      cartCount.textContent = count + 1;
      toggleCart();
  }
// end btn click imagen 


