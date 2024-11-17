document.addEventListener('DOMContentLoaded', function() {
  const links = [
      "https://baidu.com",
      "https://google.com",
      "https://360.com",
  ];

  const index = new Date().getSeconds() % links.length;
  const redirectUrl = links[index];

  window.location.href = redirectUrl;
});
