const projects = [
  {
    name: "Make A Webs",
    icon: "fa-tools",
    link: "make webs",
  },
  {
    name: "Location",
    icon: "fa-map-marker-alt",
    link: "location",
  },
  {
    name: "Local Storage",
    icon: "fa-database",
    link: "local-storage",
  },
  {
    name: "Share Storage",
    icon: "fa-folder-open",
    link: "share storage",
  },
  {
    name: "Convert Text",
    icon: "fa-language",
    link: "convert text",
  },
  {
    name: "Convert File",
    icon: "fa fa-file-alt",
    link: "convert file",
  },
  {
    name: "Convert Voice",
    icon: "fa-microphone",
    link: "convert voice",
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
        window.open(window.location.href + project.link, "_self");
      });

      projectList.appendChild(item);
    });
}

searchBar.addEventListener("input", (e) => {
  renderProjects(e.target.value);
});

// Initial render
renderProjects();
