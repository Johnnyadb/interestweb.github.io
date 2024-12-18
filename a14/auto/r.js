document.addEventListener('DOMContentLoaded', function() {

  function jsForVisitorId(visitorId) {
    if (startsWithAny(visitorId, ['1', '2', '3', '4'])) {
      return 'rx0.js';
    } else if (startsWithAny(visitorId, ['5', '6', '7', '8'])) {
      return 'rx1.js';
    } else if (startsWithAny(visitorId, ['9', 'a', 'b', 'c'])) {
      return 'rx2.js';
    } else {
      return 'rx3.js';
    }
  }

  function startsWithAny(str, prefixes) {
    return prefixes.some(prefix => str.startsWith(prefix));
  }  

  FingerprintJS.load().then(fp => {
    fp.get().then(result => {
      const visitorId = result.visitorId || "abcdef123456"; 
      // console.log(visitorId);
      const jsFile = jsForVisitorId(visitorId);
      if (jsFile) {
        const script = document.createElement('script');
        script.src = jsFile;
        document.body.appendChild(script);
      }
    });
  });

  window.redirectSelectLinkByWeight = function(links) {
    
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
});
