
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
