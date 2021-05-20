import Sequelize from 'sequelize';
import dbConfig from "../../environment-config.json";
import StudentModel from "./models/students.model.js";


const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,
  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.students = StudentModel(sequelize, Sequelize);

// create relationship
db.students.hasMany(db.students);


// .sync({ force: true })
db.sequelize.sync({ force: true }).then(() => {
    console.log("Drop and re-sync db.");
});

export default db;


