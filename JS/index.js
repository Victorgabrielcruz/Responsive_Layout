function myFunction() {
  var x = document.getElementById("Demo");
  if (x.className.indexOf("w3-show") == -1) {
    x.className += " w3-show";
  } else {
    x.className = x.className.replace(" w3-show", "");
  }
}
window.addEventListener('load', function () {
  setTimeout(function () {
    document.querySelectorAll('.fade-in').forEach(function (item) {
      item.classList.add('fade-in');
    });
  }, 500);
});
window.addEventListener('load', function() {
  setTimeout(function() {
      document.querySelector('.widget').classList.remove('animate');
  }, 1000);
});