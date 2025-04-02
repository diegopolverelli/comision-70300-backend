import { Sequelize } from "sequelize"
const sequelize = new Sequelize('mysql://root:123@localhost:3306/pruebasComis70300')

try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
    
    let resultado=await sequelize.query("SELECT * FROM heroes")
    console.log(resultado)
    resultado=await sequelize.query("CREATE DATABASE IF NOT EXISTS comis70300afterClass03")
     

    sequelize.close()
} catch (error) {
    console.error('Unable to connect to the database:', error);
}