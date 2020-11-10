class Employee {
  constructor(name, title, salary) {
    this.name = name;
    this.title = title;
    this.salary = salary;
    this.boss = null;
    this.subordinates = [];
  }
  addSubordinate(subordinate) {
    this.subordinates.push(subordinate);
    subordinate.boss = this;
  }

  get numberOfSubordinates() {
    return this.subordinates.length;
  }

  get numberOfPeopleToCEO() {
    let numberOfPeople = 0;
    let currentEmployee = this;

    // climb "up" the tree (using iteration), counting nodes, until no boss is found
    while (currentEmployee.boss) {
      currentEmployee = currentEmployee.boss;
      numberOfPeople++;
    }

    return numberOfPeople;
  }

  hasSameBoss(employee) {
    return this.boss === employee.boss;
  }

  depthFirstTraversal() {
    console.log(this.name); //change to 'this.name' instead for easy view in terminal
    for (const sub of this.subordinates) {
      sub.depthFirstTraversal();
    }
  }

}

const ada = new Employee("Ada", "CEO", 3000000.00);

const craig    = new Employee("Craig", "VP Software", 1000000);
const arvinder = new Employee("Arvinder", "Chief Design Officer", 1000000);
const angela   = new Employee("Angela", "VP Retail", 1000000);
const phil     = new Employee("Phil", "VP Marketing", 1000000);

const simone   = new Employee("Simone", 200000);
const ali      = new Employee("Ali", 100000);
const florida  = new Employee("Florida", 150000);
const david    = new Employee("David", 200000);
const brian    = new Employee("Brian", 100000);
const karla    = new Employee("Karla", 120000);

const sarah = new Employee("Sarah", 95000);
const andrew = new Employee("Andrew", 90000);
const emma = new Employee("Emma", 60000);
const jeremy = new Employee("Jeremy", 60000);
const chandler = new Employee("Chandler", 100000);

// ceo Ada's subs
ada.addSubordinate(craig);
ada.addSubordinate(arvinder);
ada.addSubordinate(angela);
ada.addSubordinate(phil);

//mgmt's subs
craig.addSubordinate(simone);
craig.addSubordinate(ali);
phil.addSubordinate(florida);
phil.addSubordinate(david);
phil.addSubordinate(brian);
angela.addSubordinate(karla);

ali.addSubordinate(sarah)
ali.addSubordinate(andrew)
david.addSubordinate(emma)
david.addSubordinate(jeremy)
karla.addSubordinate(chandler)
// employee's boss
// employee.boss

console.log(craig.boss);
console.log(`Craig's boss is ${craig.boss}`);
console.log(`Craig has ${craig.numberOfSubordinates} subs`);
console.log(`Craig has ${craig.numberOfPeopleToCEO} people between him and the throne`);

ada.depthFirstTraversal();