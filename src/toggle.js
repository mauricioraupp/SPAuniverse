const homeButton = document.querySelector("#home");
const universeButton = document.querySelector("#universe");
const explorationButton = document.querySelector("#exploration");
const appDiv = document.querySelector("#app");
const body = document.querySelector("body");
checkClass()



homeButton.addEventListener('click', function() {
  checkClass()
});
universeButton.addEventListener('click', function() {
  checkClass()
});
explorationButton.addEventListener('click', function() {
  checkClass()
});

function checkClass() {
  if (window.location.pathname == "/") {
    appDiv.classList.add("app-home")
    appDiv.classList.remove("app-universe")
    appDiv.classList.remove("app-exploration")

    homeButton.classList.add("nav-pseudo")
    universeButton.classList.remove("nav-pseudo")
    explorationButton.classList.remove("nav-pseudo")

    body.style.backgroundImage = "url(pages/images/mountains-universe-1.png)"

  } else if (window.location.pathname == "/universe") {
    appDiv.classList.add("app-universe")
    appDiv.classList.remove("app-home")
    appDiv.classList.remove("app-exploration")

    universeButton.classList.add("nav-pseudo")
    explorationButton.classList.remove("nav-pseudo")
    homeButton.classList.remove("nav-pseudo")

    body.style.backgroundImage = "url(pages/images/mountains-universe02.png)";

  } else if (window.location.pathname == "/exploration") {
    appDiv.classList.add("app-exploration")
    appDiv.classList.remove("app-universe")
    appDiv.classList.remove("app-home")

    explorationButton.classList.add("nav-pseudo")
    universeButton.classList.remove("nav-pseudo")
    homeButton.classList.remove("nav-pseudo")

    body.style.backgroundImage = "url(pages/images/mountains-universe-3.png)";
  }
}