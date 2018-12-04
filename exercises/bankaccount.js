

class Account{
	constructor(amount = 0){
    //store the amount of money in the account
    this.amount = amount;
	}
	add(amount){
		//add money to the amount stored in the account
		//takes in an amount
    //adds it to the existing amount
    //returns the new amount in the account
    return this.amount += amount;
	}
	remove( amount ){
		//removes funds from an account
    //check if the amount to withdraw is more than the account
		//if more, only withdraw the amount in the account, not more
    if (amount > this.amount) {
      const withdrawn = this.amount;
      this.amount = 0;

      return withdrawn;
		//if less, withdraw the amount specified
    } else {
      this.amount -= amount;

      return amount;
    }
		//return the amount actually withdrawn
	}
	getAmount(){
    //returns the amount in the account
    return this.amount;
	}
}