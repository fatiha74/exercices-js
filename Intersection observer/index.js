"use strict";

const hello = document.querySelector(".hello");
const divs = hello.querySelectorAll("div");

const options = {
  rootMargin: "0",
  threshold: 0.5,
};

const observer = new IntersectionObserver(entries => {
  console.log(entries);

  entries.forEach(entry => {
    if (entry.isIntersecting) {
      console.log(entry.target);
      entry.target.style.transform = "scale(1.5)";
      entry.target.classList.add("active");
    } else if (entry.target.classList.contains("active")) {
      //   entry.target.style.transform = "scale(1)";
      observer.unobserve(entry.target);
    }
  });
});

const item = divs.forEach(div => {
  observer.observe(div, options);
});
