// Nombre visiteurs
const graphVisit = new Chart(numberVisit, {
    type: "line",
    data: {
        labels: ["Janvier", "Février", "Mars", "Avril"],
        datasets: [{
            label: "Nombre de visiteurs",
            data: [20, 25, 40, 30],
            borderColor: ["blue"], 
            borderWidth: 5,
            pointBackgroundColor: "black",
        }]
    },
    options: {
        scales: {
            y: {
                suggestedMin: 0,
                suggestedMax: 50,
                
            }
        }
    }
});
const totalVisit = [20, 25, 40, 30].reduce((a, b) => a + b, 0);
document.getElementById("totalVisit").textContent = `Nombre de visiteurs : ${totalVisit}`;

// Graph Reservations
const graphReserv = new Chart(numberReserv, {
    type: "bar",
    data: {
        labels: ["Janvier", "Février", "Mars", "Avril"],
        datasets: [{
            label: "Nombre de réservations",
            data: [10, 20, 15, 25],
            backgroundColor: ["crimson", "lightblue", "lightblue", "lightgreen"], 
            borderColor: ["black"], 
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                suggestedMax: 30,
                
            }
        }
    }
});
const totalReserv = [10, 20, 15, 25].reduce((a, b) => a + b, 0);
document.getElementById("totalReserv").textContent = `Nombre de Reservation : ${totalReserv}`;

// Graph Credits
const graphCredits = new Chart(money, {
    type: "bar",
    data: {
        labels: ["Janvier", "Février", "Mars", "Avril"],
        datasets: [{
            label: "Nombre de Crédits recu",
            data: [20, 40, 30, 50],
            backgroundColor: ["crimson", "lightblue", "lightblue", "lightgreen"], 
            borderColor: ["black"], 
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                suggestedMax: 60,
                
            }
        }
    }
});

const totalCredits = [20, 40, 30, 50].reduce((a, b) => a + b, 0);
document.getElementById("totalCredits").textContent = `Crédits Total : ${totalCredits}`;