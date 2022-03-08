export function cpfMask(value) {
  return value
    .replace(/\D/g, "")
    .replace(/(\d{5})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d{1,2})/, "$1-$2")
    .replace(/(-\d{2})\d+?$/, "$1");
}
export function cepMask(value) {
  return value.replace(/\D/g, "").replace(/(\d{5})(\d)/, "$1-$2");
}
