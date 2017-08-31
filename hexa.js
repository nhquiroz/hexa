(function() {
  function Hexa() {
  }

  Hexa.prototype.getRandomHexDigit = () => {
    let hexDigits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f'];
		return hexDigits[Math.floor(Math.random() * 16)];
  };

  Hexa.prototype.getRandomHexColor = () => {
    let hexNumber = '#';
    while (hexNumber.length < 7) {
      hexNumber += Hexa.prototype.getRandomHexDigit();
    }
    return hexNumber;
  };

  Hexa.prototype.printRandomHexDigit = () => {
    console.log(Hexa.prototype.getRandomHexDigit());
  };

  Hexa.prototype.printRandomHexColor = () => {
    console.log(Hexa.prototype.getRandomHexColor());
  };

  window.Hexa = Hexa;
})();
