const params = new URLSearchParams(window.location.search);
const productId = params.get("id");

const fetchProduct = async () => {
  const url = `https://67e57a7e18194932a5863c75.mockapi.io/products/${productId}`;
  try {
    const res = await fetch(url, { method: "GET" });
    const data = await res.json();
    return data;
  } catch (err) {
    console.log(err);
  }
};

const renderProducts = async () => {
  const productWrap = document.querySelector(".prod-wrap");
  console.log(productWrap);
  const productItem = document.createElement("div");
  const prod = await fetchProduct();

  document.title = prod.productName;
  productItem.classList.add("product");
  productItem.innerHTML = `
            <div
                class="productCard"
                href="/product-detail/?id=${prod.id}"
                target="_blank"
              >
                <div>
                  <img
                    class="thumbnail"
                    src="${prod.thumbnail}"
                    alt="몽벨 선글라스 트레킹 접이식 경량 등산 러닝 1109131"
                  />
                  <p class="product-name">${prod.productName}</p>
                  <p class="product-price">
                    ${prod.price} <span class="discount">20%</span>
                  </p>
                </div>
              </div>`;
  productWrap.appendChild(productItem);
};

renderProducts();
