$(document).ready(function(){

  let next = $("#nextPicture");
  let prev = $("#prevPicture");
  let list = $(".slider > ul").children();
  let counter = 0;

  list[counter].classList.add("visible")

  next.click(goNext);
  prev.click(goPrev);

  function goNext() {

      console.log("goNext");
      list[counter].classList.remove("visible");
      if (counter < list.length-1) {
        counter++;
      }
      list[counter].classList.add("visible");
  };

  function goPrev() {
      console.log("goPrev");
      list[counter].classList.remove("visible");
      if (counter > 0) {
        counter--;
      }
      list[counter].classList.add("visible");
  };


}); /*doc.ready.func END*/
