function tabOpen(num) {
 var a = document.getElementById("docTitle");
 var b = document.getElementById("docDesc");
  if (num == 1) {
  a.innerHTML = "FlixSearch API (Free To Download)";
  b.innerHTML = "Search if movies/series on netflix aits in your country, view reviews and search the netflix catalogue.<br> This free to download API can be intergrated with your project to expand its feature list. <br> <a>Fork FlixSearch from this github repo.</a>";
  } else if (num == 2) {
  a.innerHTML = "NylDocs API (Free To Download)";
  b.innerHTML = "Search through the Nylon Documentation from afar wether within your own project or your own Nylon related docs. <br> <a>Fork NylDocs from this github repo.";
  } else if (num == 3) {
  a.innerHTML = "ImageSplit API";
  b.innerHTML = "Soon"; 
  }
}