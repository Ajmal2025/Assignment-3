

//q3
//Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.

let q3: string = "ErIc";
console.log(
  `Hello ${q3.toLowerCase()}, would you like to learn some Python today?`
);
console.log(
  `Hello ${q3.toUpperCase()}, would you like to learn some Python today?`
);

const titleCase = q3
  .split(" ")
  .map((word) => word[0].toUpperCase() + word.slice(1).toLowerCase())
  .join(" ");
console.log(`Hello ${titleCase}, would you like to learn some Python today?`);
