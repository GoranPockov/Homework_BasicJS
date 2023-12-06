/*ova znaci deka sme ja deklarirale carijablata(promenliva) */
let declarations; //declaration
declarations = "declarations";

console.log(declarations)
/*so let deklarirame */
/* vaka deklarirame */
let number;
/*vaka inicijalicirame */
number = 5;
/*da ispecatime vo console(so console.log() printame) */
console.log(number);

/*deklarizacija i inicijalizacija vo eden red */
let firstName/*firstname e promenlivata posle log deklariranje*/ = "Tom"; 
console.log(firstName); //print

console.log("======Number=======")
//Numbers, promenlivata e age=25;
let age = 25;
console.log("The Value of the variable age is:");
console.log(age);
console.log("type of age:");
//typeof kje pokaze od kakov tip e promenlivata i kje ispecati
console.log(typeof(age));
// console.log(typeof age);
//ako e so bela boja isprintano e string
//ako e liljavo e number
console.log("Age: " + age); //ova vaka go dava kako string
console.log("Age: ", age); //ovde age kje e string, posle zapirkata kje e number oboeno

console.log("====string=====")
//strings
let lastName = "Smith";
console.log("The value of the variable lastName is:");
console.log(lastName);
console.log("type of last name:");
console.log(typeof(lastName));

let numericString = "25";
console.log("The value of the variable lastName is:");
console.log(numericString);
console.log("Type of numericString:");
console.log(typeof(numericString));

let message = "hello from SEDC!";
console.log("the value of the variable message is:");
console.log(message);
console.log(typeof(message));

console.log("======Booleans=====");
//Booleans - dali e true ili false

let bool = true;
console.log("the value of the variable bool is:");
console.log(bool);
console.log("Type of bool:");
console.log(typeof(bool));

message="hello from Goran!";
console.log(message);

message=25;
console.log(typeof(message));

//parseInt parsiranje na numeric string
let parsedNumber = parseInt(numericString);
console.log("the value of the variable parsedNumber is:");
console.log(parsedNumber);
console.log("Type of parsedNumber:");
console.log(typeof(parsedNumber));

console.log("======Undefined=====")
//Undefined
let num; //deklarirana
console.log(num);
console.log("type of num:")
console.log(typeof(num));

console.log("=====NULL=====")
//NULL
let nullableLet = null;
console.log(nullableLet);
console.log("type of nullableLet:");
console.log(typeof(nullableLet));

console.log("====New Line====");
//new line
let newLine = "Hello from G5. \nThis goes is a new line ";
console.log(newLine);

