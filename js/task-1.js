const categories = document.querySelectorAll("li.item");
console.log(`Number of categories: ${categories.length}`);
categories.forEach((category) => {
  const text = category.querySelector("h2").textContent;
  const liCount = category.querySelectorAll("li").length;
  console.log(`Category: ${text}`);
  console.log(`Quantity: ${liCount}`);
});
