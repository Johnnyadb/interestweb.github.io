function init() {
  var arr = [
    // // hil: Jacklove (bit)
    // "https://indolent-ability.com/bB3uV.0iPV3spPvtbVmHV/JQZ_DU0k1rMZzEgixBM/D/A_wFL/T/U_zgOvDKEawzMRDBEJ",
    // "https://indolent-ability.com/by3hV/0XP.3np/v-bRmrV/JQZ/DM0/1ZMuz/gAx/MCDKAR4qLQTRUdznOrD/EzwVMBDbkt",
    // "https://indolent-ability.com/bV3HVj0QP.3bpVvbbcmeVLJIZ/DF0M1-Maz-gwxbM/DYE/2kLfTGUvzEOrDkEJwOMaT_cg",
    
    // hil: Michael(yoo) 
    "https://ruddy-boyfriend.com/bi3.VH0XPB3Spiv/bBm/VzJvZDDO0w1QN/DCQI5LOXD/Yx2cLXTIUD0ZNnDvk/4lNhjdcM",    
    // hil: Michael(yy) 
    "https://ruddy-boyfriend.com/b/3-Ve0.PI3WpTvtbpmEVNJ/ZADS0E1UNlD/cyw/OgDrYK0_LbTcUS0iNwzlAU4/N/jjUf",

    // mon: lucy
    "https://phuruxoods.com/4/7683326",
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