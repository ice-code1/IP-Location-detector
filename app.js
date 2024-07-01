import express from 'express';
import userRoutes from './routes/UserRoute.js';
import dotenv from 'dotenv';

dotenv.config();

const app = express();


app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use('/api/users', userRoutes);

app.get('/', (req, res) => {
    res.send('api deployed');
  })
  

const Port = process.env.PORT || 5000;

app.listen(Port, () => console.log(`Server running on port ${Port}`));
