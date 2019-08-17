var JOKE_SERVICE = {
    get:  function(){
            return $.ajax({
                type: 'get',
                url: 'https://geek-jokes.sameerkumar.website/api'
            })
            .then (function(data){ 
               console.log(data);
            });
        }
}
var response2 = $.get("https://geek-jokes.sameerkumar.website/api", function(data) {
    alert("Data Loaded: " + data);
});
function GenJoke(){
    console.log(response2);
}