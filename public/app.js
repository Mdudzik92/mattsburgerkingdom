$(document).ready(function(){
    $(".burger").on("click", function(){
        var burgerId = $(this).data("id")
        console.log(burgerId);
    })
})