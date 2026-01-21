const form = document.querySelector(".cta-form");

if (form) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const input = form.querySelector("input[type='email']");
    if (!input || !input.value.trim()) {
      return;
    }
    const button = form.querySelector("button");
    button.textContent = "You're on the list!";
    button.disabled = true;
    input.disabled = true;
  });
}
