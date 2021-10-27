const expect = require('chai').expect; // 
import RomanNumeralGenerator from '../src/RomanNumeral'; // Import our class itself

describe('The RomanNumeralGenerator', () => {
  let romanNumeralGenerator;

  /*
  * Test a larger number, e.g. 3999
  * should equal MMMCMXCIX
  */
  it('should return a roman numeral when passed an integer', () => {
      romanNumeralGenerator = new RomanNumeralGenerator(3999);
      let result = romanNumeralGenerator.generateRoman();
      expect(result).to.be.equal("MMMCMXCIX");
  });

  /*
  * Test a an invalid input
  * should return an error
  */
  it('should return error when passed an invalid input, e.g. string', () => {
      romanNumeralGenerator = new RomanNumeralGenerator("qwerty");
      let result = romanNumeralGenerator.generateRoman();
      expect(result).to.be.equal("Error: Please enter a valid number");
  });

  /*
  * Test a number passed as a string, should be converted to an int
  */
  it('should return a roman numeral when passed a string number', () => {
      romanNumeralGenerator = new RomanNumeralGenerator("10");
      let result = romanNumeralGenerator.generateRoman();
      expect(result).to.be.equal("X");
  });
});
