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


// // 取得 modal 元素
// const modal = document.getElementById("myModal");
// const btn = document.getElementById("openModal");

// // 點擊按鈕打開 modal
// btn.onclick = function() {
//   modal.style.display = "flex";
// }

// // 點擊 modal 外層也關閉
// window.onclick = function(event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// }


document.querySelectorAll('.detail-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const details = btn.nextElementSibling;
    if (details.style.display === "none") {
      details.style.display = "block";
      btn.textContent = "▲";
    } else {
      details.style.display = "none";
      btn.textContent = "▼";
    }
  });
});


document.querySelectorAll('.detail-down').forEach(btn => {
  const toggle = e => {
    e.preventDefault();
    e.stopPropagation(); // 防止冒泡影響其他事件

    const details = btn.nextElementSibling; // 下一個元素是內容區
    const icon = btn.querySelector("img");  // 取 <img>

    if (details.style.display === "none" || details.style.display === "") {
      details.style.display = "block";
      // 加 ?time 避免手機快取問題
      icon.src = "./assets/detail-up-icon.svg?" + new Date().getTime();
      icon.alt = "detailup";
    } else {
      details.style.display = "none";
      icon.src = "./assets/detail-down-icon.svg?" + new Date().getTime();
      icon.alt = "detaildown";
    }
  };

  // 支援滑鼠與觸控
  btn.addEventListener('click', toggle);
  btn.addEventListener('touchstart', toggle);
});

