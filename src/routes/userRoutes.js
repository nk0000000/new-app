import express from 'express';
import { Users } from '../../db/model.js';

const router = express.Router();

router.post('/register', async (req, res) => {
  const { email, password, first_name, last_name } = req.body;
  try {
    const newUser = await Users.create({ email, password, first_name, last_name });
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ error: 'Ошибка при регистрации пользователя' });
  }
});
export default router;
