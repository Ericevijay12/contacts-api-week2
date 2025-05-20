const swaggerJSDoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Contacts API',
      version: '1.0.0',
    },
  },
  apis: ['./routes/*.js'], // Location of route definitions
};

module.exports = swaggerJSDoc(options);
