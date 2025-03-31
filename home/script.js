const fetchProduct = async () => {
  const url = "https://67e57a7e18194932a5863c75.mockapi.io/products";
  try {
    const res = await fetch(url, { method: "GET" });
    const data = await res.json();
    return data;
  } catch (err) {
    console.log(err);
  }
};

const renderProducts = async () => {
  const productsElement = document.querySelector(".products");
  const data = await fetchProduct();

  data.forEach((prod) => {
    const productItem = document.createElement("li");
    productItem.classList.add("product");
    productItem.innerHTML = `
          <a
              class="productCard"
              href="/product-detail/?id=${prod.id}"
              target="_blank"
            >
              <div>
              <div class="thumbnail-wrap"> 
              <img
              class="thumbnail"
                  src="${prod.thumbnail}"
                  alt="몽벨 선글라스 트레킹 접이식 경량 등산 러닝 1109131"
                />
              </div>
                
                <p class="product-name">${prod.productName}</p>
                <p class="product-price">
                  ${prod.price} <span class="discount">20%</span>
                </p>
              </div>
            </a>`;
    productsElement.appendChild(productItem);
  });
};

renderProducts();
