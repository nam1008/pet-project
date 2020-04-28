function checkLength(e, minLength) {
  var el, elMsg;
  //   elMsg = document.getElementById("feedback");
  el = e.target;
  elMsg = el.nextElementSibling;
  if (el.value.length < minLength) {
    elMsg.textContent = "Error";
  } else {
    elMsg.textContent = "";
  }
}

var elUsername = document.getElementById("username");
if (elUsername.addEventListener) {
  // If event listener supported
  elUsername.addEventListener(
    "blur",
    function (event) {
      checkLength(event, 5);
    },
    false
  );
}
var elBtn = document.getElementById("btn");
elBtn.addEventListener(
  "click",
  function (e) {
    e.preventDefault();
  },
  false
);
