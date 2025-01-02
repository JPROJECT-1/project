const encrypt = (text) => btoa(text);
const decrypt = (text) => atob(text);
function encrypts(v) {
  return v
    .split("\n")
    .filter((val) => val.trim() !== "")
    .map(encrypt);
}
function decrypts(v) {
  return v.split(",").map(decrypt).join("\n");
}

function encryptData(v) {
  const output = document.getElementById("output");
  output.value = encrypts(v);
}

function decryptData(v) {
  const output = document.getElementById("output");
  output.value = decrypts(v);
}
