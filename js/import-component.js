fetch("../components/header/header.html")
  .then((response) => {
    return response.text();
  })
  .then((data) => {
    document.querySelector("header").innerHTML = data;
    const url = location.href;
    let menuItem = null;
    if (url.includes("service")) {
      menuItem = document.getElementById("services");
    }

    if (url.includes("home")) {
      menuItem = document.getElementById("home");
    }

    if (url.includes("about")) {
      menuItem = document.getElementById("about");
    }

    if (url.includes("contacts")) {
      menuItem = document.getElementById("contacts");
    }
    menuItem.style.fontWeight = 700;
    menuItem.style.textDecoration = "underline";
    menuItem.style.fontFamily = "Satoshi-Bold";
  });

fetch("../components/footer/footer.html")
  .then((response) => {
    return response.text();
  })
  .then((data) => {
    document.querySelector("footer").innerHTML = data;
  });
