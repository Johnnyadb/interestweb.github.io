function init() {
  var arr = [
    // hil: dabao
    "https://grim-package.com/bO3WV.0sPU3rp/vSbumMVaJkZVD/0U1/N/DDMG2sOOTWcm2zL-TSUR0mMhzbYS5oNYz/cJ",
    // "https://www.qrcreate.online",
    
    // hil: db123 
    "https://classic-bonus.com/bY3.VK0OPK3tpYv/bYmQVDJ-Z/DI0/1/MKzqcYy/MQzzATy/LMTSUGz/NNzTIrzDMXDgMm",
    
    // // hil: Jacklove (let)
    // "https://indolent-ability.com/bF3/Vw0oP.3lpZv/bYm/VgJPZzDI0Q1cNaD-cpzTO/TZYA4EL/TeUl0FNTz/MA5/NxjUkt",
    
    // mon: db
    // "https://nutchaungong.com/4/7420689",
    // "https://maipheeg.com/4/7474716",
    // "https://glocheexi.com/4/7237941",
    // "https://coawoaph.net/4/7237942",
    // "https://laichegloavy.com/4/7631332",
    
    // "https://vorsoutseemt.com/4/7436813",
    // "https://eedootefaug.net/4/7420698",
    // "https://futseerdoa.com/4/7237921",
    // "https://eeboazurg.net/4/7420696",
    "https://psauwaun.com/4/7614690",
    "https://ptougeegnep.net/4/7237907",
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