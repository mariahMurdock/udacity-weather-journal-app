
/* Global Variables */

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();

// Call GET API
const fetch = require("node-fetch");

document.getElementById('generate').addEventListener('click', performAction);

function performAction() {

  const apiKey = 'ae716aaa5bdb92fb1647d30092d53fee';

  // const country =

  const url = 'http://api.openweathermap.org/data/2.5/weather?q=' + country + '&appid=' + apiKey;

  const EnterWeather = document.getElementById('zip').value;

  const getCallApi = async (country) => {

    const response = await fetch(url, {

      method: 'GET'

    });

    console.log(await response.json());

  };
};

getCallApi('Portland');
