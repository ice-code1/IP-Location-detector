import dotenv from 'dotenv';

dotenv.config();

const config = {
    port: process.env.PORT,
    weatherApiKey: process.env.API_KEY
};

export default config;