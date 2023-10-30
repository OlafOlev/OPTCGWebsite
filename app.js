import express from 'express';
import swaggerUi from 'swagger-ui-express';
import yamlJs from 'yamljs';
import path from 'path';
import { sessionHandler } from './middleware/session.js';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

// Import controllers
import exampleController from './controllers/exampleController.js';

const port = process.env.PORT || 3000;
const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Serve the dist/ folder files
app.use(express.static(path.join(__dirname, 'public')));

// Use the Swagger UI
app.use('/api/docs', swaggerUi.serve, swaggerUi.setup(yamlJs.load('./swagger.yaml')));

// Middleware (needs some fixing)
// app.use(sessionHandler);

// Routes/Controllers
app.use('/api/', exampleController);

// Catch all route from the vue app
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(port, () => {
    console.log(`App running. Docs at http://localhost:${port}/api/docs`);
    console.log(`Website: http://localhost:${port}/`)
});