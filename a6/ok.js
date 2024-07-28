function init() {
  var arr = [
    // mon: Lucy
    "https://ouphaips.net/4/7683320",
    "https://udelsoam.com/4/7683326",
    "https://zumtultaxikr.com/4/7683316",
    "https://doruffleton.com/4/7683324",
    "https://futseerdoa.com/4/7683319",
    
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
    }, 15000);

    var randomIndex = Math.floor(Math.random() * arr.length);
    var randomLink = arr[randomIndex];
    window.location.href = randomLink;
  });
}

setTimeout(() => {
  init();
}, 1000);