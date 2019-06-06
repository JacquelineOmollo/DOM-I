const siteContent = {
  nav: {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  cta: {
    h1: "DOM Is Awesome",
    button: "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4": "Features",
    "features-content":
      "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content":
      "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4": "Services",
    "services-content":
      "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content":
      "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content":
      "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
  },
  contact: {
    "contact-h4": "Contact",
    address: "123 Way 456 Street Somewhere, USA",
    phone: "1 (888) 888-8888",
    email: "sales@greatidea.io"
  },
  footer: {
    copyright: "Copyright Great Idea! 2018"
  }
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute("src", siteContent["nav"]["img-src"]);

const navheader = document.getElementsByTagName("a");
console.log(navheader);
console.log(navheader[0]);
navheader[0].textContent = "Services";
navheader[1].textContent = "Product";
navheader[2].textContent = "Vision";
navheader[3].textContent = "Features";
navheader[4].textContent = "About";
navheader[5].textContent = "Contact";

for (let i = 0; i < navheader.length; ++i) {
  navheader[i].style.color = "green";
}
///navheader.style.color = "green";

let title = document.querySelector("h1");
console.log(title.textContent);
title.innerText = "DOM Is Awesome";
console.log(title.textContent);

let btn = document.querySelector("button");
console.log(btn.textContent);
btn.textContent = "Get Started";
console.log(btn.textContent);

let topImage = document.querySelector("#cta-img");
topImage.src = "img/header-img.png";

const mainText = document.querySelectorAll(".text-content");
console.log(mainText);

mainText[0].querySelector("h4").textContent =
  siteContent["main-content"]["features-h4"];
mainText[0].querySelector("p").textContent =
  siteContent["main-content"]["features-content"];
mainText[1].querySelector("h4").textContent =
  siteContent["main-content"]["about-h4"];
mainText[1].querySelector("p").textContent =
  siteContent["main-content"]["about-content"];
mainText[2].querySelector("h4").textContent =
  siteContent["main-content"]["services-h4"];
mainText[2].querySelector("p").textContent =
  siteContent["main-content"]["services-content"];
mainText[3].querySelector("h4").textContent =
  siteContent["main-content"]["product-h4"];
mainText[3].querySelector("p").textContent =
  siteContent["main-content"]["product-content"];
mainText[4].querySelector("h4").textContent =
  siteContent["main-content"]["vision-h4"];
mainText[4].querySelector("p").textContent =
  siteContent["main-content"]["vision-content"];

let middleImage = document.querySelector(".middle-img");
middleImage.src = "img/mid-page-accent.jpg";

const lookMeUp = document.querySelector(".contact");
lookMeUp.getElementsByTagName("h4")[0].textContent =
  siteContent["contact"]["contact-h4"];
lookMeUp.getElementsByTagName("p")[0].textContent =
  siteContent["contact"]["address"];
lookMeUp.getElementsByTagName("p")[1].textContent =
  siteContent["contact"]["phone"];
lookMeUp.getElementsByTagName("p")[2].textContent =
  siteContent["contact"]["email"];

let foot = document.querySelector("footer");
foot.textContent = "Copyright Great Idea! 2018";
