// const API_URL = "https://jsonplaceholder.typicde.com/users";
// async function handler() {
//   try {
//     const response = await fetch(API_URL);
//     const data = await response.json();
//     console.log(data);
//   } 
//   catch (err) {
//     console.log(err);
//   }
// }

// handler();
fetch('https://api.open-meteo.com/v1/forecast?latitude=28.6139&longitude=77.2090&current_weather=true')
  .then(res => res.json())
  .then(data => console.log(data.current_weather))
  .catch(err => console.error(err));
