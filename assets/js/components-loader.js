async function loadComponent(id, path) {
  const el = document.getElementById(id);
  if (!el) return;

  const res = await fetch(path);
  if (!res.ok) {
    console.error(`Gagal load ${path}`);
    return;
  }
  el.innerHTML = await res.text();
}

document.addEventListener("DOMContentLoaded", () => {
  loadComponent("navbar", "/components/navbar.html");
  loadComponent("footer", "/components/footer.html");
});
