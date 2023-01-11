const breeds = "https://catfact.ninja/breeds?limit=1";
const fact_api = "https://catfact.ninja/fact?max_length=140";
const facts = "https://catfact.ninja/facts?limit=1&max_length=140";

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
    console.log(data);
    data = data.total;
    num_races.innerHTML = data;
  });

fetch(fact_api)
  .then((response) => response.json())
  .then((data) => {
    console.log(data.fact);
    data = data.total;
    fact.innerHTML = data;
  });

fetch(facts)
  .then((response) => response.json())
  .then((data) => {
    data = data.total;
    num_facts.innerHTML = data;
  });
