(function(){

$(document).on("click", function(e){


if (e.toElement.className !== "user-drop"){
  var options = $(".user-options");

  options.removeClass("disp");
  setTimeout(function(){options.removeClass("active");}, 0);
}
});



})();
