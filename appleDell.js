let btn = document.getElementById("ajax-json-btn");



if(btn)
  btn.addEventListener("click", loadText);
  //if the console is saying that the element is null 
  //use an if statement to only allow the thing to load if it is there

function loadText() {
  var xhr = new XMLHttpRequest();
  //OPEN - type, url/file, async
  xhr.open("GET", "hp.txt", true);

  xhr.onload = function() {
    if (this.status == 200) {
      console.log(this.responseText);
      document.getElementById("json").innerHTML = this.responseText;
    }
  };
  xhr.send(); //sends request
}
const rankingsBody = document.querySelector("#rankings-table > tbody");
//Making the table fill with json file array
function loadRankings() {
  const request = new XMLHttpRequest();

  request.open("GET", "laptopTable.json");
  request.onload = () => {
    try {
      const json = JSON.parse(request.responseText);
      populateRankings(json);
    } catch (e) {
      console.warn("Could not");
    }
  };
  request.send();

  function populateRankings(json) {
    while (rankingsBody.firstChild) {
      rankingsBody.removeChild(rankingsBody.firstChild);
    }
    json.forEach(row => {
      const tr = document.createElement("tr");

      row.forEach(cell => {
        const td = document.createElement("td");
        td.textContent = cell;
        tr.appendChild(td);
      });

      rankingsBody.appendChild(tr);
    });
  }
}
document.addEventListener("DOMContentLoaded", () => {
  loadRankings();
});

//initial setup
document.addEventListener("DOMContentLoaded", function() {
  let stars = document.querySelectorAll(".star");
  stars.forEach(function(star) {
    star.addEventListener("click", setRating);
  });

  console.log(document.querySelector(".stars").dataset.rating);

  let rating = parseInt(
    document.querySelector(".stars").getAttribute("data-rating")
  );
  let target = stars[rating - 1];
  target.dispatchEvent(new MouseEvent("click"));
});
function setRating(ev) {
  let span = ev.currentTarget;
  let stars = document.querySelectorAll(".star");
  let match = false;
  let num = 0;
  stars.forEach(function(star, index) {
    if (match) {
      star.classList.remove("rated");
    } else {
      star.classList.add("rated");
    }
    //are we currently looking at the span that was clicked
    if (star === span) {
      match = true;
      num = index + 1;
    }
  });
  document.querySelector(".stars").setAttribute("data-rating", num);
}

