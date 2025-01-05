// Inisialisasi peta global
let map = L.map("map").setView([0, 0], 13); // Peta awal dengan koordinat (0,0)

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

// Fungsi untuk memperbarui lokasi
function updateLocations() {
  document.getElementById("latitude").value = "";
  document.getElementById("longitude").value = "";
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        console.log({
          latitude,
          longitude,
        });

        // Update input latitude dan longitude
        document.getElementById("latitude").value = latitude;
        document.getElementById("longitude").value = longitude;
      },
      (error) => {
        console.error("Geolocation error:", error.message);
        document.getElementById("latitude").value =
          "Tidak dapat mengakses lokasi Anda.";
        document.getElementById("longitude").value =
          "Tidak dapat mengakses lokasi Anda.";
      }
    );
  } else {
    document.getElementById("latitude").value =
      "Browser Anda tidak mendukung geolocation.";
    document.getElementById("longitude").value =
      "Browser Anda tidak mendukung geolocation.";
  }
}

// Panggil fungsi untuk memperbarui lokasi
updateLocations();

function updateLocation() {
  const latitude = document.getElementById("latitude").value;
  const longitude = document.getElementById("longitude").value;
  // Pindahkan peta ke lokasi baru
  map.setView([latitude, longitude], 13);

  // Tambahkan marker di lokasi baru
  L.marker([latitude, longitude])
    .addTo(map)
    .bindPopup("Your Current Location")
    .openPopup();
}
