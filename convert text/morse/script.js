// Peta untuk konversi Text ke Morse dan sebaliknya
const morseCodeMap = {
  A: ".-",
  B: "-...",
  C: "-.-.",
  D: "-..",
  E: ".",
  F: "..-.",
  G: "--.",
  H: "....",
  I: "..",
  J: ".---",
  K: "-.-",
  L: ".-..",
  M: "--",
  N: "-.",
  O: "---",
  P: ".--.",
  Q: "--.-",
  R: ".-.",
  S: "...",
  T: "-",
  U: "..-",
  V: "...-",
  W: ".--",
  X: "-..-",
  Y: "-.--",
  Z: "--..",
  0: "-----",
  1: ".----",
  2: "..---",
  3: "...--",
  4: "....-",
  5: ".....",
  6: "-....",
  7: "--...",
  8: "---..",
  9: "----.",
  ".": ".-.-.-",
  ",": "--..--",
  "?": "..--..",
  "'": ".----.",
  "!": "-.-.--",
  "/": "-..-.",
  "(": "-.--.",
  ")": "-.--.-",
  "&": ".-...",
  ":": "---...",
  ";": "-.-.-.",
  "=": "-...-",
  "+": ".-.-.",
  "-": "-....-",
  _: "..--.-",
  '"': ".-..-.",
  $: "...-..-",
  "@": ".--.-.",
  " ": "/",
};

// Membalikkan peta untuk konversi Morse ke Text
const textCodeMap = Object.entries(morseCodeMap).reduce((acc, [key, value]) => {
  acc[value] = key;
  return acc;
}, {});

// Fungsi untuk mengonversi Text ke Morse
function textToMorse2(text) {
  return text
    .toUpperCase()
    .split("")
    .map((char) => morseCodeMap[char] || "")
    .join(" ");
}

// Fungsi untuk mengonversi Morse ke Text
function morseToText2(morse) {
  return morse
    .split(" ")
    .map((code) => textCodeMap[code] || "")
    .join("");
}

function textToMorse(v) {
  const morse = document.getElementById("morse");
  morse.value = textToMorse2(v);
}
function morseToText(v) {
  const text = document.getElementById("text");
  text.value = morseToText2(v);
}
