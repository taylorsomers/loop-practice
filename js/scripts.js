// $(document).ready(function() {
//   $("h1").click(function() {
//     alert("This is a header.");
//   });

//   $("p").click(function() {
//     alert("This is a paragraph.");
//   });

//   $("img").click(function {
//     alert("This is an image.");
//   });
// });

$(document).ready(function() {
  const array = [("h1","a header"),("p","a paragraph"),("img","an image")];
    array.forEach(function(element) {
    let element = [];
    $(element[0]).click(function() {
      alert("This is " + element[1]);
    });
  });
});