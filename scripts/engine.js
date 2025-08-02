// 🎲 Ritual Engine – Moxie’s Bones 1000-Roll System

let RARITY_TABLE = [];
let PERK_TABLE = {};

function loadTablesAndRoll() {
  Promise.all([
    fetch('rarity-table.json').then(res => res.json()),
    fetch('perk-table.json').then(res => res.json())
  ]).then(([rarityData, perkData]) => {
    RARITY_TABLE = rarityData;
    PERK_TABLE = perkData;
    rollAndReveal();
  });
}

function rollAndReveal() {
  const roll = Math.floor(Math.random() * 1000) + 1;
  const rarity = getRarityFromRoll(roll);
  const perk = PERK_TABLE[roll];

  const resultText = document.getElementById("resultText");
  resultText.innerHTML = `
    <div class="roll-output">
      <div class="${rarity.toLowerCase()}">✨ ${rarity} – ${roll}</div>
      ${perk ? `<div class="perk-msg">🧿 ${perk}</div>` : ""}
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