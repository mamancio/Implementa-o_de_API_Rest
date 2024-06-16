const Sequelize = require('sequelize');
const database = require('../../../../confg');

const Author = database.sequelize.define('Author', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: true,
        primaryKey: true,
        field: 'codigo'
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false,
        field: 'name'
    },
    biography: {
        type: Sequelize.STRING,
        allowNull: false,
        field: 'biography'
    },
    birthDate: {
        type: Sequelize.STRING,
        allowNull: false,
        field: 'birthDate'
    }
}, {
    timestamps: false,
    tableName: 'tb_author'
});

module.exports = Author;