const startedBtn = document.getElementById("started-btn");
const requestBtn = document.getElementById("request-btn");

const startedForm = document.getElementById("started-form");
const callbackForm = document.getElementById("callback-form");

const getStarted = () => {
  startedForm.style.display = "block";
  callbackForm.style.display = "none";
};

const requestCallback = () => {
  callbackForm.style.display = "block";
  startedForm.style.display = "none";
};
