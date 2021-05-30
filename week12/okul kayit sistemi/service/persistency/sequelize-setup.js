import Sequelize from 'sequelize';
import dbConfig from "../../environment-config.json";
import StudentModel from "./models/students.model.js";
import TeacherModel from "./models/teachers.model.js"
import LectureModel from "./models/lecture.model.js"
import EnrollmentModel from "./models/enrollment.model.js"

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
db.teachers = TeacherModel(sequelize, Sequelize);
db.lectures = LectureModel(sequelize, Sequelize);
db.enrollment = EnrollmentModel(sequelize, Sequelize);

// create relationship
db.students.belongsToMany(db.teachers,{ through:db.enrollment});
db.students.belongsToMany(db.lectures,{ through:db.enrollment});

db.teachers.belongsToMany(db.students,{ through:db.enrollment});
db.teachers.belongsToMany(db.lectures,{ through:db.enrollment});

db.lectures.belongsToMany(db.teachers,{ through:db.enrollment});
db.lectures.belongsToMany(db.students,{ through:db.enrollment});



// .sync({ force: true })
db.sequelize.sync({ force: true }).then(() => {
    console.log("Basari ile olusturuldu...");
});

export default db;


