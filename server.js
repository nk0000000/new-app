import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import registerRoute from './routes/register.js';
import { sequelize } from './db/model.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use('/api', registerRoute);

sequelize.authenticate()
  .then(() => {
    console.log('🟢 Подключено к БД');
    return sequelize.sync();
  })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`✅ Сервер на http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error('🔴 Ошибка подключения к БД:', err);
  });
