
// pobranie referencji do elementu przycisku, listy, oraz wszystkich
// elementów li znajdujących się na stronie
var addBtn = document.getElementById('addElem'),
    list = document.getElementById('list'),
    liElements = document.getElementsByTagName('li');

// dodanie obsługi zdarzenia kliknięcia w przycisk
addBtn.addEventListener('click', function() {
  // utworzenie nowego elementu li
  var newListElement = document.createElement('li');
  // nadanie wartości innerText temu elementu
  newListElement.innerText = 'item ' + liElements.length;
  
  // dodanie nowo utworzonego elementu do listy
  list.appendChild(newListElement);
});
