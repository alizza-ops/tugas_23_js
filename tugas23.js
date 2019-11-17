var numbers = [32, 33, 16, 40, 9, 7, 11, 2, 44, 1, 66];

function checkAdult(number) {
  return number >= 15;
}

  var datum = numbers.filter(checkAdult);
  console.log(datum);
