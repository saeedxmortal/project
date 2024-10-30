const currencyButton = document.getElementById("currency-select");
const currencyList = document.querySelector(".currency-list");
const dropdownBtn = document.querySelector(".dropdown-btn");
const dropdownContent = document.querySelector(".dropdown-content");
const menuItems = document.querySelectorAll(".dropdown-content li");

currencyButton.addEventListener("mouseenter", () => {
  currencyList.style.display = "block";
});

currencyButton.addEventListener("mouseleave", () => {
  setTimeout(() => {
    if (!currencyList.matches(':hover') && !currencyButton.matches(':hover')) {
      currencyList.style.display = "none";
    }
  }, 200);
});

currencyList.addEventListener("mouseenter", () => {
  currencyList.style.display = "block";
});

currencyList.addEventListener("mouseleave", () => {
  setTimeout(() => {
    if (!currencyButton.matches(':hover')) {
      currencyList.style.display = "none";
    }
  }, 200);
});

currencyList.querySelectorAll("li").forEach(item => {
  item.addEventListener("click", () => {
    currencyList.style.display = "none";
  });
});

dropdownBtn.addEventListener("mouseenter", () => {
  dropdownContent.style.display = "block";
});

dropdownBtn.addEventListener("mouseleave", () => {
  setTimeout(() => {
    if (!dropdownContent.matches(":hover")) {
      dropdownContent.style.display = "none";
    }
  }, 200);
});

dropdownContent.addEventListener("mouseleave", () => {
  dropdownContent.style.display = "none";
});
menuItems.forEach(item => {
    item.addEventListener("click", () => {
      console.log(`Selected item: ${item.textContent}`);
      dropdownContent.style.display = "none";
    });
  });

  let slideIndex = 0;
  showSlides();
  
  function showSlides() {
      let slides = document.getElementsByClassName("slide");
      for (let i = 0; i < slides.length; i++) {
          slides[i].style.display = "none";
      }
      slideIndex++;
      if (slideIndex > slides.length) { slideIndex = 1 }
      slides[slideIndex - 1].style.display = "block";
      setTimeout(showSlides, 5000);
  }
  
  function nextSlide() {
      slideIndex++;
      showSlides();
  }
  
  function prevSlide() {
      slideIndex--;
      showSlides();
  }
  
  function openLink(url) {
      window.location.href = url;
  }

  let currentIndex = 0;
const itemsToShow = 4;
const totalItems = document.querySelectorAll('.product-item').length;

function showNext() {
    if (currentIndex < totalItems - itemsToShow) {
        currentIndex++;
        updateGallery();
    }
}

function showPrevious() {
    if (currentIndex > 0) {
        currentIndex--;
        updateGallery();
    }
}

function updateGallery() {
    const galleryWrapper = document.querySelector('.gallery-wrapper');
    galleryWrapper.style.transform = `translateX(-${currentIndex * (262 + 10)}px)`;
}

document.querySelector('.arrow-right').addEventListener('click', showNext);
document.querySelector('.arrow-left').addEventListener('click', showPrevious);

/* js fashion main */
let fashionClothingCurrentIndex = 0;
const fashionClothingImages = document.querySelectorAll('.Fashion-cloth-main-images img');
const fashionClothingTotalImages = fashionClothingImages.length;
const fashionClothingVisibleImages = 4;
const fashionClothingImageWidth = 242 + 10; 

document.querySelector('.Fashion-cloth-main-prev').addEventListener('click', fashionClothingShowPrevImage);
document.querySelector('.Fashion-cloth-main-next').addEventListener('click', fashionClothingShowNextImage);

function fashionClothingShowPrevImage() {
  if (fashionClothingCurrentIndex === 0) {
      fashionClothingCurrentIndex = fashionClothingTotalImages - fashionClothingVisibleImages; 
  } else {
      fashionClothingCurrentIndex--;
  }
  fashionClothingUpdateCarousel();
}

function fashionClothingShowNextImage() {
  
  if (fashionClothingCurrentIndex >= fashionClothingTotalImages - fashionClothingVisibleImages) {
      fashionClothingCurrentIndex = 0;
  } else {
      fashionClothingCurrentIndex++;
  }
  fashionClothingUpdateCarousel();
}

function fashionClothingUpdateCarousel() {
    const fashionClothingOffset = -fashionClothingCurrentIndex * fashionClothingImageWidth;
    document.querySelector('.Fashion-cloth-main-images').style.transform = `translateX(${fashionClothingOffset}px)`;
}

setInterval(fashionClothingShowNextImage, 5000); 

fashionClothingUpdateCarousel(); 
  /* end js fashion main */

  

