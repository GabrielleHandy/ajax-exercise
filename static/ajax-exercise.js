'use strict';

// PART 1: SHOW A FORTUNE

function showFortune(evt) {
  // TODO: get the fortune and show it in the #fortune-text div
  fetch('/fortune')
    .then(response => response.text())
    .then(responseData => {
      document.querySelector('#fortune-text').innerHTML = responseData;
    })
}

document.querySelector('#get-fortune-button').addEventListener('click', showFortune);

// PART 2: SHOW WEATHER

function showWeather(evt) {
  evt.preventDefault();

  const url = '/weather.json';
  const zipcode = document.querySelector('#zipcode-field').value;
  const queryString = `${url}?zipcode=${zipcode}`;

  // TODO: request weather with that URL and show the forecast in #weather-info
  fetch(queryString)
  .then(response => response.json())
  .then(responseData => {
    document.querySelector('#weather-info').innerHTML = responseData['forecast'];
  })
}

document.querySelector('#weather-form').addEventListener('submit', showWeather);

// PART 3: ORDER MELONS

function orderMelons(evt) {
  evt.preventDefault();
  
  // const url = '/order-melons.json';
  // const formInputs ={
  //   melon: document.querySelector('#qty-field').value,
  //   quantity: document.querySelector('#melon-type-field').value,
  // };
   
  // fetch(url, {
  //   method: "POST",
  //   body: JSON.stringify(formInputs),
  // })
  // .then(response => response.json())
  // .then (responseJson => {
  //   document.querySelector('#order-status').innerHTML = responseJson.text();
  //   if (responseJson['code'] === 'ERROR') {
  //     document.querySelector('#order-status').classList.add('order-error');
  //   }
  // })
  
  // TODO: show the result message after your form
  
  // TODO: if the result code is ERROR, make it show up in red (see our CSS!)
}
document.querySelector('#order-form').addEventListener('submit', orderMelons);
