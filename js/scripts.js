var toUpper = function(string) {
  return string.toUpperCase();
}

$(document).ready(function() {
  $('#list').submit(function(event) {
    event.preventDefault();
    $('#list').slideUp();
    var addItem = $('input#items').val();
    var groceries = addItem.split(", ");
    groceries.sort();
    var groceryItems = groceries.map(toUpper)
    groceryItems.map(function(groceryItem) {
      $('#list-here').append('<li>' + groceryItem + '</li>');
      });
      $('.corkboard').show();
    });
});
