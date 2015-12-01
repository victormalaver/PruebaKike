'use strict';
app.funcionalidad05 = kendo.observable({
    onShow: function () {
        //Carga JavaScript 3st
    },
    afterShow: function () {
        //Carga JavaScript 4st        
    }
});
//dsOperaciones -> obtenemos la lista de Operaciones
var dsOperaciones = new kendo.data.DataSource({
    transport: {
        read: {
            url: "http://www.ausa.com.pe/appmovil_test01/Operaciones/Listar",
            dataType: "json",
            type: "post",
            data: {
                txtdespachador: 3091,
                txtcliente: 0,
                txtorden: 0,
                txtalmacen: 0,
                txtestado: 9
            }
        }
    }
});
//getOperaciones -> cargamos el grid tareas
function getOperaciones() {
    $("#operaciones").kendoGrid({
        dataSource: dsOperaciones,
        filterable: true,
        sortable: true,
        pageable: true,
        scrollable: false,
        selectable: "row",
        change: selectGrid,
        columns: [{
                //cambiar en el PA #Operacion porque genera error-> field: "#Operacion", 
                title: "Nro",
                width: "40px",
                filterable: false
            },
            {
                field: "Cliente",
                title: "Cliente",
                width: "120px",
                filterable: {
                    extra: false,
                    operators: {
                        string: {
                            contains: "Contiene",
                            eq: "Es igual a",
                            neq: "No es igual a"
                        }
                    },
                    messages: {
                        info: "Filtrar por Cliente: ",
                        filter: "Filtrar",
                        clear: "Limpiar"
                    }
                }
            }, {
                field: "Almacen",
                title: "Almacén",
                width: "120px",
                filterable: false
            }, {
                field: "Orden",
                title: "#Órden",
                width: "120px",
                filterable: {
                    extra: false,
                    operators: {
                        string: {
                            contains: "Contiene",
                            eq: "Es igual a",
                            neq: "No es igual a"
                        }
                    },
                    messages: {
                        info: "Filtrar por Órden: ",
                        filter: "Filtrar",
                        clear: "Limpiar"
                    }
                }
            }, {
                field: "Operacion",
                title: "Operación",
                width: "120px",
                filterable: false
            }, {
                field: "Estado",
                title: "Tiempo",
                width: "120px",
                filterable: false
            }, {
                field: " Estado",
                title: "Estado",
                width: "120px",
                filterable: {
                    extra: false,
                    operators: {
                        string: {
                            contains: "Contiene",
                            eq: "Es igual a",
                            neq: "No es igual a"
                        }
                    },
                    messages: {
                        info: "Filtrar por estado: ",
                        filter: "Filtrar",
                        clear: "Limpiar"
                    }
                }
            }]
    });
}