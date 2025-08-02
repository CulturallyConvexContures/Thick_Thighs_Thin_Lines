function getRarityRoll() {
  const roll = Math.floor(Math.random() * 101);
  let rarity;

  if (roll < 50) rarity = "Common";
  else if (roll < 80) rarity = "Rare";
  else if (roll < 95) rarity = "Epic";
  else rarity = "Legendary";

  return { roll, rarity };
}

function tossBones() {
  const resultText = document.getElementById("resultText");
  const { roll, rarity } = getRarityRoll();

  resultText.innerHTML = `<span class="${rarity.toLowerCase()}">${rarity} – ${roll}</span>`;
}