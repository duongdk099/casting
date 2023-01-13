// const race1 = () => {
//   fetch(race_1)
//     .then((response) => response.json())
//     .then((data) => {
//       data = data.fact;
//       document.getElementById("reveal_race").innerHTML = data;
//     });
// };

// const race_1 = "https://catfact.ninja/fact?max_length=140";
// const race2 = () => {
//   fetch(race_2)
//     .then((response) => response.json())
//     .then((data) => {
//       data = data.fact;
//       document.getElementById("reveal_race").innerHTML = data;
//     });
// };

// const race_2 = "https://catfact.ninja/fact?max_length=140";

const race_1 = document.getElementById("race1");
const race_2 = document.getElementById("race2");

const fetchPromise = fetch("https://catfact.ninja/breeds?limit=2");
fetchPromise
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    data = data.data;
    race_1.addEventListener("click", () => {
      const racee1 = data[0];
      document.getElementById("reveal_race").innerHTML = "";
      for (const property in racee1) {
        document.getElementById(
          "reveal_race"
        ).innerHTML += `${property}: ${racee1[property]} <br>`;
      }
    });

    race_2.addEventListener("click", () => {
      //   document.getElementById("reveal_race").innerHTML = data[1];
      const racee2 = data[1];
      document.getElementById("reveal_race").innerHTML = "";
      for (const property in racee2) {
        document.getElementById(
          "reveal_race"
        ).innerHTML += `${property}: ${racee2[property]} <br>`;
      }
    });
  });
