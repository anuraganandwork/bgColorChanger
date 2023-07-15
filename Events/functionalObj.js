function user(userName, course) {
  this.userName = `${userName}`;
  this.course = `${course}`;
}

const anu = new user("Anurag Anand", "React Native");
console.log(anu);

// important
user.prototype.getFirstName = function () {
  console.log(this.userName);
};
anu.getFirstName();
