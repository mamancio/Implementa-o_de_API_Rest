const Sequelize = require('sequelize');
const database = require('../../../../confg/db');
const Author = require('../author/author-model');

const Book = database.sequelize.define('Book', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: true,
        primaryKey: true,
        field: 'codigo'
    },
    title: {
        type: Sequelize.STRING,
        allowNull: false,
        field: 'title'
    },
    authorId: {
        type: Sequelize.INTEGER,
        field: 'authorId',
        references: {
            model: 'Author',
            key: 'id'
        }
    },
    publishedDate: {
        type: Sequelize.STRING,
        allowNull: false,
        field: 'publishedDate'
    },
    isbn: {
        type: Sequelize.STRING,
        allowNull: false,
        field: 'isbn'
    },
    summary: {
        type: Sequelize.STRING,
        allowNull: false,
        field: 'summary'
    },    
}, {
    timestamps: false,
    tableName: 'tb_book'
});
Book.belongsTo(Author, {foreignKey: 'authorId'});

module.exports = Book;