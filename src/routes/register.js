import express from 'express';
import { Users, Cards } from '../db/model.js';
import bcrypt from 'bcrypt';


const router = express.Router();

// Регистрация пользователя
router.post('/users', async (req, res) => {
  try {
    const { email, password, first_name, last_name } = req.body;

    // Проверка существующего email
    const existing = await Users.findOne({ where: { email } });
    if (existing) {
      return res.status(400).json({ error: 'Пользователь с таким email уже существует' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await Users.create({
      email,
      password: hashedPassword,
      first_name,
      last_name,
    });

    res.json(newUser);
  } catch (err) {
    console.error('Ошибка при создании пользователя:', err);
    res.status(500).json({ error: 'Ошибка сервера при создании пользователя' });
  }
});

// Создание карты
router.post('/cards', async (req, res) => {
  try {
    const { user_id, card_number, exp_date, cvv, pin } = req.body;

    const newCard = await Cards.create({
      user_id,
      card_number,
      exp_date,
      cvv,
      pin,
    });

    res.json(newCard);
  } catch (err) {
    console.error('Ошибка при создании карты:', err);
    res.status(500).json({ error: 'Ошибка сервера при создании карты' });
  }
});

export default router;
