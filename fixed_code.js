const numbers = [1, 2, 3, 4, 5];

const result = numbers.reduce((acc, num) => {
  if (num % 2 === 0) {
    acc.evens.push(num);
  } else {
    acc.odds.push(num);
  }
  return acc;
}, { evens: [], odds: [] });

console.log(result);
//outout:  { evens: [2, 4], odds: [1, 3, 5] }
// reason:- the code iterate over array and seprate even and odd in different list
