const params = new URLSearchParams(window.location.search);
const type = params.get("type");

document.title = `Category | ${type.toUpperCase()}`;

const typeName = document.querySelector(".category-title");
typeName.innerHTML = type.toUpperCase();
