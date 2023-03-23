// 

// function createBootstrapCards(numCards) {
//     const cardsContainer = document.createElement("div");
//     cardsContainer.classList.add("row", "justify-content-center","container");

//     for (let i = 0; i < numCards; i++) {
//         const card = document.createElement("div");
//         card.classList.add("col-md-4", "mb-4");

//         const cardContent = `
//         <div class="card">
//             <img src="https://francetoday.com/wp-content/uploads/2022/03/shutterstock_1497983267-320x200.jpg" class="card-img-top" alt="Image 1">
//                 <div class="card-body">
//                     <h5 class="card-title">Paris</h5>
//                 </div>
//         </div>
//       `;

//         card.innerHTML = cardContent;
//         cardsContainer.appendChild(card);
//     }

//     document.body.appendChild(cardsContainer);
// }

// createBootstrapCards(3); // creates three cards


// Add hover effect on the cards
var cards = document.querySelectorAll(".card");
cards.forEach(function(card) {
  card.addEventListener("mouseover", function() {
    this.classList.add("shadow-lg");
  });
  card.addEventListener("mouseout", function() {
    this.classList.remove("shadow-lg");
  });
});