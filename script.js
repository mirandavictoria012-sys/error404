const menuBtn = document.querySelector("#menuBtn");
const navLinks = document.querySelector("#navLinks");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("open");
  menuBtn.setAttribute("aria-expanded", navLinks.classList.contains("open"));
});

navLinks.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => navLinks.classList.remove("open"));
});

document.querySelector("#checkAnswer").addEventListener("click", () => {
  const selected = document.querySelector('input[name="answer"]:checked');
  const feedback = document.querySelector("#feedback");
  feedback.classList.remove("good", "bad");

  if (!selected) {
    feedback.textContent = "Selecciona una opción antes de comprobar.";
    feedback.classList.add("bad");
    return;
  }

  if (selected.value === "b") {
    feedback.textContent = "¡Correcto! seno = cateto opuesto / hipotenusa = 3/5 = 0.6.";
    feedback.classList.add("good");
  } else {
    feedback.textContent = "Todavía no. Recuerda SOH: seno = cateto opuesto dividido entre hipotenusa. La respuesta es 3/5.";
    feedback.classList.add("bad");
  }
});
