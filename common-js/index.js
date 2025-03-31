const dropMenu = [
  {
    name: "Men",
    link: "men",
  },
  {
    name: "Woman",
    link: "woman",
  },
  {
    name: "Children",
    link: "chidren",
  },
  {
    name: "Men",
    link: "men",
  },
];

function renderCategoryDropMenu() {
  const menu = document.querySelector(".category-dropdown");

  dropMenu.forEach((item) => {
    const menuItem = document.createElement("a");
    menuItem.classList.add("d-item");
    menuItem.href = `/category/?type=${item.link}` || "#";
    menuItem.innerHTML = item.name;
    menu.appendChild(menuItem);
  });
}

renderCategoryDropMenu();
