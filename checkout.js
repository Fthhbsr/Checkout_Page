const taxRate = 0.18;
const shippingPrice = 15.0;

window.addEventListener("load", () => {
  localStorage.setItem("taxRate", taxRate);
  localStorage.setItem("shippingPrice", shippingPrice);

  //   sessionStorage.setItem("taxRate", taxRate);
  //   sessionStorage.setItem("shippingPrice", shippingPrice);
});

//capturing method

let productsDiv = document.querySelector(".products");
productsDiv.addEventListener("click", (event) => {
  if (event.target.className == "minus") {
    let quantityP = event.target.nextElementSibling;
    if (quantityP.innerText > 1) {
      quantityP.innerText--;
      let selectedProductInfoDiv;
      calculateProductAndCartTotal();
    } else {
      if (confirm("Product will be deleted?")) {
        event.target.parentElement.parentElement.parentElement.remove();
      }
    }

    // console.log("minus button clicked");
  } else if (event.target.classList.contains("plus")) {
    event.target.previousElementSibling.innerText++;
    calculateProductAndCartTotal();
    // console.log("plus button clicked");
  } else if (event.target.classList.contains("remove-product")) {
    event.target.parentElement.parentElement.parentElement.remove();
    calculateCartTotal();
    // console.log("remove button clilcked");
  } else {
    console.log("other elements clicked");
  }
  // console.log(event.target);
});

const calculateProductAndCartTotal = () => {
  calculateCartTotal();
};

const calculateCartTotal = () => {};
