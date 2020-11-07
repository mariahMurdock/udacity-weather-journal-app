
/* Global Variables */

// The URL for api key
const apiKey = 'ae716aaa5bdb92fb1647d30092d53fee';

// The URL root if user searches by zip code
const url = 'http://api.openweathermap.org/data/2.5/weather?q=' + zip + '&appid=' + apiKey;

// The URL if user searches by city
const cityUrl = 'http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey;




// Grab users zip code input
let zip = document.getElementById('zip').value;
// Grab users city input
let zip = document.getElementById('city').value;



// Call GET API
const fetch = require("node-fetch");

// Find the Generate button and add the listener
document.getElementById('generate').addEventListener('click', performAction);

function performAction() {

  // const apiKey = 'ae716aaa5bdb92fb1647d30092d53fee';
// const url = 'http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey;

// NOT RELEVANT??????:
  // const EnterWeather = document.getElementById('zip').value;

  const getCallApi = async (country) => {

    const response = await fetch(url, {

      method: 'GET'

    });

    console.log(await response.json());

  };
};

// getCallApi('Portland');


// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();
