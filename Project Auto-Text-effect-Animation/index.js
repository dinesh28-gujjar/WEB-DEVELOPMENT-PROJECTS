const containerEl = document.querySelector(".container");

const lines = [
  "Love teaches patience, kindness, and courage in everyday life.",
  "Affection teaches patience, kindness, and courage in everyday life.",
  "Devotion teaches patience, kindness, and courage in everyday life.",
  "Care teaches patience, kindness, and courage in everyday life.",
  "Attachment teaches patience, kindness, and courage in everyday life.",
  "Compassion teaches patience, kindness, and courage in everyday life.",
  "Tenderness teaches patience, kindness, and courage in everyday life.",
  "Commitment teaches patience, kindness, and courage in everyday life.",
  "Respect teaches patience, kindness, and courage in everyday life.",
  "Humanity teaches patience, kindness, and courage in everyday life."
];

let lineIndex = 0;
let characterIndex = 0;

updateText();

function updateText() {
  characterIndex++;

  containerEl.innerHTML = `
    <h1>${lines[lineIndex].slice(0, characterIndex)}</h1>
  `;

  if (characterIndex === lines[lineIndex].length) {
    lineIndex++;
    characterIndex = 0;
  }

  if (lineIndex === lines.length) {
    lineIndex = 0;
  }

  setTimeout(updateText, 100);
}
