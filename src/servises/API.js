// // services/api.js
// import { Users, Cards, ATMs, ATMNotes, Transactions } from '../../db/model';

// export async function registerUser(email, password, first_name, last_name) {
//   return await Users.create({ email, password, first_name, last_name });
// }

// // 🏦 Создание карты
// export async function createCard(user_id, card_number, exp_date, cvv, pin) {
//   return await Cards.create({ user_id, card_number, exp_date, cvv, pin });
// }

// // 💸 Перевод между картами
// export async function transferFunds(from_card_id, to_card_id, amount) {
//   const fromCard = await Cards.findByPk(from_card_id);
//   const toCard = await Cards.findByPk(to_card_id);

//   if (!fromCard || !toCard) throw new Error('Карта не найдена');
//   if (fromCard.balance < amount) throw new Error('Недостаточно средств');

//   fromCard.balance -= amount;
//   toCard.balance += amount;

//   await fromCard.save();
//   await toCard.save();

//   await Transactions.create({
//     from_card_id,
//     to_card_id,
//     type: 'transfer',
//     amount,
//   });

//   return true;
// }

// // 📊 Получение баланса
// export async function getBalance(card_id) {
//   const card = await Cards.findByPk(card_id);
//   return card?.balance ?? null;
// }
