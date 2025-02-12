// Afficher / Cacher avis reçus
const showReview = document.getElementById('show_review');
const reviewsContainer = document.getElementById('reviews_container');


 showReview.addEventListener('click', function() {
    
    reviewsContainer.classList.toggle('show'); 
   
    if (reviewsContainer.classList.contains('show')) {
        showReview.textContent = 'Afficher les avis';  
    } else {
        showReview.textContent = 'Cacher les avis';  
    }
});