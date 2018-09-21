toUpper = function(string) {
  return string.toUpperCase();
}


$(document).ready(function() {
  $('#list').submit(function(event) {
    event.preventDefault();
    $('#list').slideUp();
    var generatedList = []
    var sortedList = []
    var capitalList = []
    var items = ['firstItem', 'secondItem', 'thirdItem', 'fourthItem', 'fifthItem', 'sixthItem', 'seventhItem']
    items.forEach(function(item) {
      generatedList.push($('input#' + item).val());
      generatedList.sort();
      var groceries = generatedList.map(toUpper);
      groceries.forEach(function(grocery) {
        $('#list-here').text(grocery);
      });
      console.log(groceries);
    });

  });
});
