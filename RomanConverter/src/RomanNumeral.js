/* Requirement:
 
  * generateRoman
  *
  * Generates a roman numeral when passed an integer
  *
  * Starts at the largest number and subtracts from the roman numeral array.
  * Continues while the number is greater than the value that is being looked up
  *
  * Example inputs and results:
  * 1 = I
  * 5 = V
  * 10 = X
  * 20 = XX
  * 3999 = MMMCMXCIX
  *
  */
  
const Main_Array = [
  [1000, 'M'],
  [900, 'CM'],
  [500, 'D'],
  [400, 'CD'],
  [100, 'C'],
  [90, 'XC'],
  [50, 'L'],
  [40, 'XL'],
  [10, 'X'],
  [9, 'IX'],
  [5, 'V'],
  [4, 'IV'],
  [1, 'I']
]

/*
* RomanNumeralGenerator main class with constructor in which passing number as a parameter 
* number(which is later converting into integer by using unary(+) operator)
* Purpose is to generate a roman numeral from a provided integer
*/
export default class RomanNumeralGenerator {
  constructor(number) {
    this.number = +number;
    this.mainArray = Main_Array;
  }

  generateRoman() {
    let num = this.number;
    let result = '';
	
	// NaN: returns true, if number is not a number
    if (isNaN(num)) {
      return "Error: Please enter a valid number";
    }
	
    // Used .map for iteration in place of for loop.
    this.mainArray.map(item => {
      let numDecimal = item[0]; //item[0] is the decimal, e.g. 10
      let numNumeral = item[1]; //item[1] is the numeral, e.g. X
      // while number is divisible (mod) by current decimal without a remainder greater than itself
      while (num % numDecimal < num) {
        // add the current roman numeral to our result string
        result += numNumeral;
        // remove the current decimal from our number
        num -= numDecimal;
      }
    });
    // Return the final result string
    return result;
  }
}
