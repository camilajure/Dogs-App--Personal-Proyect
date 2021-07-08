const {
  DataTypes
} = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  // [ ] Raza con las siguientes propiedades:
  // ID *
  // Nombre *
  // Altura *
  // Peso *
  // Años de vida

  //   [ ] Temperamento con las siguientes propiedades:
  // ID
  // Nombre

  sequelize.define('breed', {

    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    life_span: {
      type: DataTypes.STRING,
      
    },
    image: {
      // foto
      type: DataTypes.STRING,
    },
    weight: {
      type: DataTypes.STRING,
      allowNull: false
    }, 
    height: {
      type: DataTypes.STRING,
      allowNull: false
    }, 


  });
};