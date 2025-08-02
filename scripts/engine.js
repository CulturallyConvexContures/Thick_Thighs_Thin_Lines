// 🎲 Ritual Engine – Moxie’s Bones™ with XP, Loot & Bones

// === 🧱 Core Tables and Settings ===
let RARITY_TABLE = [];
let PERK_TABLE = {};
let LOOT_TABLE = [];
const RARITY_ORDER = ["Dusty", "Glimmer", "Radiant", "Mythborn", "Fated"];

// === 📦 Local State ===
let xpTotal = Number(localStorage.getItem("xpTotal")) || 0;

// === 🧪 Utility Functions ===
function updateTokenDisplay() {
  const count = Number(localStorage.getItem("rollTokens")) || 0;
  document.getElementById("tokenCount").innerText = `🎴 Rolls: ${count}`;
}

function addRoll() {
  let count = Number(localStorage.getItem("rollTokens")) || 0;
  localStorage.setItem("rollTokens", ++count);
  updateTokenDisplay();
}

function removeRoll() {
  let count = Number(localStorage.getItem("rollTokens")) || 0;
  if (count > 0) {
    localStorage.setItem("rollTokens", --count);
    updateTokenDisplay();
  }
}

function resetXP() {
  localStorage.removeItem("xpTotal");
  xpTotal = 0;
  document.getElementById("resultText").innerHTML =
    `<div class="xp-reset-msg">🧼 XP has been wiped clean.</div>`;
  console.log("🧼 XP reset.");
}

// === 📥 Load Data ===
function loadTables() {
  Promise.all([
    fetch('data/rarity-table.json').then(res => res.json()),
    fetch('data/perk-table.json').then(res => res.json()),
    fetch('data/loot-table.json').then(res => res.json())
  ])
  .then(([rarityData, perkData, lootData]) => {
    RARITY_TABLE = rarityData;
    PERK_TABLE = perkData;
    LOOT_TABLE = lootData;
    console.log("✅ Data loaded and ready.");
  });
}

// === 🌀 Core Roll Ritual ===
function rollAndReveal() {
  const roll = Math.floor(Math.random() * 1000) + 1;
  const rarity = getRarityFromRoll(roll);
  const perk = PERK_TABLE[roll];
  const loot = getLootDrop(rarity);

  // 🧮 XP Calculation
  let xp = roll;
  if (roll <= 500) xp = Math.floor(xp / 2);
  if (rarity === "Glimmer") xp *= 1.1;
  if (rarity === "Radiant") xp *= 1.25;
  if (rarity === "Mythborn") xp *= 1.5;
  if (rarity === "Fated") xp *= 2;
  xp = Math.floor(xp);

  xpTotal += xp;
  localStorage.setItem("xpTotal", xpTotal);
  
console.log("🎯 Displaying result with:", {
  roll,
  rarity,
  perk,
  loot,
  xp,
  xpTotal
});

const resultText = document.getElementById("resultText");
if (!resultText) {
  alert("🧟‍♂️ resultText not found!");
}

  // ✨ Display Result

  resultText.innerHTML = `
    <div class="roll-output">
      <div class="${rarity.toLowerCase()}">✨ ${rarity} – ${roll}</div>
      <div class="xp-msg">📈 ${xp} EXP gained</div>
      ${perk ? `<div class="perk-msg">🧿 ${perk}</div>` : ""}
      ${loot && loot !== "✨ Nothing" ? `<div class="loot-msg">🎁 ${loot}</div>` : ""}
      <div class="xp-total">🧮 Total XP: ${xpTotal}</div>
    </div>
  `;
}

// === 🎯 Ritual Invocation ===
function tossBones() {
  const tokens = Number(localStorage.getItem("rollTokens")) || 0;
  if (tokens < 1) {
    console.warn("🛑 No 🦴 available!");
    document.getElementById("resultText").innerText = "No 🦴 left.";
    return;
  }

  if (RARITY_TABLE.length && Object.keys(PERK_TABLE).length && LOOT_TABLE.length) {
    localStorage.setItem("rollTokens", tokens - 1);
    updateTokenDisplay();
    rollAndReveal();
  } else {
    console.warn("🕐 Still loading tables…");
  }
}

// === 🔁 Startup Rituals ===
window.tossBones = tossBones;
window.addRoll = addRoll;
window.removeRoll = removeRoll;
window.resetXP = resetXP;

window.alert("🧼 v01.6.9 – If you see this, it's the correct file!");

loadTables();
updateTokenDisplay();