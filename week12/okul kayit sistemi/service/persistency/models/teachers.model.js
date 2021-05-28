export default (sequelize, Sequelize) => {
    const Teachers = sequelize.define("aliosman-teacher", {
      name: {
        type: Sequelize.STRING
      },
      lastname: {
        type: Sequelize.STRING
      }
    });
  
    return Teachers;
  };