// Dark/Light Mode Toggle
document.getElementById('theme-toggle').addEventListener('click', () => {
  const html = document.documentElement;
  const current = html.getAttribute('data-theme');
  html.setAttribute('data-theme', current === 'dark' ? 'light' : 'dark');
});

// Auto-load GitHub Projects (optional)
async function loadProjects() {
  const res = await fetch("https://api.github.com/users/Buzzi7/repos");
  const data = await res.json();
  const container = document.getElementById("project-list");

  data.slice(0, 5).forEach(repo => {
    const div = document.createElement("div");
    div.className = "project";
    div.innerHTML = `
      <h3>${repo.name}</h3>
      <p>${repo.description || 'No description'}<br />
      <a href="${repo.html_url}" target="_blank">View on GitHub →</a></p>
    `;
    container.appendChild(div);
  });
}

loadProjects();
