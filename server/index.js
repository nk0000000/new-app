import express from 'express';
import cors from 'cors';
import registerRoute from './routes/register.js';
import { sequelize } from './db/model.js';
import dotenv from 'dotenv'

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());
app.use('/api', registerRoute);

// Подключение к базе и запуск сервера
sequelize.authenticate()
  .then(() => {
    console.log('🟢 Успешное подключение к базе данных');
    return sequelize.sync(); // Не меняет структуру таблиц
  })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`✅ Сервер запущен на http://localhost:${PORT}`);
    });
  })
  .catch(err => {
    console.error('🔴 Ошибка подключения к базе данных:', err);
  });
