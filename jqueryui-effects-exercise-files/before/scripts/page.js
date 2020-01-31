/// <reference path="jquery-1.6.2.js" />
/// <reference path="jquery-ui-1.8.16.custom.js" />


//add Colors
$(function () {
    $("#target").click(function(){
        $(this).animate({
            "width": "+=20",
            "height": "+=20",
            "background-color": "red"
        });
    });
});

//add Effects - visit page for more effects https://jqueryui.com/effect/
$(function () {
   /* $("#target").click(function(){
        $(this).effect("explode",
                {pieces: 16}, "slow", function () {
                    alert("done!");
                });
    });*/

    $("#draggables").children().draggable();

    $("#trash").droppable({
        activeClass: "opaque",
        drop: function (event, ui) {
            ui.draggable.hide("explode");
        }
    });
});    
    /*
    //Easing
    $(function () {
        $("#target")
            .css("position", "relative")
            .click(function() {
               $(this).animate({
                   left: 300
               }, 1000, "easeInOutElastic"); 
            });

});*/

    //Easing
    $(function () {
        $("#target")
            .css("position", "relative")
            .click(function () {
                $(this).addClass("leftTarget");
            });

    });