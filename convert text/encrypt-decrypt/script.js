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
  const encrypt = document.getElementById("encrypt");
  encrypt.value = encrypts(v);
}

function decryptData(v) {
  const decrypt = document.getElementById("decrypt");
  decrypt.value = decrypts(v);
}
