const personOne = {
  name: "Popeye",
  age: 34,
  favouriteFood: "Spinach",
};

const {name,age,favouriteFood} = personOne;

function introduceYourself(m) {
  console.log(
    `Hello, my name is ${name}. I am ${age} years old and my favourite food is ${favouriteFood}.`
  );
}

introduceYourself(personOne);
