'use strict';

app.funcionalidad02 = kendo.observable({
    onShow: function () {},
    afterShow: function () {},
});

function getOrden(year, order) {
    var cliente = $("#id_usuario").val();
    if(cliente>0){
        
    }else{
        alert("Ingrese id de usuario");
        return;
    }
    var dsOrden = new kendo.data.DataSource({
        transport: {
            read: {
                //url: "http://54.213.238.161/WsPrueba/Ordenes/valor?fecha=" + year + "&id=" + order + "&cliente=" + cliente,
                url: "http://www.ausa.com.pe/appmovil_test01/Ordenes/valor?fecha=" + year + "&id=" + order + "&cliente=" + cliente,
                dataType: "json"
            }
        },
        schema: {
            data: function (data) {
                return data;
            }
        }
    });

    dsOrden.fetch(function () {
        if (dsOrden.total() > 0) { //Si existe la órden
            var data = dsOrden.data();
            var orden = data[0];
            var dsDetOrden = new kendo.data.DataSource({
                transport: {
                    read: {
                        //url: "http://54.213.238.161/WsPrueba/Ordenes/detalle/" + orden.ord_int_id,
                        url: "http://www.ausa.com.pe/appmovil_test01/Ordenes/detalle/" + orden.ord_int_id,
                        dataType: "json"
                    }
                },
                schema: {
                    data: function (data) {
                        return data;
                    },
                    model: {
                        fields: {
                            Apertura: { //Inicio Importación
                                type: "date"
                            },
                            ETAEstimado: {
                                type: "date"
                            },
                            LlegadaNave: {
                                type: "date"
                            },
                            TerminoDescarga: {
                                type: "date"
                            },
                            DocumentosCompletos: {
                                type: "date"
                            },
                            FechaNumeracion: {
                                type: "date"
                            },
                            FechaCancelacion: {
                                type: "date"
                            },
                            AforoCulminado: {
                                type: "date"
                            },
                            LevanteAutorizado: {
                                type: "date"
                            },
                            RetiroCulminado: {
                                type: "date"
                            },
                            IniciarTramite: { //Inicio Exportación
                                type: "date"
                            },
                            ESC: {
                                type: "date"
                            },
                            DAM: {
                                type: "date"
                            },
                            DAMFisico: {
                                type: "date"
                            },
                            MercanciaPuerto: {
                                type: "date"
                            },
                            EmbarqueExito: {
                                type: "date"
                            },
                            TramiteVisto: {
                                type: "date"
                            },
                            RecepDocs: {
                                type: "date"
                            },
                            DAMDefinitiva: {
                                type: "date"
                            },
                            Regularizacion: {
                                type: "date"
                            },
                            DAMcliente: {
                                type: "date"
                            }
                        }
                    }
                }
            });
            dsDetOrden.fetch(function () {
                var data = dsDetOrden.data();
                var detOrden = data[0];
                if (detOrden.Regimen == "IMPO") {
                    $("#det-orden").kendoListView({
                        dataSource: dsDetOrden,
                        template: kendo.template($("#temp01").html())
                    });
                } else {
                    $("#det-orden").kendoListView({
                        dataSource: dsDetOrden,
                        template: kendo.template($("#temp02").html())
                    });
                }
            });
            window.location.href = "#det-orden1";
        } else {
            var notificationElement = $("#notification");
            notificationElement.kendoNotification();
            var notificationWidget = notificationElement.data("kendoNotification");
            notificationWidget.show("La órden no existe", "error");
        }
    });
    /*dsOrden.fetch(function () {
  .replace(/\D/g,'')
        var data = dsOrden.data();
        var orden = data[0];

        var date = new Date(parseInt(orden.fecha, 10));

        //alert(date);
        //alert(date.toLocaleString());
    });*/
}