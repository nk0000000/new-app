import axios from 'axios';
import { toast } from 'react-toastify';

const API = axios.create({
  baseURL: 'http://localhost:3000/api',
});

API.registerUser = async (userData) => {
  try {
    const response = await API.post('/users', userData);
    toast.success('Пользователь зарегистрирован');
    return response.data;
  } catch (error) {
    console.error(error);
    toast.error(error?.response?.data?.error || error.message || 'Ошибка при регистрации пользователя');
    return false;
  }
};

API.registerCard = async (cardData) => {
  try {
    const response = await API.post('/cards', cardData);
    toast.success('Карта создана');
    return response.data;
  } catch (error) {
    console.error(error);
    toast.error(error?.response?.data?.error || error.message || 'Ошибка при создании карты');
    return false;
  }
};

export default API;
