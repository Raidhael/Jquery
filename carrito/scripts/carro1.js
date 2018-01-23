$(function () {
    var control = false;
    $('#navigate').hide();
    function establece_evento_dbclick_items(objeto) {
        //Ocultar barra de navegacion
        
        $('.item').on('click', function carro(event) {
            $('#navigate').show();
            var stock = $(this).find(".stock").text().split(' ')[1];
            var compras = $
            if (stock > 0) {

                //STOCK 
                stock--;
                compras++;

                
                //Precio a pagar
                var precio = $(this).find(".price").text().split(' ')[0];
                var pago = $("#cprice").val().split(' ')[0];
                var totalPago = parseInt(precio) + parseInt(pago);
                $("#cprice").val(totalPago + " €");
                //Aumentar el numero de compras
                var numeroCompras = $('#citem').val();
                numeroCompras = parseInt(numeroCompras) + 1;
                $('#citem').val(numeroCompras);
                muestraMovimiento(numeroCompras);
                //Ajustar el tamaño
                ajustaTamanyo(numeroCompras);
                //Aqui acaba precio a pagar
                //CLONACION
                $(this).clone().attr("id", "c" + this.id).prependTo('#cart_items');
                $('#c' + this.id + " .stock").hide();
                //Aqui acaba la clonacion
                
                //Enlace de eliminacion
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

                //Aqui acaba la funcion de enlace de borrado



                $(this).find(".stock").text("Stock " + stock);
                if (stock == 0) {
                    stockAgotado(this);
                }

            }


        })


    }
    //Metodo que se ejecuta cuando se acaba el stock
    function stockAgotado(event) {

        agotado = "agotado";
        $(event).find(".stock").addClass("agotado");
        $(event).find(".stock").text("Stock " + agotado);
        $(event).off('click');
        control = true;

    }

    //Boton vaciar

    //Metodos -
    //Se ajusta el tamaño del div para que se pueda navegar a traves de ellos
    function ajustaTamanyo(num){
        var size  = num * 120;
       $('#cart_items').width(size);
    }
    //Se oculta las opciones de movimiento en menos de 4 elementos
    function muestraMovimiento(num){
        if (num <= 4) {
            $('#btn_prev,#btn_next').hide();
        }else{
            $('#btn_prev,#btn_next').show();
        }
    }
    //Se añade la funcionalidad de navegar a traves de los items a comprar
    function establece_movimiento() {
        $('#btn_prev').on('click', function () {
            var posicion = $('#cart_items').offset().left;
            
            if (posicion < 363){
                $("#cart_items").animate({
                    left: '+=120' 
                })
        }
            
        })

        $('#btn_next').on('click', function () {
                $("#cart_items").animate({
                    left: '-=120'    
                })
        })
    }

    //Lanzamiento de metodos
    establece_movimiento();
    //Metodo main
    establece_evento_dbclick_items();

})
