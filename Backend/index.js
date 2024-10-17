import express from 'express';
import mongoose from 'mongoose';
import photoRoutes from './Router/photoRouter.js';
import cors from 'cors';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

// Set up Express app
const app = express();

// Middleware
app.use(express.json());

const corsOptions = {
    origin: 'http://localhost:5173',
    optionsSuccessStatus: 200,
    credentials:true
}

app.use(cors(corsOptions))

// Routes
app.use('/api', photoRoutes);

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((error) => {
        console.error('Error connecting to MongoDB:', error);
    });

// Start the server
app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});