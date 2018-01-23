$(function () {
    var control = false;
    
    function establece_evento_dbclick_items(objeto) {
        $('.item').on('click', function carro(event) {
            var stock = $(this).find(".stock").text().split(' ')[1];
            var compras = $
            if (stock > 0) {

                //STOCK 
                stock--;
                compras++;

                //$(this).find(".stock").text("Stock " + stock);
                //PRECIO A PAGAR
                var precio = $(this).find(".price").text().split(' ')[0];
                var pago = $("#cprice").val().split(' ')[0];
                var totalPago = parseInt(precio) + parseInt(pago);
                $("#cprice").val(totalPago + " €");
                var numeroCompras = $('#citem').val();
                numeroCompras = parseInt(numeroCompras) + 1;
                $('#citem').val(numeroCompras);
                //CLONACION
                $(this).clone().attr("id", "c" + this.id).prependTo('#cart_items');;
                $('#c' + this.id + " .stock").hide();
                //ENLACE ELIMINAR
                var $delete = $('<a href="" class="delete"></a>');
                $delete.prependTo('#c' + this.id);

                $delete.on('click', function () {


                    $(this).parent().remove();
                    padre = $(this).parent().attr('id').substring(1);
                    if (control == true) {
                        establece_evento_dbclick_items('#' + padre);
                        control = false;
                    }
                    //CONTROL DE STOCK
                    stock++;

                    $('#' + padre).find(".stock").text("Stock " + stock);
                    $('#' + padre).find(".stock").removeClass('agotado');


                    precio = $('#' + padre).find(".price").text().split(' ')[0];
                    pago = $("#cprice").val().split(' ')[0];
                    totalPago = parseInt(pago) - parseInt(precio);
                    $("#cprice").val(totalPago + " €");
                    numeroCompras = $('#citem').val();
                    numeroCompras = parseInt(numeroCompras) - 1;
                    $('#citem').val(numeroCompras);


                    $('#btn_clear').on('click', function () {
                        $('div .item a.delete').trigger('click');
                        
                    });
                    return false;

                });



                $(this).find(".stock").text("Stock " + stock);
                if (stock == 0) {
                    stockAgotado(this);
                }

            }


        })


    }
    function stockAgotado(event) {

        agotado = "agotado";
        $(event).find(".stock").addClass("agotado");
        $(event).find(".stock").text("Stock " + agotado);
        $(event).off('click');
        control = true;

    }

    //Boton vaciar

    //Metodos -
    function establece_movimiento() {
        $('#btn_prev').on('click', function () {
            $("#cart_items").animate({
                left: '+=50'
            })
            
        })

        $('#btn_next').on('click', function () {
            $("#cart_items").animate({
                left: '-=50'
            })      
        })
    }

    //Lanzamiento de metodos
    establece_movimiento();
    //Metodo main
    establece_evento_dbclick_items();

})
