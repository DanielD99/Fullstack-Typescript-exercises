var Person = /** @class */ (function () {
    function Person(name, age, occupation) {
        this.name = name;
        this.age = age;
        this.occupation = occupation;
        this.private_salary = 0;
    }
    Person.prototype.introduce = function () {
        return "Hello, my name is ".concat(this.name, ". I'm ").concat(this.age, " years old and I'm a ").concat(this.occupation, " and i earn ").concat(this.private_salary * 13, "$ a year ;).");
    };
    Person.prototype.incrementAge = function () {
        this.age++;
    };
    Person.prototype.setSalary = function (salary) {
        this.private_salary = salary;
    };
    return Person;
}());
var person = new Person("Donald Trump", 97, "Certified golf enjoyer");
person.incrementAge();
person.setSalary(95000);
console.log(person.introduce());
console.log("- " + person.name);
console.log(person.occupation);
