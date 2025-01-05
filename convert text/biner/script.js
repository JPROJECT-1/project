// Fungsi untuk mengonversi teks ke biner
function textToBinary2(text) {
  return text
    .split("") // Pisahkan teks menjadi array karakter
    .map((char) => char.charCodeAt(0).toString(2).padStart(8, "0")) // Konversi setiap karakter ke kode ASCII, lalu ke biner
    .join(" "); // Gabungkan hasil dengan spasi
}

// Fungsi untuk mengonversi biner ke teks
function binaryToText2(binary) {
  return binary
    .split(" ") // Pisahkan biner menjadi array berdasarkan spasi
    .map((bin) => String.fromCharCode(parseInt(bin, 2))) // Konversi biner ke ASCII, lalu ke karakter
    .join(""); // Gabungkan hasil menjadi teks
}

function textToBinary(v) {
  const biner = document.getElementById("biner");
  biner.value = textToBinary2(v);
}
function binaryToText(v) {
  const text = document.getElementById("text");
  text.value = binaryToText2(v);
}
