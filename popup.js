var myDiv = document.getElementById("companion_cover");  
var button = document.createElement('BUTTON');
button.style.backgroundColor = "#FC655F"
button.style.borderRadius = "69px";
button.style.border = 'none';
button.style.width = '100%';
button.style.display = 'inline-flex';
button.style.alignItems = 'center';
button.style.justifyContent = 'center';
button.style.fontSize = '13px';
button.style.letterSpacing = 0;
button.style.fontFamily = 'SFProDisplay-Bold';
button.style.minHeight = '38px';
button.style.transition = 'all 0.2s linear';
button.style.marginTop = '5px';
button.style.color = 'white';

button.onclick = function(){
  var link = document.getElementById("download_lossless");
    window.location.assign(link);
};
var text = document.createTextNode("Download FLAC"); 
button.appendChild(text); 
myDiv.appendChild(button);

$(document).ready(function() {
  $("download_this_flac").click(function(){
      alert("button");
  }); 
});