// https://stackoverflow.com/questions/3839966/can-anyone-explain-what-jsonp-is-in-layman-terms/3840118#3840118


// JSON
var xhr = new XMLHttpRequest();

xhr.onreadystatechange = function () {
  if (xhr.readyState == 4 && xhr.status == 200) {
    document.getElementById("output").innerHTML = eval('(' + this.responseText + ')').bar;
  };
};

xhr.open("GET", "somewhere.php", true);
xhr.send();

// JSONP

function foo(response) {
    document.getElementById("output").innerHTML = response.bar;
  };
  
  var tag = document.createElement("script");
  tag.src = 'somewhere_else.php?callback=foo';
  
  document.getElementsByTagName("head")[0].appendChild(tag);



//   $.ajax({
//     url: 'http://example.com/datasource',
//     dataType: 'jsonp',
//     success: function(data) {
//       // your code to handle data here
//     }
//   });