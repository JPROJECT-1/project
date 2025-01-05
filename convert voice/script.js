// Update tampilan nilai slider
const rateSlider = document.getElementById("rate-slider");
const pitchSlider = document.getElementById("pitch-slider");
const rateValue = document.getElementById("rate-value");
const pitchValue = document.getElementById("pitch-value");

rateSlider.addEventListener("input", () => {
  rateValue.textContent = rateSlider.value;
});
pitchSlider.addEventListener("input", () => {
  pitchValue.textContent = pitchSlider.value;
});

function speakText() {
  const text = document.getElementById("text").value;
  const language = document.getElementById("language-select").value;
  const rate = parseFloat(rateSlider.value);
  const pitch = parseFloat(pitchSlider.value);

  if (text === "") {
    alert("Silakan masukkan teks terlebih dahulu!");
    return;
  }

  const speechSynthesis = window.speechSynthesis;
  const utterance = new SpeechSynthesisUtterance(text);

  // Set pengaturan suara
  utterance.lang = language;
  utterance.rate = rate;
  utterance.pitch = pitch;

  speechSynthesis.speak(utterance);
}
