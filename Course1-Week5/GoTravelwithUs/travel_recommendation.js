const searchText = document.querySelector(".search-input");
const searchButton = document.querySelector("#search-button");
const clearButton = document.querySelector(".clear-button");

function performSearch() {
  let searchValue = searchText.value.split(",");
  let resultsDiv = document.querySelector("#results");
  const apiURL = "./travel_recommendation_api.json";

  // Clear previous results and show resultsDiv
  resultsDiv.innerHTML = "";
  resultsDiv.classList.remove("hidden");

  fetch(apiURL)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      let keywordArray = [];
      let isValidKeyword = false;

      searchValue.forEach((value) => {
        value = value.trim().toLowerCase();

        switch (value) {
          case "beach":
            value = "beaches";
            break;
          case "country":
            value = "countries";
            break;
          case "temple":
            value = "temples";
            break;
        }

        if (data.hasOwnProperty(value)) {
          isValidKeyword = true;
          if (value === "countries") {
            data[value].forEach((country) => {
              keywordArray.push(...country.cities);
            });
          } else {
            keywordArray.push(...data[value]);
          }
        }
      });

      if (!isValidKeyword) {
        console.warn("No valid keywords found in search input.");
        resultsDiv.innerHTML =
          "<p-1>No results found for the given keywords. Try Country, Beach, or Temple</p-1>";
        return;
      }

      keywordArray.forEach((keyword) => {
        let card = document.createElement("div");
        card.className = "results-card";

        let img = document.createElement("img");
        img.src = keyword.imageUrl;
        img.alt = keyword.name;
        img.className = "results-card-image";
        card.appendChild(img);

        let cardBody = document.createElement("div");
        cardBody.className = "results-card-body";

        let title = document.createElement("h3");
        title.className = "results-card-title";
        title.textContent = keyword.name;
        cardBody.appendChild(title);

        let description = document.createElement("p");
        description.className = "results-card-description";
        description.textContent = keyword.description;
        cardBody.appendChild(description);

        card.appendChild(cardBody);
        resultsDiv.appendChild(card);
      });
    })
    .catch((error) => {
      console.error("Fetch error:", error);
      resultsDiv.innerHTML =
        "<p>There was an error fetching the data. Please try again later.</p>";
    });
}

searchButton.addEventListener("click", performSearch);

searchText.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    performSearch();
  }
});

clearButton.addEventListener("click", function () {
  searchText.value = "";
  const resultsDiv = document.querySelector("#results");
  resultsDiv.innerHTML = ""; // Clear the results
  resultsDiv.classList.add("hidden"); // Hide the results div
});
