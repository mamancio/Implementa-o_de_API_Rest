const { getProducts, create, findById, deleteById} = require('./book-controller');
const schema = require('./book-schema');

const plugin = {
    name: 'book-routes',
    version: '1.0.0',
    register: (server) => {
        server.route([
            {
                method: "GET",
                path: "/v1/books",
                options: {
                    tags: ['api'],
                    description: 'Lista de livros',
                    handler: getProducts,
                    validate: schema.getProducts
                }
            },
            {
                method: "GET",
                path: "/v1/books/{id}",
                options: {
                    tags: ['api'],
                    description: 'Inserir Livros',
                    handler: findById,
                    validate: schema.getById
                }
            },
            {
                method: "POST",
                path: "/v1/books",
                options: {
                    tags: ['api'],
                    handler: create,
                    validate: schema.createProductsSchema
                }
            },
            {
                method: "DELETE",
                path: "/v1/books/{id}",
                options: {
                    tags: ['api'],
                    handler: deleteById,
                    validate: schema.deleteById
                }
            },
        ])
    }
};

module.exports = plugin;