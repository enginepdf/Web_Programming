$(function(){ 
    $("li").not(function(index){
    return index%2===0;   // even
}).css("background-color", "rgba(100,100,100,0.5)");

var link = $("#link");
console.log(link.attr("href")); // /test
link.attr("href", "www.google.com");

var email = $("input[type=email]").val();
console.log(email);  // email here

console.log(link.prop("checked")); // undefined

$("p").on("click", function(){
 $(this).fadeOut(function(){
     $(this).attr('font-size', "20px").delay(2000).fadeIn();
 })
})

$("#list").click({info:"this works"}
    , function(event){
        display(event.data);
      });
      
      function display(item){
          let data=item.info || "this also works";

          alert(data);
      }

$("li li").addClass(function(index){
    $(this).addClass("list-"+index);
});


});