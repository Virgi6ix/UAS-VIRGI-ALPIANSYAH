const form = document.getElementById("formDaftar");
const pesan = document.getElementById("pesan");
const listPeserta = document.getElementById("listPeserta");
const jumlah = document.getElementById("jumlah");

let totalPeserta = 0;
const maxPeserta = 50;

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const nama = document.getElementById("nama").value.trim();
  const email = document.getElementById("email").value.trim();
  const hp = document.getElementById("hp").value.trim();
  const kategori = document.getElementById("kategori").value;

  // validasi kosong
  if (nama === "" || email === "" || hp === "" || kategori === "") {
    pesan.textContent = "Semua data wajib diisi";
    pesan.style.color = "red";
    return;
  }

  // validasi email
  if (!email.includes("@")) {
    pesan.textContent = "Email harus mengandung @";
    pesan.style.color = "red";
    return;
  }

  // validasi nomor HP
  if (isNaN(hp)) {
    pesan.textContent = "Nomor HP hanya boleh angka";
    pesan.style.color = "red";
    return;
  }

  // cek kuota
  if (totalPeserta >= maxPeserta) {
    pesan.textContent = "Pendaftaran ditutup, kuota sudah penuh";
    pesan.style.color = "red";
    return;
  }

  // tambah peserta
  const li = document.createElement("li");
  li.textContent = nama + " - " + kategori;
  listPeserta.appendChild(li);

  totalPeserta++;
  jumlah.textContent = totalPeserta;

  pesan.textContent = "Pendaftaran berhasil";
  pesan.style.color = "green";

  form.reset();
});
