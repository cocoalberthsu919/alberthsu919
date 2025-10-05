const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
}

// Close navbar when link is clicked
const navLink = document.querySelectorAll(".nav-link");

navLink.forEach((n) => n.addEventListener("click", closeMenu));

function closeMenu() {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}

// Event Listeners: Handling toggle event
const toggleSwitch = document.querySelector(
  '.theme-switch input[type="checkbox"]'
);

function switchTheme(e) {
  if (e.target.checked) {
    document.documentElement.setAttribute("data-theme", "dark");
  } else {
    document.documentElement.setAttribute("data-theme", "light");
  }
}

toggleSwitch.addEventListener("change", switchTheme, false);

//  Store color theme for future visits

function switchTheme(e) {
  if (e.target.checked) {
    document.documentElement.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark"); //add this
  } else {
    document.documentElement.setAttribute("data-theme", "light");
    localStorage.setItem("theme", "light"); //add this
  }
}

// Save user preference on load

const currentTheme = localStorage.getItem("theme")
  ? localStorage.getItem("theme")
  : null;

if (currentTheme) {
  document.documentElement.setAttribute("data-theme", currentTheme);

  if (currentTheme === "dark") {
    toggleSwitch.checked = true;
  }
}

//Adding date

let myDate = document.querySelector("#datee");

const yes = new Date().getFullYear();
myDate.innerHTML = yes;


// 鎖右鍵
// document.oncontextmenu = function(){return false;}
// document.onselectstart = function(){return false;}
// document.onmousedown = function(){return false;}


document.querySelectorAll('.detail-down').forEach(btn => {
  const icon = btn.querySelector('img'); // 取得內部圖片元素

  btn.addEventListener('click', () => {
    const details = btn.nextElementSibling;
    const isOpen = details.style.display === 'block';

    // 顯示 / 隱藏內容
    details.style.display = isOpen ? 'none' : 'block';

    // 切換箭頭狀態
    btn.classList.toggle('open', !isOpen);

    // 切換上下箭頭圖示
    icon.src = isOpen
      ? './assets/detail-down-icon.svg'
      : './assets/detail-up-icon.svg';
  });
});





