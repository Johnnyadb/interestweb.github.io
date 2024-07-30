function init() {
  var arr = [
    // hil: Michael(yoo)
    "https://ruddy-boyfriend.com/b/3PVY0ZP.3zplvubSmBV/JiZSDX0U1ZNbD-QM5-OrD-YY2NLNTFUo0fN/DHkq4rN/j/cm", 

    // mon: lucy
    "https://json.qrcreate.online",
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