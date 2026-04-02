const categories = document.querySelectorAll("li.item");
console.log(`Numbers of categories: ${categories.length}`);
categories.forEach((category) => {
  const text = category.querySelector(".text").textContent;
  const liCount = category.querySelectorAll("li").length;
  console.log(`Category: ${text}`);
  console.log(`Animals: ${liCount}`);
});
