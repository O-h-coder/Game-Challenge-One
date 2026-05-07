let current = 1;
function changeSlide(el, title, desc) {
  const bg1 = document.querySelector(".bg1");
  const bg2 = document.querySelector(".bg2");
  let nextBg = current === 1 ? bg2 : bg1;
  let currentBg = current === 1 ? bg1 : bg2;
  nextBg.style.backgroundImage = `url(${el.src})`;
  nextBg.style.opacity = "1";
  currentBg.style.opacity = "0";
  current = current === 1 ? 2 : 1;
  document.getElementById("title").innerText = title;
  document.getElementById("desc").innerText = desc;
  let imgs = document.querySelectorAll(".imagesimg");
  imgs.forEach((img) => img.classList.remove("active"));
  el.classList.add("active");
}
