export default (sequelize, Sequelize) => {
    const Lecture = sequelize.define("aliosman-lecture", {
      name: {
        type: Sequelize.STRING
      }
    });
  
    return Lecture;
  };