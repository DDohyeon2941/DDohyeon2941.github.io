/* Preserve incoming links to the former single-page sections. */
const destinations = {"machine-learning": "research.html#machine-learning", "research": "research.html", "projects": "projects.html", "data-architecture": "projects.html#data-architecture", "applied-ai": "projects.html#applied-ai", "talks": "writing.html#talks", "blog": "writing.html#blog", "awards": "resume.html#awards", "funded-projects": "resume.html#funded-projects", "about": "resume.html#about"};
function followLegacyLink() { const target = destinations[location.hash.slice(1)]; if (target) location.replace(target); }
followLegacyLink();
window.addEventListener("hashchange", followLegacyLink);
