const form = document.querySelector(".cta-form");
const chatModal = document.querySelector(".chat-modal");
const openChatButtons = document.querySelectorAll("[data-open-chat]");
const closeChatButton = document.querySelector("[data-close-chat]");
const chatForm = document.getElementById("chatForm");
const chatThread = document.getElementById("chatThread");
const root = document.documentElement;
let ombreTicking = false;

const updateOmbre = () => {
  const scrollTop = window.scrollY || window.pageYOffset;
  const shift = Math.min(scrollTop * 0.35, window.innerHeight * 1.5);
  root.style.setProperty("--ombre-y", `${shift}px`);
  ombreTicking = false;
};

const handleScroll = () => {
  if (ombreTicking) {
    return;
  }
  ombreTicking = true;
  window.requestAnimationFrame(updateOmbre);
};

if (root) {
  updateOmbre();
  window.addEventListener("scroll", handleScroll, { passive: true });
  window.addEventListener("resize", updateOmbre);
}

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

const openChat = () => {
  if (!chatModal) {
    return;
  }
  chatModal.classList.add("is-open");
  chatModal.setAttribute("aria-hidden", "false");
};

const closeChat = () => {
  if (!chatModal) {
    return;
  }
  chatModal.classList.remove("is-open");
  chatModal.setAttribute("aria-hidden", "true");
};

openChatButtons.forEach((button) => {
  button.addEventListener("click", openChat);
});

if (closeChatButton) {
  closeChatButton.addEventListener("click", closeChat);
}

if (chatModal) {
  chatModal.addEventListener("click", (event) => {
    if (event.target === chatModal) {
      closeChat();
    }
  });
}

if (chatForm && chatThread) {
  chatForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const input = chatForm.querySelector("input");
    if (!input || !input.value.trim()) {
      return;
    }
    const userBubble = document.createElement("div");
    userBubble.className = "chat-bubble user";
    userBubble.textContent = input.value.trim();
    chatThread.appendChild(userBubble);

    const friendBubble = document.createElement("div");
    friendBubble.className = "chat-bubble friend";
    friendBubble.textContent = "Got it. I’ll keep that in mind for next time.";
    chatThread.appendChild(friendBubble);

    input.value = "";
    chatThread.scrollTop = chatThread.scrollHeight;
  });
}
