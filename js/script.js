// toggle class active
const navbarNav = document.querySelector(".navbar-nav");
// ketika daftar product di klik
document.querySelector("#daftar-product").onclick = () => {
  navbarNav.classList.toggle("active");
};

// klik di luar sidebar untuk menghilangkan nav
const daftar = document.querySelector("#daftar-product");

document.addEventListener("click", function (e) {
  if (!daftar.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

function tambahKeKeranjang(nama, harga) {
  let keranjang = JSON.parse(localStorage.getItem("keranjang")) || [];
  let index = keranjang.findIndex((item) => item.nama === nama);
  if (index !== -1) {
    keranjang[index].jumlah += 1;
  } else {
    keranjang.push({ nama, harga, jumlah: 1 });
  }
  localStorage.setItem("keranjang", JSON.stringify(keranjang));
  alert(nama + " ditambahkan ke keranjang!");
}

function beliLangsung(nama) {
  alert("Anda membeli " + nama + " langsung.");
}

const data = JSON.parse(localStorage.getItem("keranjang")) || [];
const container = document.getElementById("daftarKeranjang");
const totalText = document.getElementById("totalHarga");
let total = 0;

if (data.length === 0) {
  container.innerHTML = "<p>Keranjang kosong.</p>";
} else {
  data.forEach((item) => {
    let subtotal = item.harga * item.jumlah;
    total += subtotal;
    container.innerHTML += `
          <div class="item">
            ${item.nama} - Rp ${item.harga.toLocaleString()} x ${
      item.jumlah
    } = Rp ${subtotal.toLocaleString()}
          </div>`;
  });
}

totalText.textContent = "Total: Rp " + total.toLocaleString();

function hapusKeranjang() {
  if (confirm("Yakin ingin menghapus semua isi keranjang?")) {
    localStorage.removeItem("keranjang");
    location.reload();
  }
}

function checkout() {
  alert("Terima kasih! Checkout berhasil.");
  localStorage.removeItem("keranjang");
  location.reload();
}
