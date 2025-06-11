// db.js
import { Sequelize } from 'sequelize'

const sequelize = new Sequelize('atm_system', 'postgres', '0011', {
  host: 'localhost',
  dialect: 'postgres',
  logging: console.log,
})

export default sequelize
