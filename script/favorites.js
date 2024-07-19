document.addEventListener("DOMContentLoaded", function() {
    const favoritesSection = document.getElementById("favorites");
  
    let favorites = localStorage.getItem("favorites");
    if (favorites) {
      favorites = JSON.parse(favorites);
  
      favorites.forEach(productId => {
        const productElement = getProductElementById(productId);
        if (productElement) {
          favoritesSection.appendChild(productElement);
        }
      });
    }
  });
  
  function getProductElementById(productId) {
  
    const productData = getProductDataById(productId);
  
    const productDiv = document.createElement("div");
    productDiv.className = "box";
    
    const discountSpan = document.createElement("span");
    discountSpan.className = "discount";
    discountSpan.innerText = productData.discount;
  
    const imageDiv = document.createElement("div");
    imageDiv.className = "image";
  
    const img = document.createElement("img");
    img.src = productData.imgSrc;
    img.alt = productData.imgAlt;
  
    imageDiv.appendChild(img);
  
    const contentDiv = document.createElement("div");
    contentDiv.className = "content";
  
    const h3 = document.createElement("h3");
    h3.innerText = productData.name;
  
    const priceDiv = document.createElement("div");
    priceDiv.className = "price";
    priceDiv.innerText = `${productData.price} ${productData.oldPrice}`;
  
    contentDiv.appendChild(h3);
    contentDiv.appendChild(priceDiv);
  
    productDiv.appendChild(discountSpan);
    productDiv.appendChild(imageDiv);
    productDiv.appendChild(contentDiv);
  
    return productDiv;
  }
  
  function getProductDataById(productId) {
    const products = {
      "1": {
        discount: "-17%",
        imgSrc: "img/image-1.webp",
        imgAlt: "Flower Pot",
        name: "flower pot",
        price: "$12.99",
        oldPrice: "$18.00"
      },
    };
  
    return products[productId];
  }
  