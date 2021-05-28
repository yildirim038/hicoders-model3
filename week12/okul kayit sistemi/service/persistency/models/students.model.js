export default (sequelize, Sequelize) => {
    const Students = sequelize.define("aliosman-student", {
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
  
    return Students;
  };