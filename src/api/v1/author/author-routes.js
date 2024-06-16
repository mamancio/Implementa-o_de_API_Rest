const { getAuthors, create, findById, deleteById} = require('./author-controller');
const schema = require('./author-schema');

const plugin = {
    name: 'author-routes',
    version: '1.0.0',
    register: (server) => {
        server.route([
            {
                method: "GET",
                path: "/authors",
                options: {
                    tags: ['Authors'],
                    description: 'Lista de autores',
                    handler: getAuthors,
                }
            },
            {
                method: "GET",
                path: "/authors/{id}",
                options: {
                    tags: ['Authors'],
                    description: 'códigos de autores',
                    handler: findById,
                    validate: schema.getById
                }
            },
            {
                method: "POST",
                path: "/authors",
                options: {
                    tags: ['Authors'],
                    handler: create,
                    validate: schema.createAuthorsSchema
                }
            },
            {
                method: "DELETE",
                path: "/authors/{id}",
                options: {
                    tags: ['Authors'],
                    handler: deleteById,
                    validate: schema.deleteById
                }
            },
        ])
    }
};

module.exports = plugin;