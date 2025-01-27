import express from 'express';
import cors from 'cors';
import connectDB from './config/db';
import menuRoutes from './routes/menuRoutes';
import itemRoutes from './routes/itemRoutes';

const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api', menuRoutes);
app.use('/api', itemRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
