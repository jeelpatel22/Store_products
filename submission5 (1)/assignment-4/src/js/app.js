/**
 * WEB222 – Assignment 04
 *
 * I declare that this assignment is my own work in accordance with
 * Seneca Academic Policy. No part of this assignment has been
 * copied manually or electronically from any other source
 * (including web sites) or distributed to other students.
 *
 * Please update the following with your information:
 *
 *      Name:       Jeelkumar Vinodkumar Patel
 *      Student ID: 115766222
 *      Date:       09-08-2023
 */

// All of our data is available on the global `window` object.
// Create local variables to work with it in this file.

const { products, categories } = window;

console.log({ products, categories }, "Store Data");

function createCategoryButtons() {
  const menu = document.getElementById("menu");

  categories.forEach((category) => {
    const button = document.createElement("button");
    button.textContent = category.name;
    button.addEventListener("click", () => displayCategoryProducts(category.id));
    menu.appendChild(button);
  });
}

function createProductCard(product) {
  const card = document.createElement("div");
  card.classList.add("card");

  const productImage = document.createElement("img");
  productImage.src = product.imageUrl;
  productImage.alt = product.title;
  productImage.classList.add("card-image");
  card.appendChild(productImage);

  const title = document.createElement("h3");
  title.textContent = product.title;
  title.classList.add("card-title");
  card.appendChild(title);

  const description = document.createElement("p");
  description.textContent = product.description;
  description.classList.add("card-description");
  card.appendChild(description);

  const price = document.createElement("span");
  price.textContent = `$${(product.price / 100).toFixed(2)}`;
  price.classList.add("card-price");
  card.appendChild(price);

  return card;
}

function displayCategoryProducts(categoryId) {
  const selectedCategory = categories.find((category) => category.id === categoryId);

  document.getElementById("selected-category").textContent = selectedCategory.name;

  const categoryProducts = products.filter((product) => product.categories.includes(categoryId));

  const productContainer = document.getElementById("product-cards");
  productContainer.innerHTML = "";

  categoryProducts.forEach((product) => {
    const card = createProductCard(product);
    productContainer.appendChild(card);
  });
}

window.addEventListener("load", () => {
  createCategoryButtons();
  displayCategoryProducts(categories[0].id);
});
