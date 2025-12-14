const galleryData = {
  2026: [
    {
      title: "LDKM",
      img: "/assets/img/kegiatan/2026/ldkm1.jpg",
      desc: "Latihan Dasar Kepemimpinan Mahasiswa"
    }
  ],
  2025: [
    {
      title: "LDKM 2025",
      img: "/assets/img/kegiatan/2025/ldkm24.jpg",
      desc: "Kegiatan pembentukan karakter mahasiswa"
    },
    {
      title: "Workshop",
      img: "/assets/img/kegiatan/2025/placeholder.jpg",
      desc: "Workshop peningkatan kompetensi"
    }
  ]
};

const yearSelect = document.getElementById("yearSelect");
const galleryContainer = document.getElementById("galleryContainer");

function renderGallery(year) {
  galleryContainer.innerHTML = "";

  galleryData[year].forEach(item => {
    const card = document.createElement("article");
    card.className =
      "bg-slate-800 rounded-xl overflow-hidden hover:scale-[1.02] transition";

    card.innerHTML = `
      <img src="${item.img}"
           alt="${item.title}"
           class="h-44 w-full object-cover">

      <div class="p-4">
        <h3 class="font-semibold mb-1">${item.title}</h3>
        <p class="text-sm text-slate-400">${item.desc}</p>
      </div>
    `;

    galleryContainer.appendChild(card);
  });
}

yearSelect.addEventListener("change", e => {
  renderGallery(e.target.value);
});

// initial load (tahun terbaru)
renderGallery(Object.keys(galleryData)[0]);
