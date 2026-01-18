const form = document.getElementById("form");
const list = document.getElementById("listPeserta");
const jumlah = document.getElementById("jumlah");

let totalPeserta = 0;
const maxPeserta = 50;

form.addEventListener("submit", function (e) {
  e.preventDefault();

  if (totalPeserta >= maxPeserta) {
    alert("Pendaftaran sudah penuh!");
    return;
  }

  const nama = document.getElementById("nama").value;
  const email = document.getElementById("email").value;
  const hp = document.getElementById("hp").value;
  const kategori = document.getElementById("kategori").value;

  if (kategori === "") {
    alert("Silakan pilih kategori");
    return;
  }

  const li = document.createElement("li");
  li.textContent = `${nama} (${kategori}) - ${hp}`;
  list.appendChild(li);

  totalPeserta++;
  jumlah.textContent = `Jumlah Peserta: ${totalPeserta} / ${maxPeserta}`;

  form.reset();
});
