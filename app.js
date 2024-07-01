import express from 'express';
import userRoutes from './routes/UserRoute.js';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

app.use('/api/users', userRoutes);
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const Port = process.env.PORT || 5000;

app.listen(Port, () => console.log(`Server running on port ${Port}`));
