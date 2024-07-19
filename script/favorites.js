
document.addEventListener("DOMContentLoaded", function() {
  if (document.querySelectorAll(".favorites-btn").length > 0) {
    document.querySelectorAll(".favorites-btn").forEach(button => {
      button.addEventListener("click", function() {
        const productId = this.getAttribute("data-product-id");
        window.location.href = `favoritos.html?productId=${productId}`;
      });
    });
  }



