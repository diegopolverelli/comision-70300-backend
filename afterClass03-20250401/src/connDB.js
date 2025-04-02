import { Sequelize } from "sequelize"

export const sequelize = new Sequelize('comis70300afterClass03', 'root', '123', {
    host: 'localhost',
    // dialect: /* one of 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | 'db2' | 'snowflake' | 'oracle' */
    dialect: 'mysql', 
    // logging: false
});

try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
} catch (error) {
    console.error('Unable to connect to the database:', error);
}