let review = {
    reservationNumber: "2721",
    date: "06/02/2025",
    city: "Kyoto",
    userName: "Thomas",
    userEmail: "thomas@mail.com",
    guideName: "Miho",
    guideEmail: "miho.guide@mail.com"
  };
  

  document.getElementById('reserv_Number').textContent = `#${review.reservationNumber}`;
  document.getElementById('date_Reserv').textContent = review.date;
  document.getElementById('city_Reserv').textContent = review.city;
  document.getElementById('user_name').textContent = review.userName;
  document.getElementById('user_mail').textContent = review.userEmail;
  document.getElementById('guide_name').textContent = review.guideName;
  document.getElementById('guide_mail').textContent = review.guideEmail;