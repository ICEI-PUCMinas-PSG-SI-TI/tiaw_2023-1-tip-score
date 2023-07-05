function toggleStar(element) {
    element.classList.toggle('star-filled');
  }
 
  function toggleStar(element) {
    element.classList.toggle('star-filled');
    var league = element.parentNode.innerText.trim();
    var favorites = JSON.parse(localStorage.getItem('favorites')) || [];

    if (element.classList.contains('star-filled')) {
      favorites.push(league);
    } else {
      var index = favorites.indexOf(league);
      if (index !== -1) {
        favorites.splice(index, 1);
      }
    }

    localStorage.setItem('favorites', JSON.stringify(favorites));
  }

