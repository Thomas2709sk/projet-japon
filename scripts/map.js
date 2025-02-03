var map = L.map('map').setView([34.7, 135.5], 9); // Zoom sur la région du Kansai

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// // Cluster Osaka
// var osakaGroup = L.markerClusterGroup();

// // Creer Groupe cities et places
// var cities = L.layerGroup().addTo(map);
// var castles = L.layerGroup().addTo(map);



// // City
// var osaka = L.marker([34.7, 135.5]).addTo(cities);
// osaka.bindPopup("<b>Osaka</b><br>Préfecture d'Osaka.");
// osakaGroup.addLayer(osaka);

// var kyoto = L.marker([35.0116, 135.7681]).addTo(cities);
// kyoto.bindPopup("<b>Kyoto</b><br>Préfecture de Kyoto.");

// var wakayama = L.marker([34.2260, 135.1675]).addTo(cities);
// wakayama.bindPopup("<b>Wakayama</b><br>Capitale de la préfecture de Wakayama.");

// // Places (castles)
// var himejiMarker = L.marker([34.8394, 134.6939]).addTo(castles);
// himejiMarker.bindPopup("<b>Château de Himeji</b><br>Patrimoine mondial de l'UNESCO.");

// var hikoneMarker = L.marker([35.2802, 136.2541]).addTo(castles);
// hikoneMarker.bindPopup("<b>Château de Hikone</b><br>Un des châteaux les mieux conservés du Japon.");

// var osakaCastle = L.marker([34.6873, 135.5262]).addTo(castles);
// osakaCastle.bindPopup("<b>Château d'Osaka</b><br>Un symbole emblématique de la ville d'Osaka.");
// osakaGroup.addLayer(osakaCastle);


// // ajout cluster a la map
// map.addLayer(osakaGroup);

// function filterMarkers() {

//         var filterCities = document.getElementById("cities").checked;
//         var filterCastles = document.getElementById("castles").checked;

//         if(filterCities) {
//             cities.addTo(map);
//         }
//         else {
//             map.removeLayer(cities);
//         }

//         if(filterCastles) {
//             castles.addTo(map);
//         }
//         else {
//             map.removeLayer(castles);
//         }
// }

//     document.getElementById("cities").addEventListener("change", filterMarkers);
//     document.getElementById("castles").addEventListener("change", filterMarkers);

//     filterMarkers();



// Cluster Osaka
var osakaGroup = L.markerClusterGroup();

// Créer groupe pour cities et castles
var citiesGroup = L.layerGroup();  
var castlesGroup = L.layerGroup();  

// Cities
var osaka = L.marker([34.7, 135.5]).addTo(citiesGroup);
osaka.bindPopup("<b>Osaka</b><br>Préfecture d'Osaka.");

var kyoto = L.marker([35.0116, 135.7681]).addTo(citiesGroup);
kyoto.bindPopup("<b>Kyoto</b><br>Préfecture de Kyoto.");

var wakayama = L.marker([34.2260, 135.1675]).addTo(citiesGroup);
wakayama.bindPopup("<b>Wakayama</b><br>Capitale de la préfecture de Wakayama.");

// Castles
var himejiMarker = L.marker([34.8394, 134.6939]).addTo(castlesGroup);
himejiMarker.bindPopup("<b>Château de Himeji</b><br>Patrimoine mondial de l'UNESCO.");

var hikoneMarker = L.marker([35.2802, 136.2541]).addTo(castlesGroup);
hikoneMarker.bindPopup("<b>Château de Hikone</b><br>Un des châteaux les mieux conservés du Japon.");

var osakaCastle = L.marker([34.6873, 135.5262]).addTo(castlesGroup);
osakaCastle.bindPopup("<b>Château d'Osaka</b><br>Un symbole emblématique de la ville d'Osaka.");

// Envoi le cluster osaka  dans citiesGroup et castlesGroup
osakaGroup.addLayer(citiesGroup);
osakaGroup.addLayer(castlesGroup);

// Ajout cluster à la carte
map.addLayer(osakaGroup);

//filtrage
function filterMarkers() {
    var filterCities = document.getElementById("cities").checked;
    var filterCastles = document.getElementById("castles").checked;

    // Vider le cluster
    osakaGroup.clearLayers(); 

    // Filtrage  Cities
    if (filterCities) {
        osakaGroup.addLayer(citiesGroup);  // Ajouter les villes au cluster
    }

    // Filtrage Castles
    if (filterCastles) {
        osakaGroup.addLayer(castlesGroup); 
    }
    
    
    map.addLayer(osakaGroup);  
}


document.getElementById("cities").addEventListener("change", filterMarkers);
document.getElementById("castles").addEventListener("change", filterMarkers);


filterMarkers();






