const person = {
  name: "Mahesh Kumar",
  sonName: "Anurag Anand",

  display: function () {
    console.log(`Family details ${this.sonName}`);
  },
};

// bind always gives a reference back
const member = {
  name: "Rinku Kumari",
  sonName: "Anand",
};

const t = person.display.bind(member);
t();
