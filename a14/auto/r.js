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

  function redirectSelectLinkByWeight(links) {
    function selectLinkByWeight(_links) {
      const links = _links.filter(link => link.w && link.w > 0);
      const totalWeight = links.reduce((acc, link) => acc + link.w, 0);
      if (totalWeight === 0) {
        console.warn("No valid links available.");
        return null;
      }
      let random = Math.random() * totalWeight;
      for (const link of links) {
        random -= link.w;
        if (random < 0) {
          // 如果是 urls 数组，从中随机选一个，否则直接使用 url
          const urls = link.urls;
          if (urls && Array.isArray(urls) && urls.length > 0) {
            const randomIndex = Math.floor(Math.random() * urls.length);
            return urls[randomIndex];
          }
          return link.url || null;
        }
      }
      return null;
    }

    const redirectUrl = selectLinkByWeight(links);
    // 执行重定向
    // window.location.href = redirectUrl;
    if (redirectUrl) {
      window.open(redirectUrl, '_self', 'noopener,noreferrer');
    } else {
      console.error('No valid redirect URL found.');
    }
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
