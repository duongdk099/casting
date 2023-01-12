const breeds = "https://catfact.ninja/breeds?limit=1";
const fact_api = "https://catfact.ninja/fact?max_length=140";
const facts = "https://catfact.ninja/facts?limit=1&max_length=140";

const breedss = "https://catfact.ninja/breeds?limit=98";

// const number_races = userAction(breeds,"breeds");
// console.log(number_races);
// userAction(fact_api,"fact");
// userAction(facts,"facts");

const num_facts = document.getElementById("num_facts");
const num_races = document.getElementById("num_races");
const fact = document.getElementById("fact");

// num_facts.then ((val) => {
//     console.log(val);
// })

fetch(breeds)
  .then((response) => response.json())
  .then((data) => {
    data = data.total;
    num_races.innerHTML = data;
  });

fetch(facts)
  .then((response) => response.json())
  .then((data) => {
    data = data.total;
    num_facts.innerHTML = data;
  });

fetch(breedss)
  .then((response) => response.json())
  .then((data) => {
    const toomany = data.data;
    console.log(toomany);
    const arrayToTest = new Array();
    toomany.forEach((element) => {
      arrayToTest.push(element.coat);
    });
    fact.innerHTML = theMostFrequent(arrayToTest);
  });

const theMostFrequent = (array) => {
  let mf = 1;
  let m = 0;
  let item;
  for (let i = 0; i < array.length; i++) {
    for (let j = i; j < array.length; j++) {
      if (array[i] == array[j]) m++;
      if (mf < m) {
        mf = m;
        item = array[i];
      }
    }
    m = 0;
  }
  return item;
};
