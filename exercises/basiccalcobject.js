
class Calculator{
	constructor(){
		//takes in nothing
    //make storage for the operator and the numbers
    this.operator = null;
    this.operand1 = null;
    this.operand2 = null;
	}
	loadOperator(operator){
		//adds the operator to the next calculation
    //takes in the operator
		//checks if it is a valid operation (+-*/)
    if ('+-*/'.includes(operator)) {
			//save the op to the constructor storage
      this.operator = operator;

			//return true
      return true;
    } else {
		//or return false if not the right operator
      return false;
    }
	}
	loadNumber(operand){
		//takes in a number and stores it as one of the numbers to perform math on
		//takes in 1 number
    //checks if it is actually a number and if we have fewer than 2 numbers
    if (typeof operand !== 'number') {
      return false;
    }

    if (!this.operand1) {
      //if it is a number, and we have 2 or fewer numbers, store it
      this.operand1 = operand;
      //return the number of numbers stored
      return 1;
    } else if (!this.operand2) {
      this.operand2 = operand;

      return 2;
    } else {
      //otherwise return false (too many numbers stored)
      return false;
    }
	}
	calculate(){
		//calculate the result of the stored numbers and operator
		//takes in nothing
    //calculates with the operator and 2 numbers
    let result;

    switch(this.operator) {
      case '+':
        result = this.operand1 + this.operand2;
        break;
      case '-':
        result = this.operand1 - this.operand2;
        break;
      case '*':
        result = this.operand1 * this.operand2;
        break;
      case '/':
        result = this.operand1 / this.operand2;
        break;
    }
    //clears out the stored numbers
    this.operand1 = this.operand2 = null;

    //returns the calculated result
    return result;
	}
}
