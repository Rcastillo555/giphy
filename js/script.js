// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************
/* global $ */

$("#search-button").click(function(){
    
    var searchTerm = $("#search-term").val();
        
    $.ajax({
        url: "https://api.giphy.com/v1/gifs/search?q="+searchTerm+"&rating=pg&api_key=dc6zaTOxFJmzC" , 
        method : "GET" , 
        success : function ( response ) { 
            var newdata= Math.floor(Math.random() *response.data.length );
            var item= response.data[newdata];
            $('.gallery').html(`<img src="${item.images['original'].url}"/>`);
            $("#raw").html(response);
        }

    });

});