const mainBtn = document.getElementById("main-btn");
const addBtn = document.getElementById("add-btn");
const cancelBtn = document.getElementById("cancel-btn");
const submitBtn = document.getElementById("submit-btn");
const deleteBtn = document.getElementById("delete-btn");

const mainView = document.getElementById("main-view");
const formView = document.getElementById("form-view");
const projectList = document.getElementById("projectList");
const searchBar = document.getElementById("searchBar");

const nameInput = document.getElementById("nama");
const valuesInput = document.getElementById("value");
const passwordInput = document.getElementById("password");
const passwordInputd = document.getElementById("passwordd");
const dataTypeInput = document.getElementById("data-type");
const formTitle = document.getElementById("form-title");

let currentKey = null;

// Helper functions for encryption/decryption
const encrypt = (text) => btoa(text); // Base64 encode
const decrypt = (text) => atob(text);

function showMainView() {
  mainView.classList.remove("hidden");
  formView.classList.add("hidden");
  renderProjects();
}

function showFormView(key, values, type, password) {
  mainView.classList.add("hidden");
  formView.classList.remove("hidden");

  currentKey = key;
  formTitle.textContent = key ? "Edit Data" : "Tambah Data";
  nameInput.value = key ? key.replace("sv-", "") : "";
  nameInput.disabled = !!key;
  valuesInput.value = key ? values.split(",").map(decrypt).join("\n") : ""; // Decode and show as multiline
  passwordInput.value = password && password;
  dataTypeInput.value = type && type;
  if (type === "public") {
    passwordInputd.classList.add("hidden");
  } else {
    passwordInputd.classList.remove("hidden");
  }
  deleteBtn.classList.toggle("hidden", !key);
}

function showPasswords(event) {
  if (event == "private") {
    passwordInputd.classList.remove("hidden");
  } else {
    passwordInputd.classList.add("hidden");
  }
}

function renderProjects(filter = "") {
  projectList.innerHTML = "";

  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (key.toLowerCase().includes(filter.toLowerCase())) {
      if (key.startsWith("sv-")) {
        const { type } = JSON.parse(localStorage.getItem(key)).type;
        const item = document.createElement("div");
        item.classList.add("project-item");

        item.innerHTML = `
                      <i class="fas ${
                        type === "private" ? "fa-lock" : "fa-unlock-alt"
                      }"></i>
                      <span class="name">${key.replace("sv-", "")}</span>
                      <i class="fas fa-edit edit" title="edit" onclick="editData('${key}')"></i>
                  `;

        projectList.appendChild(item);
      }
    }
  }
}

function handleSubmit(event) {
  event.preventDefault();
  const key = `sv-${nameInput.value}`;
  const values = valuesInput.value
    .split("\n")
    .filter((val) => val.trim() !== "")
    .map(encrypt); // Encode each value
  const type = dataTypeInput.value;
  const password = passwordInput.value;

  const data = {
    values,
    type,
    password: type === "private" ? encrypt(password) : null,
  };

  if (nameInput.value) {
    if (currentKey) {
      // Edit existing item
      localStorage.setItem(currentKey, JSON.stringify(data));
    } else {
      // Add new item
      localStorage.setItem(key, JSON.stringify(data));
    }
  }

  showMainView();
}

function handleDelete() {
  if (currentKey) {
    if (confirm("Apakah Anda yakin ingin menghapus item ini?")) {
      localStorage.removeItem(currentKey);
      showMainView();
    }
  }
}

function editData(key) {
  const { values, type, password } = JSON.parse(localStorage.getItem(key));
  if (type === "private") {
    const inputPassword = prompt("Masukkan password untuk mengedit:");
    if (encrypt(inputPassword) !== password) {
      alert("Password salah!");
      return;
    }
  }
  showFormView(key, values.join(","), type, password ? decrypt(password) : "");
}

mainBtn.addEventListener("click", showMainView);
addBtn.addEventListener("click", () =>
  showFormView(null, null, "public", null)
);
cancelBtn.addEventListener("click", showMainView);
submitBtn.addEventListener("click", handleSubmit);
deleteBtn.addEventListener("click", handleDelete);

// Expose editData function globally for inline editing
window.editData = editData;

searchBar.addEventListener("input", (e) => {
  renderProjects(e.target.value);
});

// Initial render
renderProjects();
