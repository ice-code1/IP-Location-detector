# IP Location API

This project is a simple web server built with Node.js and Express. It provides an API endpoint that responds with a greeting message, the client's IP address, their location (city), and the current temperature in that location.

## Features

- Detects the client's IP address.
- Determines the client's location based on their IP address.
- Fetches the current temperature for the client's location from the OpenWeatherMap API.
- Returns a JSON response with the client's IP, location, and a greeting message including the temperature.

## Installation

1. **Clone the repository:**
   ```sh
   git clone https://github.com/ice-code1/IP-Location-detector.git
   cd weather-greeting-api

2. **Install dependencies:**
    npm install

3. **Create a .env file in the root directory and add your OpenWeatherMap API key:**
    PORT=3000
    WEATHER_API_KEY=your_openweathermap_api_key

## Usage

1. **start the server:**
   npm start or npm run start
 
2. **make a GET request to the API endpoint:**
    http://localhost:3000/api/hello?visitor_name=YourName
    

3. **example response:**
    {
    "client_ip": "192.168.1.1",
    "location": "New York",
    "greeting": "Hello, YourName!, the temperature is 22 degrees Celsius in New York"
    }

## Deployment
To deploy this project, you can use any cloud service provider. Make sure to set your environment variables (PORT and WEATHER_API_KEY) appropriately.

 **Testing with Postman**
- Open Postman.
- Create a new GET request.
- Set the URL to:
    http://localhost:3000/api/hello?visitor_name=YourName
    
## Technologies Used
- Node.js
- Express
- geoip-lite
- node-fetch
- request-ip
- dotenv

## Contributing

1. Fork the repository.
2. Create a new branch (git checkout -b feature-branch).
3. Make your changes and commit them (git commit -m 'Add new feature').
4. Push to the branch (git push origin feature-branch).
5. Create a new Pull Request.

## Acknowledgements

- [Express](https://expressjs.com/)
- [geoip-lite](https://www.npmjs.com/package/geoip-lite)
- [node-fetch](https://www.npmjs.com/package/node-fetch)
- [request-ip](https://www.npmjs.com/package/request-ip)
- [dotenv](https://www.npmjs.com/package/dotenv)
- [OpenWeatherMap API](https://openweathermap.org/api)


