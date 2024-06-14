const mongoose = require('mongoose');
const database = require('../../../config/db');

const Author = new mongoose.Schema('Author', {
    id: {
        type: Sequelize.UUIDV4,
        allowNull: false,
        primaryKey: true,
        field: 'id' 
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
    tableName: 'tb_author' //nome da tabela banco
});

module.exports = mongoose.model('Author', bookSchema);