document.addEventListener('DOMContentLoaded', function() {

  function jsonForVisitorId(visitorId) {
    if (startsWithAny(visitorId, ['0', '1', '2', '3'])) {
      return 'rx0.json';
    } else if (startsWithAny(visitorId, ['4', '5', '6', '7'])) {
      return 'rx1.json';
    } else if (startsWithAny(visitorId, ['8', '9', 'a', 'b'])) {
      return 'rx2.json';
    } else {
      return 'rx3.json';
    }
  }

  function startsWithAny(str, prefixes) {
    return prefixes.some(prefix => str.startsWith(prefix));
  }  

  FingerprintJS.load().then(fp => {
    fp.get().then(result => {
      const visitorId = result.visitorId || "abcdef123456";
      const jsonFile = jsonForVisitorId(visitorId);
      if (jsonFile) {
        fetch(jsonFile).then(response => response.text()).then(text => {
          try {
            const links = JSON5.parse(text);  // 使用 JSON5 解析文本
            // console.log(links);
            redirectSelectLinkByWeight(links);
          } catch (error) {
            console.error('无法解析 JSON 文件:', error);
          }
        }).catch(error => {
          console.error('无法加载 JSON 文件:', error);
        });
      }
    });
  });

});
