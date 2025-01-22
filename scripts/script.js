// SCRIPT JAPAN TIME
let time = document.getElementById('time');
setInterval(() => {
    let d = new Date();
    let options = { timeZone: 'Asia/Tokyo', weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    let timeString = d.toLocaleTimeString( 'fr-FR', { timeZone: 'Asia/Tokyo' });
    let dateString = d.toLocaleDateString('fr-FR', options);
    time.innerHTML =`Date et heure de Tokyo: ${dateString} - ${timeString}`;
}, );


// SCRIPT WEATHER

// Affiche la méétéo actuelle via API OpenWeatherMap

const apiKey = 'd408b2585e4efe44f7725a1691a98ff2';

async function recupDonees(city, callback) {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=fr`);
        const data = await response.json();
        return callback(data);
    } catch {
        console.log("error");
    }
}

// Fonction pour rechercher data dans l'API
function affTemp(dt) {
    // affiche température
    const temperature = Math.round (dt.main.temp);
    // affiche météo
    const description = dt.weather[0].description;
    // cherche le code pour l'icone météo
    const iconCode = dt.weather[0].icon;  

    // URL de l'icône météo
    const iconUrl = `http://openweathermap.org/img/wn/${iconCode}@2x.png`;

    // ID de la div dans HTML
    let weather = document.getElementById('meteo');

    // Créer l'élément image
    const imgElement = document.createElement('img');
    imgElement.src = iconUrl;
    imgElement.alt = description;


    weather.innerHTML = `
    Météo à Tokyo: ${temperature} °C - ${description}
    <img src="${iconUrl}" alt="${description}" width="50"> `;
    
}

// Appel de la fonction avec 'Tokyo' comme ville
recupDonees('Tokyo', affTemp);

