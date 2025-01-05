document
  .getElementById("fileInput")
  .addEventListener("change", function (event) {
    const file = event.target.files[0];
    const outputTextarea = document.getElementById("output");

    if (file) {
      const reader = new FileReader();
      reader.onload = function () {
        outputTextarea.value = reader.result;
      };
      reader.readAsDataURL(file);
    } else {
      outputTextarea.value = "";
    }
  });

function copyOutput() {
  const outputTextarea = document.getElementById("output");
  outputTextarea.select();
  document.execCommand("copy");
  alert("Base64 berhasil disalin ke clipboard!");
}
function downloadOutput() {
  const outputTextarea = document.getElementById("output");
  if (outputTextarea.value) {
    var link = document.createElement("a");

    // Pastikan nilai Base64 sudah lengkap
    var base64Data = outputTextarea.value;

    // Tentukan ekstensi file sesuai tipe MIME di Base64
    let fileExtension = "";
    if (base64Data.startsWith("data:image/png;base64")) {
      fileExtension = ".png";
    } else if (base64Data.startsWith("data:image/jpeg;base64")) {
      fileExtension = ".jpg";
    } else if (base64Data.startsWith("data:image/gif;base64")) {
      fileExtension = ".gif";
    } else if (base64Data.startsWith("data:image/webp;base64")) {
      fileExtension = ".webp";
    } else if (base64Data.startsWith("data:image/svg+xml;base64")) {
      fileExtension = ".svg";
    } else if (base64Data.startsWith("data:application/pdf;base64")) {
      fileExtension = ".pdf";
    } else if (base64Data.startsWith("data:application/zip;base64")) {
      fileExtension = ".zip";
    } else if (base64Data.startsWith("data:application/vnd.rar;base64")) {
      fileExtension = ".rar";
    } else if (base64Data.startsWith("data:video/mp4;base64")) {
      fileExtension = ".mp4";
    } else if (base64Data.startsWith("data:video/x-msvideo;base64")) {
      fileExtension = ".avi";
    } else if (base64Data.startsWith("data:video/quicktime;base64")) {
      fileExtension = ".mov";
    } else if (base64Data.startsWith("data:audio/mpeg;base64")) {
      fileExtension = ".mp3";
    } else if (base64Data.startsWith("data:audio/opus;base64")) {
      fileExtension = ".opus";
    } else if (base64Data.startsWith("data:audio/wav;base64")) {
      fileExtension = ".wav";
    } else if (
      base64Data.startsWith("data:application/vnd.ms-powerpoint;base64")
    ) {
      fileExtension = ".ppt";
    } else if (
      base64Data.startsWith(
        "data:application/vnd.openxmlformats-officedocument.presentationml.presentation;base64"
      )
    ) {
      fileExtension = ".pptx";
    } else if (base64Data.startsWith("data:text/plain;base64")) {
      fileExtension = ".txt";
    } else if (base64Data.startsWith("data:application/msword;base64")) {
      fileExtension = ".doc";
    } else if (
      base64Data.startsWith(
        "data:application/vnd.openxmlformats-officedocument.wordprocessingml.document;base64"
      )
    ) {
      fileExtension = ".docx";
    } else if (base64Data.startsWith("data:application/vnd.ms-excel;base64")) {
      fileExtension = ".xls";
    } else if (
      base64Data.startsWith(
        "data:application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;base64"
      )
    ) {
      fileExtension = ".xlsx";
    } else {
      alert("Unsupported file type");
      return;
    }

    // Menentukan nama file
    var fileName = "file" + fileExtension;

    // Menetapkan atribut href ke URL base64
    link.href = base64Data;
    link.download = fileName; // Menetapkan nama file

    // Simulasikan klik untuk memulai pengunduhan
    link.click();
  }
}

function downloadOutputtxt() {
  const outputTextarea = document.getElementById("output");
  if (outputTextarea.value) {
    var link = document.createElement("a");
    link.href = outputTextarea.value;
    link.download = "file.txt";
    link.click();
  }
}
