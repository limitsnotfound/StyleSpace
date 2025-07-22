
fetch("nav.html")
    .then(Response => Response.text())
    .then(data => document.getElementById("nav-container").innerHTML = data);

fetch("footer.html")
    .then(Response => Response.text())
    .then(data => document.getElementById("footer-container").innerHTML = data);
