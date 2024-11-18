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
        w: 2
      },
      // hil: Jacklove: je
      {
        url: "https://diligentcloset.com/b.3QVo0/Pd3OpgvMbcmyVcJWZADx0m1VNejQcw3sOdTrER0sLHTmUt2kN_z/cN5hMIT_UK",
        w: 1
      }
  ];

  function selectLinkByWeight(links) {
    const totalWeight = links.reduce((acc, link) => acc + (link.w || 0), 0);
    if (totalWeight === 0) {
        return null;
    }

    let random = Math.random() * totalWeight;
    for (const link of links) {
      if (!link.w) continue; // 跳过没有权重的链接

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
  window.location.href = redirectUrl;
});
