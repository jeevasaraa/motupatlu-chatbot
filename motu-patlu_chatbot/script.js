const replies = {
  "hello": "Namaste! Motu here! 🛵",
  "who are you": "We are Motu Patlu, the dynamic duo of Furfuri Nagar! 💪",
  "what is your favourite food": "Samosa! 🍽️ Motu loves samosa more than anything!",
  "where is john": "John is planning some silly plan again 😆 Be careful!",
  "bye": "Bye bye! Come again for samosa talk 😋",
};

function addMessage(sender, text) {
  const chatBox = document.getElementById("chat-box");
  const msg = document.createElement("div");
  msg.className = `message ${sender}`;
  msg.textContent = text;
  chatBox.appendChild(msg);
  chatBox.scrollTop = chatBox.scrollHeight;
}

function sendMessage() {
  const input = document.getElementById("user-input");
  const userMsg = input.value.trim().toLowerCase();
  if (!userMsg) return;

  addMessage("user", userMsg);
  input.value = "";

  setTimeout(() => {
    const botReply = replies[userMsg] || "Aiyyo! Enna kekkare nu purila 🤔";
    addMessage("bot", botReply);
  }, 600);
}
