// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************
/* global $ */

$("#search-button").click(function(){
 var here=    $("input").val(); 
    $("#q4").click(function() { 
$.ajax({
    url: "https://api.giphy.com/v1/gifs/search?q="+here+"&rating=pg&api_key=dc6zaTOxFJmzC" , 
    method : "GET" , 
    success : function ( response ) { 
        
 
    

console.log(dog);
}

});
  
  
  
});

