import express from 'express';
import geoip from 'geoip-lite';
import fetch from 'node-fetch';
import config from '../config/config.js';
import requestIp from 'request-ip';



const app = express();

app.use(requestIp.mw());

class UserControllers {
    async Hello(req, res) {
        const visitorName = req.query.visitor_name;
        const clientIp = req.clientIp.substring(7) || req.ip.substring(7);

        
        // Get location based on IP
        const geo = geoip.lookup(clientIp);
        const city = geo && geo.city ? geo.city : 'Unknown';

        // Get weather data
        const weatherApiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${config.weatherApiKey}`;
        const response = await fetch(weatherApiUrl);
        const weatherData = await response.json();
        const temperature = weatherData.main ? weatherData.main.temp : 'Unknown';

        console.log(`Client IP: ${clientIp}`);
        console.log(`Geo Data: ${JSON.stringify(geo)}`);

        res.json({
            client_ip: clientIp,
            location: city,
            greeting: `Hello, ${visitorName}!, the temperature is ${temperature} degrees Celsius in ${city}`
        });
    }
}

export default new UserControllers();
