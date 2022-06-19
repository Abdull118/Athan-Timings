document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const City = document.getElementById('City').value
  const Country = document.getElementById('Country').value
  const url = `http://api.aladhan.com/v1/timingsByCity?city=${City}&country=${Country}&method=8`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
       document.getElementById('Fajr').innerHTML = data.data.timings.Fajr
       document.getElementById('Dhur').innerHTML = data.data.timings.Dhuhr
       document.getElementById('Asr').innerHTML = data.data.timings.Asr
       document.getElementById('Maghrib').innerHTML = data.data.timings.Maghrib
       document.getElementById('Isha').innerHTML = data.data.timings.Isha
      
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}
