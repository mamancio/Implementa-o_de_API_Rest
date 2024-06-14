const Book = require('../models/book-model');

module.exports = {
    name: 'bookRoutes',
    version: '1.0.0',
    register: async (server, options) => {
        server.route([
            {
                method: 'POST',
                path: '/books',
                options: {
                    validate: options.config.createBooksSchema,
                    handler: async (request, h) => {
                        const { title, authorId, publishedDate, isbn, summary } = request.payload;
                        try {
                            const newBook = new Book({ title, authorId, publishedDate, isbn, summary });
                            await newBook.save();
                            return h.response(newBook).code(201);
                        } catch (err) {
                            console.error(err);
                            return h.response(err).code(500);
                        }
                    }
                }
            },
            {
                method: 'GET',
                path: '/books/{id}',
                options: {
                    validate: options.config.getById,
                    handler: async (request, h) => {
                        try {
                            const book = await Book.findById(request.params.id).populate('authorId');
                            if (!book) {
                                return h.response({ message: 'Book not found' }).code(404);
                            }
                            return h.response(book).code(200);
                        } catch (err) {
                            console.error(err);
                            return h.response(err).code(500);
                        }
                    }
                }
            },
            {
                method: 'GET',
                path: '/books',
                options: {
                    validate: options.config.getBooks,
                    handler: async (request, h) => {
                        const { title, author } = request.query;
                        const query = {};
                        if (title) query.title = title;
                        if (author && author.name) query['author.name'] = author.name;
                        try {
                            const books = await Book.find(query).populate('authorId');
                            return h.response(books).code(200);
                        } catch (err) {
                            console.error(err);
                            return h.response(err).code(500);
                        }
                    }
                }
            }
        ]);
    }
};