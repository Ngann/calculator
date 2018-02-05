var GallonsToLiters = function(gallons) {
  return gallons * 3.78541;
};

var LitersToGallons = function(liters) {
  return liters * 3.78541;
};

var gallons = parseInt(prompt("Enter number of gallons:"));

var result = GallonsToLiters(gallons);
alert(result);
