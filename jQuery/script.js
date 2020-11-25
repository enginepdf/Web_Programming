$(function(){ 
    $("li").not(function(index){
    return index%2===0;   // even
}).css("background-color", "rgba(100,100,100,0.5)");

});