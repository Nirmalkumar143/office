document.addEventListener("DOMContentLoaded", () => {
    // Smooth scrolling for navbar links
    document.querySelectorAll("nav ul li a").forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            const section = document.querySelector(this.getAttribute("href"));
            section.scrollIntoView({ behavior: "smooth" });
        });
    });
});

const API_KEYS = {
    weather: "YOUR_OPENWEATHER_API_KEY",
    booking: "YOUR_BOOKING_API_KEY",
    flight: "YOUR_FLIGHT_API_KEY",
    train: "YOUR_TRAIN_API_KEY"
};

// Hotel Booking
function searchHotels() {
    let location = document.getElementById('hotelLocation').value;
    if (!location) return alert("Enter a location!");
    
    fetch(`https://api.example.com/hotels?location=${location}&apikey=${API_KEYS.booking}`)
        .then(res => res.json())
        .then(data => {
            document.getElementById('hotelResults').innerHTML = JSON.stringify(data);
        })
        .catch(err => console.error(err));
}

// Train Booking
function searchTrains() {
    let from = document.getElementById('trainFrom').value;
    let to = document.getElementById('trainTo').value;
    if (!from || !to) return alert("Enter both locations!");

    fetch(`https://api.example.com/trains?from=${from}&to=${to}&apikey=${API_KEYS.train}`)
        .then(res => res.json())
        .then(data => {
            document.getElementById('trainResults').innerHTML = JSON.stringify(data);
        })
        .catch(err => console.error(err));
}

// Flight Booking
function searchFlights() {
    let from = document.getElementById('flightFrom').value;
    let to = document.getElementById('flightTo').value;
    if (!from || !to) return alert("Enter both locations!");

    fetch(`https://api.example.com/flights?from=${from}&to=${to}&apikey=${API_KEYS.flight}`)
        .then(res => res.json())
        .then(data => {
            document.getElementById('flightResults').innerHTML = JSON.stringify(data);
        })
        .catch(err => console.error(err));
}

// Weather Checking
function getWeather() {
    let location = document.getElementById('weatherLocation').value;
    if (!location) return alert("Enter a location!");

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEYS.weather}`)
        .then(res => res.json())
        .then(data => {
            document.getElementById('weatherResult').innerHTML = 
                `Temperature: ${(data.main.temp - 273.15).toFixed(2)}°C <br> 
                 Weather: ${data.weather[0].description}`;
        })
        .catch(err => console.error(err));
}

// Location Services
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            document.getElementById('locationResult').innerHTML = 
                `Latitude: ${position.coords.latitude} <br> 
                 Longitude: ${position.coords.longitude}`;
        }, err => alert("Location access denied!"));
    } else {
        alert("Geolocation not supported by this browser.");
    }
}