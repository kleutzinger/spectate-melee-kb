(function () {
  const cdn_script_url = 'https://cdn.jsdelivr.net/npm/kevbadge/kevbadge.js';
  let kevbadge = document.createElement('script');
  kevbadge.type = 'text/javascript';
  kevbadge.async = true;
  kevbadge.src = cdn_script_url;
  let s = document.getElementsByTagName('script')[0];
  s.parentNode.insertBefore(kevbadge, s);
})();
