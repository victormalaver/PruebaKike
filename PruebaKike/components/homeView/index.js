'use strict';

app.homeView = kendo.observable({
    onShow: function () {},
    afterShow: function () {}
});

// START_CUSTOM_CODE_homeView
// END_CUSTOM_CODE_homeView

function autenticar() {

    $.soap({
        url: 'http://www.ausa.com.pe/WS_SVU/ws_svu.asmx?op=',
        method: 'nuevaAutenticacion',

        data: {
           userName: 'jlcornejo',
            password: '123'
        },

        success: function (soapResponse) {
            // do stuff with soapResponse
            // if you want to have the response as JSON use soapResponse.toJSON();
            // or soapResponse.toString() to get XML string
            alert(soapResponse.toString());
            // or soapResponse.toXML() to get XML DOM
        },
        error: function (SOAPResponse) {
            // show error
            alert("error");
        }
    });
 

}

function Login(){
    /*
    * DATOS PRUEBAS
    * jlcornejo - 123
    * rmanrique - rm0112ue
    */
    var txtsUsuario = $("#txtsUsuario").val();
    var txtsContrasenia = $("#txtsContrasenia").val();
    console.log("jQuery post pars >>> usr: " + txtsUsuario + " pwd: " + txtsContrasenia);
    
    $.post(
        "http://54.213.238.161/wsAusa/Inicio/AutentificaUsuario",
         {txtsUsuario: txtsUsuario, txtsContrasenia: txtsContrasenia},
         function(data,status,xhr){
             
             $("#LoginResponse").html(data);
             $("#StatusPost").append(status);
             $("#XHRObj").append(xhr);
         },
         /* use dataType "json" */
        "text"
    );
}
 