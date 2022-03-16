// function buttonHandler() {
//   // First create an XMLHttprequest object
//   const xhr = new XMLHttpRequest();
//   xhr.open("GET", "./test.json", true);
//   xhr.getResponseHeader("Content-type", "application/json");

//   xhr.onload = function () {
//     const obj = JSON.parse(this.responseText);
//     console.log(obj);
//   };

//   xhr.send();
// }

// buttonHandler();

function loadData() {
  let url = "../js/test.json";
  fetch(url)
    .then((res) => res.json())
    .then((data) => console.log(data));
}

loadData();
