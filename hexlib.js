var HexLib = {
  getRandomHexDigit: function() {
    var hexDigits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f'];

    return hexDigits[Math.floor(Math.random() * 16)];
  },

  getRandomHexColor: function() {
    var hexNumber = '#';
    while (hexNumber.length < 7) {
      hexNumber += HexLib.getRandomHexDigit();
    }

    return hexNumber;
  },

  printRandomHexDigit: function() {
    console.log(HexLib.getRandomHexDigit());
  },

  printRandomHexColor: function() {
    console.log(HexLib.getRandomHexColor());
  }
};
