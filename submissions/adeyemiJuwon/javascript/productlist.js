
const productList = [
    {
      name: "Xiaomi Redmibook",
      imgUrl: "../introductionToHtml/img/laptop 1.jpg",
      price: "£819.52 GBP"
      
    },
    {
      name: "1.8m DC Charging power",
      imgUrl: "../introductionToHtml/img/charger.jpg",
      price: "£4.26 GBP"
    },
    {
      name: "11 Inch Laptop Bag Tablet Zipper Pouch Sleeve for MacBook Air",
      imgUrl: "../introductionToHtml/img/bag 1.jpg",
      price: "£5.95"
    }
  ];

const productRelated = document.getElementsByClassName("productRelated")[0];
const newList = productList.map((product) => {
  let productImage = document.createElement("img");
  let productName = document.createElement("div");
  let productPrice = document.createElement("div");
  let wrapper = document.createElement("div");
  
  productName.innerText = product.name;
  productName.classList.add('product_name')
  productImage.src = product.imgUrl;
  productImage.classList.add('product_image')
  productPrice.innerText = product.price;
  productPrice.classList.add('product_price')
  wrapper.classList.add('wrapper')
  wrapper.append( productName, productImage, productPrice);
  return wrapper;
});
console.log(productRelated)
function initializeProducts() {
  productRelated.append(...newList);
}
initializeProducts(); 