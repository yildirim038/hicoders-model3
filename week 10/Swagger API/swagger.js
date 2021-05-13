import swaggerAutogenConstructor from 'swagger-autogen';
const swaggerAutogen = swaggerAutogenConstructor();

const doc = {
    info: {
        version: "0.0.1",
        title: "Swagger Api Trial",
        description: "First Trial"
    },
    host: "localhost:3000",
    basePath: "/",
    schemes: ['http', 'https'],
    consumes: ['application/json'],
    produces: ['application/json'],
    securityDefinitions: {
        apiKeyAuth:{
            type: "apiKey",
            in: "header",       
            name: "X-API-KEY",  
            description: "..."
        }
    },
    definitions: {
        Movie:     {
            "id": 10002,
            "name": "Die Hard",
            "year": 1999
        },
        Rent: {
            "movieId": 10002,
            "name": "Die Hard",
            "duration": 12,
            "price": 6
        }
    }
}

const outputFile = './swagger.json'
const endpointsFiles = ['./app.js']

swaggerAutogen(outputFile, endpointsFiles, doc).then(() => {
    require('./app')        
})