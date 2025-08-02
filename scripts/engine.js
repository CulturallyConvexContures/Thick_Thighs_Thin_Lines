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

  // 💠 XP logic
  let xp = roll;
  if (rarity === "Glimmer") xp *= 1.1;
  if (rarity === "Radiant") xp *= 1.25;
  if (rarity === "Mythborn") xp *= 1.5;
  if (rarity === "Fated") xp *= 2;
  xp = Math.floor(xp);

  // 💾 XP total saved to localStorage
  let totalXP = Number(localStorage.getItem("xpTotal")) || 0;
  totalXP += xp;
  localStorage.setItem("xpTotal", totalXP);

  const resultText = document.getElementById("resultText");
  resultText.innerHTML = `
    <div class="roll-output">
      <div class="${rarity.toLowerCase()}">✨ ${rarity} – ${roll}</div>
      <div class="xp-msg">📈 ${xp} EXP gained</div>
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

// 🎯 Button logic
function tossBones() {
  if (RARITY_TABLE.length && Object.keys(PERK_TABLE).length && LOOT_TABLE.length) {
    console.log("🌀 rollAndReveal() fired");
    rollAndReveal();
  } else {
    console.warn("🕐 Still loading tables…");
  }
}
window.tossBones = tossBones;

// 🚀 Fire it off when loaded
loadTables();