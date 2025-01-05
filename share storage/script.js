const main_view = document.getElementById("main-view");
const form_view = document.getElementById("form-view");
const usernamet = document.getElementById("usernamet");
const projectList = document.getElementById("projectList");
const searchBar = document.getElementById("searchBar");

const nameInput = document.getElementById("nama");
const valuesInput = document.getElementById("value");
const passwordInput = document.getElementById("password");
const passwordInputd = document.getElementById("passwordd");
const passwordInputd2 = document.getElementById("passwordd2");
const dataTypeInput = document.getElementById("data-type");
const formTitle = document.getElementById("form-title");
const submitBtn = document.getElementById("submit-btn");

usernamet.innerText = usernameu;

function showMainView() {
  main_view.classList.remove("hidden");
  form_view.classList.add("hidden");
  list(svstorages);
}
function showFormView() {
  main_view.classList.add("hidden");
  form_view.classList.remove("hidden");
  renderform();
}

function showPasswords(event) {
  if (event == "private") {
    passwordInputd.classList.remove("hidden");
  } else {
    passwordInputd.classList.add("hidden");
  }
}

function list(storages, filter = "") {
  projectList.innerHTML = "";

  const keys = Object.keys(storages);

  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    if (key.toLowerCase().includes(filter.toLowerCase())) {
      const type2 = storages[key].type;
      const item = document.createElement("div");
      item.classList.add("project-item");

      item.innerHTML = `
                      <i class="fas ${
                        type2 === "private" ? "fa-lock" : "fa-unlock-alt"
                      }"></i>
                      <span class="name">${key}</span>
                      <i class="fas fa-search edit" title="edit" onclick="seedata('${key}')"></i>
                  `;

      projectList.appendChild(item);
    }
  }
}
function renderform() {
  const keys = Object.keys(svstorages);
  const exists = keys.includes(usernameu);
  formTitle.textContent = "Edit Storage";
  if (exists) {
    nameInput.value = usernameu;
    if (svstorages.hasOwnProperty(usernameu)) {
      passwordInput.value = svstorages[usernameu].pass;
      dataTypeInput.value = svstorages[usernameu].type;
      valuesInput.value = svstorages[usernameu].val;
      valuesInput.readOnly = false;
      passwordInputd2.classList.remove("hidden");
      submitBtn.classList.remove("hidden");
      showPasswords(svstorages[usernameu].type);
      // console.log(`Data untuk key "${usernameu}":`, svstorages[usernameu]);
    } else {
      // console.log(`Key "${usernameu}" tidak ditemukan.`);
    }
  } else {
    nameInput.value = usernameu;
  }
}

function submitform() {
  const pass = passwordInput.value;
  const type = dataTypeInput.value;
  const val = valuesInput.value;
  if (type === "private") {
    const data = {
      pass: pass,
      type: type,
      val: val,
    };
    console.log(data);
    addDataToFirebase(data);
  } else {
    const data = {
      pass: "",
      type: type,
      val: val,
    };
    console.log(data);
    addDataToFirebase(data);
  }
}

function seedata(key) {
  if (svstorages[key].type === "private") {
    const inputPassword = prompt("Masukkan password untuk mengedit:");
    if (inputPassword !== svstorages[key].pass) {
      alert("Password salah!");
      return;
    }
  }
  main_view.classList.add("hidden");
  form_view.classList.remove("hidden");

  formTitle.textContent = "See Storage";
  nameInput.value = key;
  if (svstorages.hasOwnProperty(key)) {
    valuesInput.value = svstorages[key].val;
    valuesInput.readOnly = true;
    passwordInputd2.classList.add("hidden");
    submitBtn.classList.add("hidden");
    // console.log(`Data untuk key "${usernameu}":`, svstorages[usernameu]);
  } else {
    // console.log(`Key "${usernameu}" tidak ditemukan.`);
  }
}

searchBar.addEventListener("input", (e) => {
  list(svstorages, e.target.value);
});
