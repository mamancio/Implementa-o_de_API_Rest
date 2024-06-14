const { server, plugins } = require('./src/routes/server')
const connectDB = require('./src/confg/db');

(async () => {
    try {
        // Connect to MongoDB
        await connectDB();

        // Register routes and plugins
        await server.register(plugins);

        await server.start();
        console.log("Server listening: " + server.info.uri);
    } catch (error) {
        console.log(error);
    }
})();