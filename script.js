const chat = document.getElementById("chat");
const input = document.getElementById("input");
const send = document.getElementById("send");

const themeSelect = document.getElementById("themeSelect");
const primaryColor = document.getElementById("primaryColor");
const fontSelect = document.getElementById("fontSelect");

function addMessage(text, who = "bot") {
  const div = document.createElement("div");
  div.className = `msg ${who}`;
  div.textContent = text;
  chat.appendChild(div);
  chat.scrollTop = chat.scrollHeight;
}

send.onclick = () => {
  if (!input.value.trim()) return;

  addMessage(input.value, "user");

  // Simulação de resposta
  setTimeout(() => {
    addMessage("Resposta simulada. Conecte com sua API aqui.", "bot");
  }, 400);

  input.value = "";
};

input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") send.click();
});

// Personalização
themeSelect.onchange = () => {
  if (themeSelect.value === "light") {
    document.documentElement.style.setProperty("--bg", "#f2f4ff");
    document.documentElement.style.setProperty("--panel", "#ffffff");
    document.documentElement.style.setProperty("--text", "#0b0d1a");
    document.documentElement.style.setProperty("--user", "#dfe5ff");
    document.documentElement.style.setProperty("--bot", "#eef1ff");
  } else {
    document.documentElement.style.setProperty("--bg", "#0f1220");
    document.documentElement.style.setProperty("--panel", "#161a2f");
    document.documentElement.style.setProperty("--text", "#e7e9f1");
    document.documentElement.style.setProperty("--user", "#2b3263");
    document.documentElement.style.setProperty("--bot", "#1e2448");
  }
};

primaryColor.oninput = () => {
  document.documentElement.style.setProperty("--primary", primaryColor.value);
};

fontSelect.onchange = () => {
  document.documentElement.style.setProperty("--font", fontSelect.value);
};