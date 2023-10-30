import express from 'express';
import swaggerUi from 'swagger-ui-express';
import yamlJs from 'yamljs';
import { sessionHandler } from './middleware/session.js';

// Import controllers
import exampleController from './controllers/exampleController.js';

const port = process.env.PORT || 3000;
const app = express();

// Serve the dist/ folder files
app.use(express.static('public'));

// Use the Swagger UI
app.use('/api/docs', swaggerUi.serve, swaggerUi.setup(yamlJs.load('./swagger.yaml')));

// Middleware
app.use(sessionHandler);

// Routes/Controllers
app.use('/api/', exampleController);

app.listen(port, () => {
    console.log(`App running. Docs at http://localhost:${port}/api/docs`);
    console.log(`Website: http://localhost:${port}/`)
});