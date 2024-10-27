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

