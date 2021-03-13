'use strict';

/* let user = {};

user.name = 'John';
user.surnema = 'Smith';
user.name = 'Pete';
delete user.name;

console.log(user.name); */

/* let schedule = {};

function isEmpty(obj) {
  for ( let key in obj) {
    return false;
  }
  return true;
}

alert( isEmpty(schedule) ); // true

schedule["8:30"] = "get up";

alert( isEmpty(schedule) ); // false */

/* let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
};

let sum = 0;

for (let key in salaries) {
  sum += salaries[key];
}

console.log(sum); */







/* function multiplyNumeric(obj) {
  for( let key in obj) {
    if (typeof obj[key] == 'number') {
      obj[key] *= 2;
    }  
  }
}


// до вызова функции
let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

multiplyNumeric(menu);
console.log(menu);
// после вызова функции
menu = {
  width: 400,
  height: 600,
  title: "My menu"
}; */

/* let user = {
	name: "Джон",
	go: function () {
		alert(this.name);
	}
}

(user.go)(); */


/* let calculator = {
	sum() {
		return this.a + this.b;
	},	
	
	mul() {
		return this.a * this.b;
	},
	
	
	read() {
		this.a = +prompt('a?', 0);
		this.b = +prompt('b?', 0);
	}
};

calculator.read();
console.log(calculator.read);
alert(calculator.sum());
alert(calculator.mul()); */



let ladder = {
	step: 0,
	up() {
	  this.step++;
	  return this;
	},
	down() {
	  this.step--;
	  return this;
	},
	showStep: function() { // показывает текущую ступеньку
	  alert( this.step );
	  return this;
	}
  };

ladder.up().down().showStep();