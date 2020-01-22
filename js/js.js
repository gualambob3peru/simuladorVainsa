$(function(){
    $(".flotante").click(function(){
        let valor = $(this).attr("punto");

        $(".filaImagenes").css("display","none");
        $(".imagenes" + valor).css("display","block");
    });

    $(".divProducto").click(function(){
        let numero = $(this).attr("numero"),
            grupo = $(this).attr("grupo");
        
            console.log(numero,grupo);
        $(".producto"+grupo).css("display","none");
        $("#producto"+numero).css("display","block");
    });
});