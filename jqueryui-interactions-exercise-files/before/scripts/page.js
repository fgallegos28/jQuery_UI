/// <reference path="jquery-1.6.2.js" />
/// <reference path="jquery-ui-1.8.16.custom.js" />



$(function () {
    //$("#draggables").children().draggable();
    
    $("#d1").draggable({ 
        //axis: "x" //move to eje x
        revert: "invalid" //regresa a su lugar de incio
    }); 

    $("#d2").draggable({ 
        //axis: "y" //move to eje y
        snap: "#d1, #d3", //permite desplazarse alrededor de d1 y d3
        helper: function() {
            return $("<div>I am a helper</div>");
        }
    });

    $("#d3").draggable({ 
        //se puede desplazar por todas partes
        contaiment: "#draggables",
        handle: "header"
    }); 


    $("#d1, #d2, #d3").draggable(
        "option", "stack", ".ui-draggable"
    );

    //drop the header's
    $("#trash").droppable({
        activeClass: "opaque",
        accept: "#d3",
        drop: function (event, ui){
            ui.draggable.fadeOut(function (){
                ui.draggable.remove();
            });
        }
    });

    //List "sortable"
    //axis: para mover "li" en este caso sobre el eje "y"
    $("#sortable").sortable({ axis: "y", placeholder: "placeholder" });


    //resizable: permite redimensionar el ancho y alto
    $("#d3").resizable({ aspectRatio: true, alsoResize: "#d2" });
});

