const { server, plugins } = require('./routes/server')

(async () =>{
    try {
        
        await server.register(plugins);

        await server.start();
        console.log("Server listening: " + server.nfo.uri);
    } catch (error) {
        console.log(error);
    }
})();