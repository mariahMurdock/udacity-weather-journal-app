// // Call GET API
const fetch = require("node-fetch");
const getCallApi = async (country) => {
  const apiKey = 'ae716aaa5bdb92fb1647d30092d53fee';
  const url = 'http://api.openweathermap.org/data/2.5/weather?q=' + country + '&appid=' + apiKey;
  const response = await fetch(url, {
    method: 'GET'
  });
  console.log(await response.json());
};

getCallApi('Portland');



// Call GET API


const fetch = require("node-fetch");

document.getElementById('generate').addEventListener('click', performAction);


function performAction() {

  const apiKey = 'ae716aaa5bdb92fb1647d30092d53fee';

  // const country =

  const url = 'http://api.openweathermap.org/data/2.5/weather?q=' + country + '&appid=' + apiKey;

  const EnterWeather = document.getElementById('feelings').value;

  const getCallApi = async (country) => {

    const response = await fetch(url, {

      method: 'GET'

    });

    console.log(await response.json());

  };
};

getCallApi('Portland');

console.log('working');

function addDynamicContent() {
  const entryHolder = document.getElementById('entryHolder');
  const addToEntryHolder = document.createElement('div');
  const addDateDiv = entryHolder.appendChild(addToEntryHolder);
}

}
