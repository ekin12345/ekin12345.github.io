document.addEventListener('DOMContentLoaded', function(){
  function load(id, url){
    var el = document.getElementById(id);
    if(!el) return;
    fetch(url).then(function(r){ return r.text(); }).then(function(html){ el.innerHTML = html; }).catch(function(e){ console.error('Failed to load', url, e); });
  }
  load('site-header','/header.html');
  load('site-footer','/footer.html');
});