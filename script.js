const projects = [
  {
    name: "Local Storage",
    icon: "fa-database",
    link: "local-storage",
  },
  {
    name: "Encrypt",
    icon: "fa-lock",
    link: "encrypt",
  },
  {
    name: "Decrypt",
    icon: "fa-unlock",
    link: "decrypt",
  },
];

const projectList = document.getElementById("projectList");
const searchBar = document.getElementById("searchBar");

function renderProjects(filter = "") {
  projectList.innerHTML = "";

  projects
    .filter((project) =>
      project.name.toLowerCase().includes(filter.toLowerCase())
    )
    .forEach((project) => {
      const item = document.createElement("div");
      item.classList.add("project-item");

      item.innerHTML = `
                  <i class="fas ${project.icon}"></i>
                  <span class="name">${project.name}</span>
                  <i class="fas fa-external-link-alt open" title="Open"></i>
              `;

      // Menambahkan event listener ke ikon "open"
      item.querySelector(".open").addEventListener("click", () => {
        window.open(window.location.href + project.link, "_blank");
      });

      projectList.appendChild(item);
    });
}

searchBar.addEventListener("input", (e) => {
  renderProjects(e.target.value);
});

// Initial render
renderProjects();
