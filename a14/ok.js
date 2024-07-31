function init() {
  var arr = [
    // // hil: Jacklove (bit)
    // "https://indolent-ability.com/bB3uV.0iPV3spPvtbVmHV/JQZ_DU0k1rMZzEgixBM/D/A_wFL/T/U_zgOvDKEawzMRDBEJ",
    // "https://indolent-ability.com/by3hV/0XP.3np/v-bRmrV/JQZ/DM0/1ZMuz/gAx/MCDKAR4qLQTRUdznOrD/EzwVMBDbkt",
    // "https://indolent-ability.com/bV3HVj0QP.3bpVvbbcmeVLJIZ/DF0M1-Maz-gwxbM/DYE/2kLfTGUvzEOrDkEJwOMaT_cg",

    // hil: db123 
    "https://classic-bonus.com/b.3LVa0ePZ3rp/v/bqmWVCJOZcDW0b1_MIzgcByyMkzmAVy_L/TvUzzVNBzoIoz/MyDAML",
    "https://classic-bonus.com/b.3VVj0NPQ3/pEv/bLmwVXJ/ZjDB0I1lM/zvcAyoM/zHEUw/LdTRUOz_NazAI/zyMRTZEv",
    
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