function tombolKlik() {
  let konfirmasi = confirm("ingin pindah halaman?");
  
  if (konfirmasi) { window.open("https://www.pornhub.com", "_blank");} 
    else {}
}
function gantiTeks() {
  document.getElementById("teks").innerHTML = "Teks sudah berubah 😎";
}
function toggleDarkMode() {
  document.body.classList.toggle("dark");
}