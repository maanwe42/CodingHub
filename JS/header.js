fetch("/header.html")
  .then(r => r.text())
  .then(d => {
    document.getElementById("header").innerHTML = d;
  });