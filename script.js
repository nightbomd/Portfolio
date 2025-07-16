const form = document.getElementById("form");
const submitBtn = document.getElementById("submit");

submitBtn.addEventListener("click", () => {
  const requiredInputs = document.querySelectorAll(".required");
  let emptyField = false;

  requiredInputs.forEach(input => {
    if (input.value.trim() === "") {
      emptyField = true;
    }
  });

  if (emptyField) {
    alert("Please fill out the required fields");
  }
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Doesn't work yet");
});

window.addEventListener("scroll", () => {
  const animatedElements = [
    ...document.querySelectorAll(".card"),
    document.querySelector(".background-img")
  ];

  animatedElements.forEach(el => {
    const rect = el.getBoundingClientRect();
    const alreadyAnimated = el.style.animation && el.style.animation.includes("fadeIn");

    if (rect.top < window.innerHeight && !alreadyAnimated) {
      el.style.animation = "fadeIn 1s ease-in-out forwards";
    }
  });
});

