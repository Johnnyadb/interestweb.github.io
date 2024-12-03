document.addEventListener('DOMContentLoaded', function() {
  const links = [
      // hil: Jacklove: sexylove
      {
        // jm
        url: "https://diligentcloset.com/b/3.Vv0/PI3mpLv-b/mpV/JCZfD/0R1oNwjjUP1/MSjWcg2HLoTSUZ2JN/TCUWylNaztcm",
        w: 4
      },
      {
        // sl
        url: "https://diligentcloset.com/b/3.Vj0tPv3xpNvebPmtVcJ/Z/DH0n1_N/j-EV1DMnTrkF4SLMT/UO2KMrTNUDx/OcTIkR",
        w: 3
      },

      // hil: db123: sexystory
      {
        // all
        urls: [
          "https://reasonable-source.com/bS3BVo0xP.3dpivWbwmUVzJxZRDg0D1BNlT/cpw/NGzvEv4LLBT_UD1ANSzjA/3YMoTlkP",
          "https://reasonable-source.com/ba3bV/0.PX3/pevYbzmAVAJoZvDf0e1_N/TocSwPNJTlcfyhLFTYUH1HNuzTAA1/NdzPMy",
        ],
        w: 2
      },

      // hil: Thomas
      {
        url: "https://superficial-sensitive.com/bX3IV.0UPE3_pxvFblmtVvJRZVDT0/1bOcD/Mr0WNzjDcAwtLIT/Uw4aMSz/QR2_NQzwEo",
        w: 0.2
      },
  ];

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
  // window.location.href = redirectUrl;
  if (redirectUrl) {
    window.open(redirectUrl, '_self', 'noopener,noreferrer');
  } else {
    console.error('No valid redirect URL found.');
  }
});
