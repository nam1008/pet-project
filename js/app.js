function checkLength(e, minLength) {
  var el, elMsg;
  el = e.target || e.srcElement;
  elMsg = document.getElementById("feedback");

  if (el.value.length < minLength) {
    elMsg.innerHTML = "Username must be " + minLength + " characters or more";
  } else {
    elMsg.innerHTML = "";
  }
}

var elUsername = document.getElementById("username");
if (elUsername.addEventListener) {
  // If event listener supported
  elUsername.addEventListener(
    "blur",
    function (e) {
      checkLength(e, 5);
    },
    false
  );
}
