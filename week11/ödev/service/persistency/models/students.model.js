export default (sequelize, Sequelize) => {
    const Students202 = sequelize.define("student-by-aliosman", {
      name: {
        type: Sequelize.STRING
      },
      lastname: {
        type: Sequelize.STRING
      },
      class: {
        type: Sequelize.STRING
      },
      age: {
        type: Sequelize.INTEGER
      }
    });
  
    return Students202;
  };