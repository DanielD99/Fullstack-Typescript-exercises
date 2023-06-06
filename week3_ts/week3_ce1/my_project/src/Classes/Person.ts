class Person {
    public name: string;
    private age: number;
    public occupation: string;
    private private_salary: number;

  
    constructor(name: string, age: number, occupation: string) {
      this.name = name;
      this.age = age;
      this.occupation = occupation;
      this.private_salary = 0;
    }
    public introduce(): string {
        return `Hello, my name is ${this.name}. I'm ${this.age} years old and I'm a ${this.occupation} and i earn ${this.private_salary*13}$ a year ;).`;
        }
        public incrementAge(): void {
            this.age++;
        }
        public setSalary(salary: number): void {
            this.private_salary = salary;
        }

  }

const person = new Person("Donald Trump", 97, "Certified golf enjoyer");//Hello, my name is Donald Trump. I'm 98 years old and I'm a Certified golf enjoyer and i earn 1235000$ a year ;)
person.incrementAge(); //mr donald is now 98 years old
person.setSalary(95000);
console.log(person.introduce());
console.log("- " + person.name);
console.log(person.occupation); // some sort of random signature
