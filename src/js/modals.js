
const m10btn = document.getElementById("m10");
const m65btn = document.getElementById("m65");
const m80btn = document.getElementById("m80");
const m80btn2 = document.getElementById("m80-2");


const modal10 = document.querySelector(".modal-10-op");
const modal65 = document.querySelector(".modal-65-op");
const modal80 = document.querySelector(".modal-80-op");


const closeButtons = document.querySelectorAll(".modal-close-button");


m10btn?.addEventListener("click", () => {
  modal10.classList.add("modal-visible");
});

m65btn?.addEventListener("click", () => {
  modal65.classList.add("modal-visible");
});

m80btn?.addEventListener("click", () => {
  modal80.classList.add("modal-visible");
});

m80btn2?.addEventListener("click", () => {
    modal80.classList.add("modal-visible");
  });


closeButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    const modal = btn.closest(".modal-10-wrapper, .modal-65-wrapper, .modal-80-wrapper");
    modal?.classList.remove("modal-visible");
  });
});


window.addEventListener("click", e => {
  if (
    e.target.classList.contains("modal-10-wrapper") ||
    e.target.classList.contains("modal-65-wrapper") ||
    e.target.classList.contains("modal-80-wrapper")
  ) {
    e.target.classList.remove("modal-visible");
  }
});