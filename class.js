class user {
  name = "";
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  getAge() {
    return this.age;
  }
  getInfo() {
    return [this.name, this.age];
  }

  // use # in front to make a variable private
  #ageList = [];

  // to access private variable
  addMember(name, age) {
    this.#ageList.push(name);
  }
  getAgeList() {
    return this.#ageList;
  }
  static logUpdate() {
    return "You are looged in , are you enjoying so far?";
  }
}

class secondUser extends user {
  constructor(name, age) {
    super(name, age);
  }
  giveAnother() {
    return "Everything is goind good so far";
  }
}

module.exports = user;

const tom = new secondUser("Aradhya", 10);

console.log(tom.giveAnother());
console.log(tom.getInfo());

// logUpdate( cannot be accessed outside the class by any inherited class because
// its static
// console.log(tom.logUpdate());
