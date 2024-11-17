document.addEventListener('DOMContentLoaded', function() {
  const links = [
      // hil: Jacklove: sexylove
      {
        // jm
        url: "https://diligentcloset.com/b/3.Vv0/PI3mpLv-b/mpV/JCZfD/0R1oNwjjUP1/MSjWcg2HLoTSUZ2JN/TCUWylNaztcm",
        w: 3
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
    const totalWeight = links.reduce((acc, link) => acc + link.w, 0);
    let random = Math.random() * totalWeight;
    for (const link of links) {
        random -= link.w;
        if (random < 0) {
            return link.url;
        }
    }
  }
  const redirectUrl = selectLinkByWeight(links);
  window.location.href = redirectUrl;
});
