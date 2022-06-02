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
    console.log("minus button clicked");
  } else if (event.target.classList.contains("plus")) {
    console.log("plus button clicked");
  } else if (event.target.classList.contains("remove-product")) {
    console.log("remove button clilcked");
  } else {
    console.log("other elements clicked");
  }
  // console.log(event.target);
});
