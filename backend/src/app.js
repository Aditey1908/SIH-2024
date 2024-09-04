require('dotenv').config();
const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const db = require('./models'); // Import the db object that contains sequelize and models
const truckRoutes = require('./routes/truckRoutes');
const routeRoutes = require('./routes/routeRoutes');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use('/trucks', truckRoutes);
app.use('/routes', routeRoutes);

// Define a route to handle GET requests to the root URL
app.get('/', (req, res) => {
  res.send('Welcome to the Truck Tracking Application API!');
});

// Create an HTTP server using Express
const server = http.createServer(app);

// Set up the WebSocket server with socket.io
const io = socketIo(server);

io.on('connection', (socket) => {
  console.log('Client connected');
  // Handle socket events here
});

// Sync database and start the server
db.sequelize.sync().then(() => {
  console.log('Database synced successfully.');
  server.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
  });
}).catch(err => {
  console.error('Failed to sync database:', err.message); // Print only the error message
});
