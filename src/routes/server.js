const Hapi = require("@hapi/hapi");
const Inert = require('@hapi/inert');
const Vision = require('@hapi/vision');
const HapiSwagger = require('hapi-swagger');

const routes = require('./routes');
const {version} = require('./package.json');

const server = Hapi.server({
    port: 3000,
    host: "localhost"
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
]


const plugins = [
    {
        plugin: routes,
        options: {
            routesBaseDir: './api'
        }
    }
];


plugins.push(...swaggerPlugin);

module.exports = {server, plugins};