const Hapi = require("@hapi/hapi");
const Inert = require('@hapi/inert');
const Vision = require('@hapi/vision');
const HapiSwagger = require('hapi-swagger');

const routes = require('./routes');

const { version } = require('../../package.json'); 
const connectDB = require('../confg/db'); 


const server = Hapi.server({
    port: 5000,
    host: "0.0.0.0"
});

const swaggerPlugin = [
    Inert,
    Vision,
    {
        plugin: HapiSwagger,
        options: {
            documentationPath: '/docs',
            schemes: ['http', 'https'],
            info: {
                title: 'Exercicio Final - API Livros',
                version: version
            }
        }
    }
];

const plugins = [
    {
        plugin: routes,
        options: {
            routesBaseDir: '../api'
        }
    }
];

plugins.push(...swaggerPlugin);

const init = async () => {
    try {
        // Conectar ao MongoDB
        await connectDB();

        // Registrar plugins
        await server.register(plugins);

        await server.start();
        console.log(`Server running at: ${server.info.uri}`);
    } catch (err) {
        console.log(err);
        process.exit(1);
    }
};

init();

module.exports = { server, plugins };