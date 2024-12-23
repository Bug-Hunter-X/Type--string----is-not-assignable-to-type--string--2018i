function greeter(person: string): string {
  return "Hello, " + person;
}

let user = ["Jane", "Doe"];
// Solution 1: Array destructuring
let [firstName] = user;
console.log(greeter(firstName)); //Output: Hello, Jane 

//Solution 2: Accessing the specific element
console.log(greeter(user[0])); // Output: Hello, Jane