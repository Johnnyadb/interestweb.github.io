function init() {
  var arr = [
    // hil: Jacklove (bit)
    "https://indolent-ability.com/b.3cVN0fPa3_pWvwbamCVRJeZFDQ0o1YMozXguxBMBDIAzwTLDTyUizpONDWEgwLMBDSEq",
    "https://indolent-ability.com/bh3.Vy0aP/3fpPvYbCm/VdJ/ZPDS0c1kMIzVgwx/MwDYAh4/LvT-U-z/O/DfEIweMCDwkv",
    "https://indolent-ability.com/bb3-Vy0.PE3IpavEb/m/VBJ/ZsDR0A1XM/zUglx/MjDdEl2eL/T-Uez/OZDOEzweM/TEcy",
    // hil: Jacklove (ni)
    "https://indolent-ability.com/b.3bV-0-Pa3JpBvib-mrV/JwZTDV0/1QNvD/cywwNjj/cg2/LaT/Uz0/NdzYAE2/NtzDcQ",

    // mon: db
    "https://teksishe.net/4/7420698",
    "https://vaikijie.net/4/7237921",
    // "https://aigheebsu.net/4/7420696",
    "https://groulrob.com/4/7237907",
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