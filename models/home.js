
let Sequelize = require('sequelize');

let sequelize = require('../util/database');

let Expenses = sequelize.define('expenses',{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true,
    },

    expenses : Sequelize.STRING,

    description:{
        type:Sequelize.STRING,
        allowNull:false,
    },
    category:{
        type:Sequelize.STRING,
        allowNull : false,
    },
});

module.exports = Expenses;