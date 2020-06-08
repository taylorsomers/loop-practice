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

let array = [["h1", "header"], ["p", "paragraph"], ["img", "image"]];
  array.forEach(function(element, display) {
  $(element).click(function() {
    
    if (element === "h1" || "P") {
    alert("This is a " + display);
    } else {
    alert("This is an " + display);
    }
  });
});