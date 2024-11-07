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

  /* start js electronic main*/

  let electronicsComputersCurrentIndex = 0;
const electronicsComputersImages = document.querySelectorAll('.Electronics-computers-main-images img');
const electronicsComputersTotalImages = electronicsComputersImages.length;
const electronicsComputersVisibleImages = 4;
const electronicsComputersImageWidth = 242+10;

document.querySelector('.Electronics-computers-main-prev').addEventListener('click', electronicsComputersShowPrevImage);
document.querySelector('.Electronics-computers-main-next').addEventListener('click', electronicsComputersShowNextImage);

function electronicsComputersShowPrevImage() {
    if (electronicsComputersCurrentIndex === 0) {
        electronicsComputersCurrentIndex = electronicsComputersTotalImages - electronicsComputersVisibleImages;
    } else {
        electronicsComputersCurrentIndex--;
    }
    electronicsComputersUpdateCarousel();
}

function electronicsComputersShowNextImage() {
    if (electronicsComputersCurrentIndex >= electronicsComputersTotalImages - electronicsComputersVisibleImages) {
        electronicsComputersCurrentIndex = 0;
    } else {
        electronicsComputersCurrentIndex++;
    }
    electronicsComputersUpdateCarousel();
}

function electronicsComputersUpdateCarousel() {
    const electronicsComputersOffset = -electronicsComputersCurrentIndex * electronicsComputersImageWidth;
    document.querySelector('.Electronics-computers-main-images').style.transform = `translateX(${electronicsComputersOffset}px)`;
}

setInterval(electronicsComputersShowNextImage, 5000);
electronicsComputersUpdateCarousel();
 /* end js electronic main*/

 /* start js toy main */

 let toyKidsBabyCurrentIndex = 0;
 const toyKidsBabyImages = document.querySelectorAll('.Toy-kids-baby-main-images img');
 const toyKidsBabyTotalImages = toyKidsBabyImages.length;
 const toyKidsBabyVisibleImages = 4;
 const toyKidsBabyImageWidth = 242+10; 
 
 document.querySelector('.Toy-kids-baby-main-prev').addEventListener('click', toyKidsBabyShowPrevImage);
 document.querySelector('.Toy-kids-baby-main-next').addEventListener('click', toyKidsBabyShowNextImage);
 
 function toyKidsBabyShowPrevImage() {
     if (toyKidsBabyCurrentIndex === 0) {
         toyKidsBabyCurrentIndex = toyKidsBabyTotalImages - toyKidsBabyVisibleImages;
     } else {
         toyKidsBabyCurrentIndex--;
     }
     toyKidsBabyUpdateCarousel();
 }
 
 function toyKidsBabyShowNextImage() {
     if (toyKidsBabyCurrentIndex >= toyKidsBabyTotalImages - toyKidsBabyVisibleImages) {
         toyKidsBabyCurrentIndex = 0;
     } else {
         toyKidsBabyCurrentIndex++;
     }
     toyKidsBabyUpdateCarousel();
 }
 
 function toyKidsBabyUpdateCarousel() {
     const toyKidsBabyOffset = -toyKidsBabyCurrentIndex * toyKidsBabyImageWidth;
     document.querySelector('.Toy-kids-baby-main-images').style.transform = `translateX(${toyKidsBabyOffset}px)`;
 }
 
 setInterval(toyKidsBabyShowNextImage, 5000); 
 
 toyKidsBabyUpdateCarousel();
 

 /* end js toy main */

 /* start js main garden */

 let homeGardenToolsCurrentIndex = 0;
const homeGardenToolsImages = document.querySelectorAll('.Home-garden-tools-main-images img');
const homeGardenToolsTotalImages = homeGardenToolsImages.length;
const homeGardenToolsVisibleImages = 4;
const homeGardenToolsImageWidth = 242+10;

document.querySelector('.Home-garden-tools-main-prev').addEventListener('click', homeGardenToolsShowPrevImage);
document.querySelector('.Home-garden-tools-main-next').addEventListener('click', homeGardenToolsShowNextImage);

function homeGardenToolsShowPrevImage() {
    if (homeGardenToolsCurrentIndex === 0) {
        homeGardenToolsCurrentIndex = homeGardenToolsTotalImages - homeGardenToolsVisibleImages;
    } else {
        homeGardenToolsCurrentIndex--;
    }
    homeGardenToolsUpdateCarousel();
}

function homeGardenToolsShowNextImage() {
    if (homeGardenToolsCurrentIndex >= homeGardenToolsTotalImages - homeGardenToolsVisibleImages) {
        homeGardenToolsCurrentIndex = 0;
    } else {
        homeGardenToolsCurrentIndex++;
    }
    homeGardenToolsUpdateCarousel();
}

function homeGardenToolsUpdateCarousel() {
    const homeGardenToolsOffset = -homeGardenToolsCurrentIndex * homeGardenToolsImageWidth;
    document.querySelector('.Home-garden-tools-main-images').style.transform = `translateX(${homeGardenToolsOffset}px)`;
}

setInterval(homeGardenToolsShowNextImage, 5000);
homeGardenToolsUpdateCarousel();

/* end js main garden */

/* start js main decor */

let decorFurnitureCurrentIndex = 0;
const decorFurnitureImages = document.querySelectorAll('.Decor-furniture-main-images img');
const decorFurnitureTotalImages = decorFurnitureImages.length;
const decorFurnitureVisibleImages = 4;
const decorFurnitureImageWidth = 242 + 10;

document.querySelector('.Decor-furniture-main-prev').addEventListener('click', decorFurnitureShowPrevImage);
document.querySelector('.Decor-furniture-main-next').addEventListener('click', decorFurnitureShowNextImage);

function decorFurnitureShowPrevImage() {
    if (decorFurnitureCurrentIndex === 0) {
        decorFurnitureCurrentIndex = decorFurnitureTotalImages - decorFurnitureVisibleImages;
    } else {
        decorFurnitureCurrentIndex--;
    }
    decorFurnitureUpdateCarousel();
}

function decorFurnitureShowNextImage() {
    if (decorFurnitureCurrentIndex >= decorFurnitureTotalImages - decorFurnitureVisibleImages) {
        decorFurnitureCurrentIndex = 0;
    } else {
        decorFurnitureCurrentIndex++;
    }
    decorFurnitureUpdateCarousel();
}

function decorFurnitureUpdateCarousel() {
    const decorFurnitureOffset = -decorFurnitureCurrentIndex * decorFurnitureImageWidth;
    document.querySelector('.Decor-furniture-main-images').style.transform = `translateX(${decorFurnitureOffset}px)`;
}

setInterval(decorFurnitureShowNextImage, 5000);
decorFurnitureUpdateCarousel();

/* end js main decor */

/* start js main gifts */

let giftsPartiesHolidayCurrentIndex = 0;
const giftsPartiesHolidayImages = document.querySelectorAll('.Gifts-parties-holiday-main-images img');
const giftsPartiesHolidayTotalImages = giftsPartiesHolidayImages.length;
const giftsPartiesHolidayVisibleImages = 4;
const giftsPartiesHolidayImageWidth = 242 + 10;

document.querySelector('.Gifts-parties-holiday-main-prev').addEventListener('click', giftsPartiesHolidayShowPrevImage);
document.querySelector('.Gifts-parties-holiday-main-next').addEventListener('click', giftsPartiesHolidayShowNextImage);

function giftsPartiesHolidayShowPrevImage() {
    if (giftsPartiesHolidayCurrentIndex === 0) {
        giftsPartiesHolidayCurrentIndex = giftsPartiesHolidayTotalImages - giftsPartiesHolidayVisibleImages;
    } else {
        giftsPartiesHolidayCurrentIndex--;
    }
    giftsPartiesHolidayUpdateCarousel();
}

function giftsPartiesHolidayShowNextImage() {
    if (giftsPartiesHolidayCurrentIndex >= giftsPartiesHolidayTotalImages - giftsPartiesHolidayVisibleImages) {
        giftsPartiesHolidayCurrentIndex = 0;
    } else {
        giftsPartiesHolidayCurrentIndex++;
    }
    giftsPartiesHolidayUpdateCarousel();
}

function giftsPartiesHolidayUpdateCarousel() {
    const giftsPartiesHolidayOffset = -giftsPartiesHolidayCurrentIndex * giftsPartiesHolidayImageWidth;
    document.querySelector('.Gifts-parties-holiday-main-images').style.transform = `translateX(${giftsPartiesHolidayOffset}px)`;
}

setInterval(giftsPartiesHolidayShowNextImage, 5000);
giftsPartiesHolidayUpdateCarousel();

/* end js main gifts */

/* start js main health */

let beautyHealthCurrentIndex = 0;
const beautyHealthImages = document.querySelectorAll('.Beauty-health-main-images img');
const beautyHealthTotalImages = beautyHealthImages.length;
const beautyHealthVisibleImages = 4;
const beautyHealthImageWidth = 242 + 10;

document.querySelector('.Beauty-health-main-prev').addEventListener('click', beautyHealthShowPrevImage);
document.querySelector('.Beauty-health-main-next').addEventListener('click', beautyHealthShowNextImage);

function beautyHealthShowPrevImage() {
    if (beautyHealthCurrentIndex === 0) {
        beautyHealthCurrentIndex = beautyHealthTotalImages - beautyHealthVisibleImages;
    } else {
        beautyHealthCurrentIndex--;
    }
    beautyHealthUpdateCarousel();
}

function beautyHealthShowNextImage() {
    if (beautyHealthCurrentIndex >= beautyHealthTotalImages - beautyHealthVisibleImages) {
        beautyHealthCurrentIndex = 0;
    } else {
        beautyHealthCurrentIndex++;
    }
    beautyHealthUpdateCarousel();
}

function beautyHealthUpdateCarousel() {
    const beautyHealthOffset = -beautyHealthCurrentIndex * beautyHealthImageWidth;
    document.querySelector('.Beauty-health-main-images').style.transform = `translateX(${beautyHealthOffset}px)`;
}

setInterval(beautyHealthShowNextImage, 5000);
beautyHealthUpdateCarousel();
/* end js main health */

/* start js popup */
document.addEventListener("DOMContentLoaded", function() {
    const popup = document.getElementById("popup");
    const overlay = document.getElementById("overlay");
    const closeBtn = document.getElementById("closeBtn");

    
    popup.style.display = "block";
    overlay.style.display = "block";

   
    closeBtn.addEventListener("click", function() {
        popup.style.display = "none";
        overlay.style.display = "none";
    });

    
    overlay.addEventListener("click", function() {
        popup.style.display = "none";
        overlay.style.display = "none";
    });
});

/* end js popup */






  

