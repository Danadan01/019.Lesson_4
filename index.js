class Hamburger {
  constructor(hamburgerSize, hamburgerStuffing) {
    this.price = hamburgerSize.price + hamburgerStuffing.price;
    this.calories = hamburgerSize.calories + hamburgerStuffing.calories;
  }

  static small_Size = {
    price: 50,
    calories: 20 
  }

  static big_Size = {
    price: 100,
    calories: 40
  }

  static stuffing_Cheese = {
    price: 10,
    calories: 20
  }

  static stuffing_Salad = {
    price: 20,
    calories: 5
  }

  static stuffing_Potato = {
    price: 15,
    calories: 10
  }

  static topping_Mayo = {
    price: 20,
    calories: 5
  }

  static topping_Sauce = {
    price: 15,
    calories: 0
  }

  addTopping(topping) {
    this.price += topping.price;
    this.calories += topping.calories;
  }

  showProperties() {
    console.log(`Price: ${this.price}`);
    console.log(`Calories: ${this.calories}`);
  }
}

let hamburger1 = new Hamburger(Hamburger.small_Size, Hamburger.stuffing_Cheese);
let hamburger2 = new Hamburger(Hamburger.big_Size, Hamburger.stuffing_Salad);
let hamburger3 = new Hamburger(Hamburger.big_Size, Hamburger.stuffing_Potato);

hamburger1.addTopping(Hamburger.topping_Mayo);
hamburger1.showProperties();

hamburger2.addTopping(Hamburger.topping_Sauce);
hamburger2.showProperties();

hamburger3.addTopping(Hamburger.topping_Sauce);
hamburger3.addTopping(Hamburger.topping_Mayo);
hamburger3.showProperties();