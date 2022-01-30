const panels = document.querySelectorAll(".panel");

panels.forEach((panel) => {
  panel.addEventListener("click", () => {
    romoveActiveClasses();
    panel.classList.add("active");
  });
});

function romoveActiveClasses() {
  panels.forEach((panel) => {
    panel.classList.remove("active");
  });
}
