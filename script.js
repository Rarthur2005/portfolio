function slideIn(){
  if(window.innerWidth > 1300){
    var rows = document.getElementsByClassName("row");
    for(var i = 0; i < rows.length; i++){
      rows[i].style.transform = "rotate(15deg) translateX(0)";
    }
  }
}
var extended = false;
function extendNav(){
  var items = document.getElementsByClassName("rightlink");
  for(var i = 0; i < items.length; i++){
    if(extended){
      items[i].style.display ="none";
    }else{
      items[i].style.display = "block";
    }
  }
  extended = !extended;
}