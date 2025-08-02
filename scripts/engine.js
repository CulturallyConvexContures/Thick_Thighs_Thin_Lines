// 🎲 Ritual Engine – Moxie’s Bones w/ Rarity-Based Loot

let RARITY_TABLE = [];
let PERK_TABLE = {};
let LOOT_TABLE = [];
const RARITY_ORDER = ["Dusty", "Glimmer", "Radiant", "Mythborn", "Fated"];

function loadTablesAndRoll() {
  Promise.all([
    fetch('data/rarity-table.json').then(res => res.json()),
    fetch('data/perk-table.json').then(res => res.json()),
    fetch('data/loot-table.json').then(res => res.json())
  ])
  .then(([rarityData, perkData, lootData]) => {
    RARITY_TABLE = rarityData;
    PERK_TABLE = perkData;
    LOOT_TABLE = lootData;
    rollAndReveal();
  });
}

function rollAndReveal() {
  const roll = Math.floor(Math.random() * 1000) + 1;
  const rarity = getRarityFromRoll(roll);
  const perk = PERK_TABLE[roll];
  const loot = getLootDrop(rarity);

  const resultText = document.getElementById("resultText");
  resultText.innerHTML = `
    <div class="roll-output">
      <div class="${rarity.toLowerCase()}">✨ ${rarity} – ${roll}</div>
      ${perk ? `<div class="perk-msg">🧿 ${perk}</div>` : ""}
      ${loot && loot !== "✨ Nothing" ? `<div class="loot-msg">🎁 ${loot}</div>` : ""}
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

// 🚀 Fire it off when loaded
loadTablesAndRoll();