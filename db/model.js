import { DataTypes } from 'sequelize'
import sequelize from './db.js' // импорт sequelize из инициализации

// Пользователь
const Users = sequelize.define('users', {
  user_id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  email: { type: DataTypes.STRING, allowNull: false, unique: true },
  password: { type: DataTypes.STRING, allowNull: false },
  first_name: DataTypes.STRING,
  last_name: DataTypes.STRING,
})

// Банковская карта
const Cards = sequelize.define('cards', {
  card_id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  user_id: {
    type: DataTypes.INTEGER,
    references: { model: Users, key: 'user_id' },
    allowNull: false,
  },
  card_number: { type: DataTypes.STRING(16), unique: true, allowNull: false },
  exp_date: { type: DataTypes.STRING(5), allowNull: false }, // MM/YY
  cvv: { type: DataTypes.STRING(3), allowNull: false },
  pin: { type: DataTypes.STRING(4), allowNull: false },
  balance: { type: DataTypes.INTEGER, defaultValue: 0 },
})

// Банкомат
const ATMs = sequelize.define('atms', {
  atm_id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  location: DataTypes.STRING,
  status: { type: DataTypes.STRING(20), defaultValue: 'online' },
})

// Купюры в банкомате (название **ATMNotes** — убедись, что написано так же)
const ATMNotes = sequelize.define('atm_notes', {
  note_id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  atm_id: {
    type: DataTypes.INTEGER,
    references: { model: ATMs, key: 'atm_id' },
    allowNull: false,
  },
  denomination: { type: DataTypes.INTEGER, allowNull: false },
  quantity: { type: DataTypes.INTEGER, defaultValue: 0 },
})

// Транзакции
const Transactions = sequelize.define('transactions', {
  transaction_id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  from_card_id: {
    type: DataTypes.INTEGER,
    references: { model: Cards, key: 'card_id' },
  },
  to_card_id: {
    type: DataTypes.INTEGER,
    references: { model: Cards, key: 'card_id' },
  },
  atm_id: {
    type: DataTypes.INTEGER,
    references: { model: ATMs, key: 'atm_id' },
  },
  type: { type: DataTypes.STRING }, // 'withdraw', 'deposit', 'transfer'
  amount: { type: DataTypes.INTEGER },
  timestamp: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
})

// Админ
const Admins = sequelize.define('admins', {
  admin_id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  login: { type: DataTypes.STRING, unique: true },
  password: { type: DataTypes.STRING },
  role: { type: DataTypes.STRING, defaultValue: 'admin' },
})

export { Users, Cards, ATMs, ATMNotes, Transactions, Admins }
