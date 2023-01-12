const reveal = () => {
  fetch(fact_api)
    .then((response) => response.json())
    .then((data) => {
        data=data.fact;
      document.getElementById("reveal").innerHTML = data;
    });
};

const fact_api = "https://catfact.ninja/fact?max_length=140";
