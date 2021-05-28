export default (sequelize, Sequelize) => {
    const Enrollment = sequelize.define("aliosman-enrollment", {
      teacherId: {
        type: Sequelize.INTEGER
      }, 
      lectureId: {
        type: Sequelize.INTEGER
      },  
      studentId: {
        type: Sequelize.INTEGER
      }
    });
  
    return Enrollment;
  };