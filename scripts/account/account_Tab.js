// Change les onglets dans mon compte

// Récupére les <li>
const menuLinks = document.querySelectorAll('.nav-account');

// Supprime class "active"
function removeActiveClassFromAll() {
    menuLinks.forEach(link => {
        link.classList.remove('active');
    });
}

// Afficher ou cacher les sections en fonction du click
function showContent(contentId) {
    const contentElements = document.querySelectorAll('.tab-content');
    contentElements.forEach(content => {
        if (content.id === contentId) {
            content.style.display = 'block'; 
        } else {
            content.style.display = 'none';
        }
    });
}

// Créer évenement "click"
menuLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();  

        removeActiveClassFromAll();

        // Classe active au lien cliqué
        e.currentTarget.classList.add('active');

        // Onglet sélectionné
        const contentId = e.currentTarget.id.replace('Link', 'Content');
        showContent(contentId);
    });
});

//  Mon compte par défaut
document.addEventListener('DOMContentLoaded', () => {
    showContent('accountContent');
    const firstLink = document.querySelector('#accountLink');
    if (firstLink) {
        firstLink.classList.add('active');
    }
});

    // Faire apparaitre la section Guide 
    const guideSub = document.getElementById("guideSub");
    const guideLink = document.getElementById("guideLi");

    // afficher/masquer la section "Guide"
    function toggleGuideLink() {
        if (guideSub.value === "Guide") {
            guideLi.classList.remove("d-none");  
        } else {
            guideLi.classList.add("d-none");
        }
    }

    
    toggleGuideLink();

    
    guideSub.addEventListener("change", function () {
        toggleGuideLink();
    });





