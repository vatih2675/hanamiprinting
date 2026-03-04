export function linkAkses(link) {
  window.location.href = link;
}

export function linkAksesOpen(link) {
  window.open(link);
}

export function formatAngka(angka) {
  return angka.toLocaleString("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  });
}