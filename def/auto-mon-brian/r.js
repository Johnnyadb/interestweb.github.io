onPageVisibilityChange(async function() {
  const links = [
    // mon: Brian
    {
      urls: [
        "https://luglawhaulsano.net/4/8628644",
        "https://luglawhaulsano.net/4/8628640",
        // "https://luglawhaulsano.net/4/8628645",
        // "https://luglawhaulsano.net/4/8628429",
        "https://luglawhaulsano.net/4/8628428",
      ],
      w: 10.0
    },
    {
      urls: [
        // hil: db (ss)
        "https://grim-package.com/bt3zVl0.P/3mpevrbHmdV/JRZaDn0F1/NHDzUd2SMITEAR2oLvToU/0zNhTpY_xgMEDpcz"
      ],
      w: 1.0
    }    
  ];
  redirectSelectLinkByWeight(links);
});