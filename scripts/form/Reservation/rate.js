
const stars = document.querySelectorAll(".stars i");
const noteText = document.getElementById("note-text");

stars.forEach((star, index1) => {
  star.addEventListener("click", () => {
    // Mettre à jour les étoiles sélectionnées
    stars.forEach((star, index2) => {
      index1 >= index2 ? star.classList.add("active") : star.classList.remove("active");
    });

    // texte de la note en fonction des étoiles sélectionnées
    const rating = index1 + 1; // Les étoiles sont indexées à partir de 0, donc on ajoute 1
    noteText.textContent = `Note: ${rating} sur 5`;

    // valeur dans le champ caché
    document.getElementById("rating").value = rating;
  });
});