import React, { useState } from 'react';
import API from './servises/Apip.js'; // Убедись, что путь правильный

import {
  generateCardNumber,
  generateExpDate,
  generateCVV,
  generatePin,
} from './utils/generator.js';

const Register = () => {
  const [form, setForm] = useState({
    email: '',
    password: '',
    first_name: '',
    last_name: '',
  });
  const [message, setMessage] = useState('');
  const [cardData, setCardData] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

 const handleSubmit = async (e) => {
  e.preventDefault();
  setMessage('');
  setCardData(null);
  try {
    const user = await API.registerUser({
      email: form.email,
      password: form.password,
      first_name: form.first_name,
      last_name: form.last_name,
    });

    console.log('Ответ от сервера при регистрации:', user); // ← Смотри в консоли!

    const card = await API.createCard({
      user_id: user.user_id, // ← если тут ошибка, смени на user.id
      card_number: generateCardNumber(),
      exp_date: generateExpDate(),
      cvv: generateCVV(),
      pin: generatePin(),
    });

    setCardData(card);
    setMessage('Регистрация и создание карты успешно!');
  } catch (err) {
    console.error('Ошибка:', err);
    setMessage('Ошибка при регистрации или создании карты');
  }
};

  return (
    <div className="register-container">
      <h2>Регистрация</h2>
      <form onSubmit={handleSubmit} className="register-form">
        <input type="text" name="first_name" placeholder="Имя" onChange={handleChange} required />
        <input type="text" name="last_name" placeholder="Фамилия" onChange={handleChange} required />
        <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
        <input type="password" name="password" placeholder="Пароль" onChange={handleChange} required />
        <button type="submit">Зарегистрироваться</button>
      </form>

      {message && <p>{message}</p>}

      {cardData && (
        <div className="card-info">
          <h3>Ваша карта:</h3>
          <p><strong>Номер:</strong> {cardData.card_number}</p>
          <p><strong>Срок действия:</strong> {cardData.exp_date}</p>
          <p><strong>CVV:</strong> {cardData.cvv}</p>
          <p><strong>PIN:</strong> {cardData.pin}</p>
        </div>
      )}
    </div>
  );
};

export default Register;
