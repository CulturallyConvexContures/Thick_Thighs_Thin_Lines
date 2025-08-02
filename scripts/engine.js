// 🎲 Ritual Engine – Moxie’s Bones w/ Rarity-Based Loot + XP System

let RARITY_TABLE = [];
let PERK_TABLE = {};
let LOOT_TABLE = [];
const RARITY_ORDER = ["Dusty", "Glimmer", "Radiant", "Mythborn", "Fated"];

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

function rollAndReveal() {
  const roll = Math.floor(Math.random() * 1000) + 1;
  const rarity = getRarityFromRoll(roll);
  const perk = PERK_TABLE[roll];
  const loot = getLootDrop(rarity);

let earnedBonusRoll = false;

if (roll >= 969 && roll <= 1000) {
  let currentTokens = Number(localStorage.getItem("rollTokens")) || 0;
  currentTokens++;
  localStorage.setItem("rollTokens", currentTokens);
  updateTokenDisplay();
  earnedBonusRoll = true;
}

if (loot.includes("Gold")) {
  let amount = parseInt(loot.match(/\d+/)[0]); // extracts the number from "Gold x5"
  let gold = Number(localStorage.getItem("goldTotal")) || 0;
  gold += amount;
  localStorage.setItem("goldTotal", gold);
}

  // 💠 XP logic
  let xp = roll;
// 🧮 Nerf low rolls (1–500)
  if (roll <= 500) {
  xp = Math.floor(xp / 2);
}
  if (rarity === "Glimmer") xp *= 1.1;
  if (rarity === "Radiant") xp *= 1.25;
  if (rarity === "Mythborn") xp *= 1.5;
  if (rarity === "Fated") xp *= 2;
  xp = Math.floor(xp);

// Update the level display
const levelDisplay = document.getElementById("levelDisplay");
levelDisplay.innerText = `Level: ${level}`;

// ✨ Fade in
levelDisplay.style.opacity = 1;

// Optional: fade back out after a few seconds
setTimeout(() => {
  levelDisplay.style.opacity = 0;
}, 3000); // fades out after 3 seconds

// 💾 Save to total XP
let totalXP = Number(localStorage.getItem("xpTotal")) || 0;
totalXP += xp;
localStorage.setItem("xpTotal", totalXP);

// 🔺 LEVEL CHECK
let level = Number(localStorage.getItem("level")) || 1;

function xpNeededForLevel(n) {
  return Math.floor(1000 * Math.pow(n, 1.5));
}

if (totalXP >= xpNeededForLevel(level + 1)) {
  level++;
  localStorage.setItem("level", level);
  console.log(`🎉 Leveled up! Now level ${level}`);
}

  const resultText = document.getElementById("resultText");
  resultText.innerHTML = `
    <div class="roll-output">
      <div class="${rarity.toLowerCase()}">✨ ${rarity} – ${roll}</div>
      <div class="xp-msg">📈 ${xp} EXP gained</div>
      ${earnedBonusRoll ? `<div class="bonus-roll">🎴 Bonus roll earned!</div>` : ""}
      ${perk ? `<div class="perk-msg">🧿 ${perk}</div>` : ""}
      ${loot && loot !== "✨ Nothing" ? `<div class="loot-msg">🎁 ${loot}</div>` : ""}
      <div class="xp-total">🧮 Total XP: ${totalXP}</div>
    </div>
  `;
}

function getRarityFromRoll(roll) {
  for (const r of RARITY_TABLE) {
    if (roll >= r.min && roll <= r.max) {
      return r.name;
    }
  }
  return "Unknown";
}

function getLootDrop(currentRarity) {
  const validLoot = LOOT_TABLE.filter(loot => {
    return RARITY_ORDER.indexOf(currentRarity) >= RARITY_ORDER.indexOf(loot.minRarity);
  });

  const roll = Math.random() * 100;
  let sum = 0;

  for (const loot of validLoot) {
    sum += loot.chance;
    if (roll < sum) {
      return loot.name;
    }
  }

  return null;
}

function updateTokenDisplay() {
  const count = Number(localStorage.getItem("rollTokens")) || 0;
  document.getElementById("tokenCount").innerText = `🎴 Rolls: ${count}`;
}

function addRoll() {
  let count = Number(localStorage.getItem("rollTokens")) || 0;
  count++;
  localStorage.setItem("rollTokens", count);
  updateTokenDisplay();
}

function removeRoll() {
  let count = Number(localStorage.getItem("rollTokens")) || 0;
  if (count > 0) {
    count--;
    localStorage.setItem("rollTokens", count);
    updateTokenDisplay();
  }
}

// 🎯 Button logic
function tossBones() {
  const tokens = Number(localStorage.getItem("rollTokens")) || 0;

  if (!tokens) {
    console.warn("🛑No 🦴 available!");
    document.getElementById("resultText").innerText = "No 🦴 left. ";
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

window.tossBones = tossBones;
document.getElementById("levelDisplay").innerText = `Level: ${level}`;
function resetXP() {
  localStorage.removeItem("xpTotal");
  document.getElementById("resultText").innerHTML = `
    <div class="xp-reset-msg">🧼 XP has been wiped clean.</div>
  `;
  console.log("🧼 XP reset.");
}

// 🚀 Fire it off when loaded
loadTables();
updateTokenDisplay(); // 🔁 Keep the roll counter fresh