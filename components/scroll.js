const customCardImg = document.querySelector(".custom-card-img");
const customSecondImg = document.querySelector(".second-custom-card-img");
  
    customCardImg.addEventListener("touchstart", function () {
      customCardImg.classList.add("hovered");
    });
    
    customCardImg.addEventListener("touchend", function () {
      setTimeout(function () {
        customCardImg.classList.remove("hovered");
      }, 2000);
    });

    customSecondImg.addEventListener("touchstart", function () {
      customSecondImg.classList.add("hovered1")
    });
    
    customSecondImg.addEventListener("touchend", function () {
      setTimeout(function () {
        customSecondImg.classList.remove("hovered1")
      }, 5000);
    });
    