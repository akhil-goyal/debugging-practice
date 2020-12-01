window.addEventListener('DOMContentLoaded', function () {

  var cards = document.querySelectorAll('.card');
  var selectedCards = [];
  var matchedCards = [];

  cards.forEach(function (card) {

    console.log('Looping through all the card items : ', card);

    card.addEventListener('click', function () {

      // If the card has already been matched, ignore it.
      if (card.classList.contains('is-matched')) {

        console.log('The cards have been matched!');
        return;

      }

      // If we haven't selected 2 cards yet, add the current card to the
      // collection of selected cards and apply the correct CSS class.
      if (selectedCards.length < 2) {

        console.log('Only 1 card has been selected.');

        card.classList.add('is-selected');

        selectedCards.push(card);

      }

      // If we have selected two cards, see if they match.
      if (selectedCards.length === 2) {

        console.log('Two cards have been selected.');

        var card1 = selectedCards[0];
        var card2 = selectedCards[1];

        console.log('Checking the cards selected : ', card1, card2);

        // If the cards match, add them to the collection of matched cards and
        // apply the correct CSS class.
        if (card1.innerText === card2.innerText) {

          console.log('Card values matched.');

          matchedCards.push(card1, card2);

          console.log('Testing matchedCards array after two matching cards have been pushed into it : ', matchedCards);

          card1.classList.add('is-matched');
          card2.classList.add('is-matched');

        }

        // Regardless of whether or not the cards match, deselect them and reset
        // the collection of matched cards.
        card1.classList.remove('is-selected');
        card3.classList.remove('is-selected');

        selectedCards = [];

      }

      // If we've matched all the cards, display a message.
      if (matchedCards.length > cards.length) {

        console.log('Testing matchedCards length & total cards length : ', matchedCards.length, cards.length);

        alert('You matched all the cards, nice job!');
      }
    });
  });
});
