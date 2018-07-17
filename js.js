window.onload = function(){
  var btn = document.getElementById("btn");
  btn.addEventListener("click", function (e) {
    console.log(e.pageY);
  });
}