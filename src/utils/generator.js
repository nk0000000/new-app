// utils/generator.js

// Генерация 4-значного PIN-кода
export function generatePin() {
  return String(Math.floor(1000 + Math.random() * 9000));
}

// Генерация 16-значного номера карты
export function generateCardNumber() {
  let card = '';
  for (let i = 0; i < 4; i++) {
    card += Math.floor(1000 + Math.random() * 9000).toString();
  }
  return card;
}

// Генерация срока действия карты: текущий месяц + 4 года
export function generateExpDate() {
  const now = new Date();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const year = String((now.getFullYear() + 4) % 100).padStart(2, '0');
  return `${month}/${year}`;
}

// Генерация 3-значного CVV
export function generateCVV() {
  return String(Math.floor(100 + Math.random() * 900));
}
