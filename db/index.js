// index.js
import express from 'express';
import cors from 'cors';
import router from '../src/routes/register.js';
import sequelize from './db/db.js'; // <--- подключение Sequelize
import './db/model.js';
import dotenv from 'dotenv'

dotenv.config()


async function start() {
  try {
    await sequelize.authenticate()
    console.log('✅ Подключение к базе данных успешно!')

    await sequelize.sync({ force: true })  // создает таблицы, force: true — пересоздаст их
    console.log('✅ Таблицы созданы!')

    // Тут можно запускать логику приложения

  } catch (error) {
    console.error('❌ Ошибка подключения к базе:', error)
  }
}

start()
