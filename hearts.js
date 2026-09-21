function heart() {
  const h = document.createElement("div");
  h.innerHTML = "💙";
  h.style.position = "fixed";
  h.style.left = Math.random() * 100 + "vw";
  h.style.top = "-20px";
  h.style.fontSize = (18 + Math.random() * 20) + "px";
  h.style.opacity = Math.random();
  h.style.pointerEvents = "none";

  document.body.appendChild(h);

  let y = -20;
  const speed = 2 + Math.random() * 3;

  const fall = setInterval(() => {
    y += speed;
    h.style.top = y + "px";

    if (y > window.innerHeight) {
      clearInterval(fall);
      h.remove();
    }
  }, 20);
}

setInterval(heart, 300);
