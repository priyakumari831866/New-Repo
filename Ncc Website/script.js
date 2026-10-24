const form = document.querySelector("#join-form");
const message = document.querySelector("#form-message");
const eventChoice = document.querySelector("#event-choice");

document.querySelectorAll("[data-event]").forEach((button) => {
  button.addEventListener("click", () => {
    eventChoice.value = button.dataset.event;
    document.querySelector("#join").scrollIntoView({ behavior: "smooth" });
    document.querySelector("#cadet-name").focus({ preventScroll: true });
  });
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  message.textContent = "Thanks, " + form.elements.name.value.trim() + ". This demo does not send or store your request. Connect a form service to receive registrations.";
});