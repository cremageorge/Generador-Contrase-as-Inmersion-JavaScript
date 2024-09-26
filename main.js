/* ES IGUAL USAR COMILLAS DOBLES "" QUE COMILLAS SIMPLES ' (COMO BUENA PRACTICA, SE DEBE ADOPTAR SOLO EL USO DE 
   UNA DE ELLAS A LO LARGO DE LA CODIFICACION, SALVO QUE SE TENGA UN TEXTO DENTRO DE OTRO SE PUEDEN COMBINAR) */

let cantidad = document.getElementById('cantidad');  //LA VARIABLE 'cantidad' VA A SER DE TIPO OBJETO DEL HTML
let contrasena = document.getElementById('contrasena');
const cadenaCaracteres = 'A@BCD@EF!GHI!JKLMN#OPQ¡R#ST¡UV$WXY%Za$bc^defg%hi^&jklmno*pqr%stu&vwx*yz(01234567)8.9';

/* let texto = 'Hola Mundooo';
console.log(texto); --'typeof' INDICA EL TIPO DE DATO DE LA VARIABLE */

function generar() {
    /* SE ACONSEJA FORZAR EL PARSEO A 'Int'(AUN CUANDO NO ERA NECESARIO YA QUE USANDO 'cantidad.value' SE OBTIENE
       UN VALOR NUMERICO), DEBIDO A QUE 'cantidad' VIENE DE UN TIPO OBJETO, ASI SE EVITAN PROBLEMAS A FUTURO */
    let numeroDigitado = parseInt(cantidad.value); 

    if (numeroDigitado < 8) {
        alert('La cantidad de caracteres tiene que ser mayor que 7');  //'alert' MUESTRA VENTANA EMERGENTE
        limpiar();
        return;
    }

    /* 'NaN' indica que contiene un valor que no es numérico o que no se puede convertir
       a numérico (por ejemplo hola / 'hola') 
    if (numeroDigitado === null || numeroDigitado === undefined || isNaN(numeroDigitado)) {
    Dado que null, undefined, y NaN son false en JavaScript, se puede simplificar la 
    verificación con el siguiente 'if': */
    if (!numeroDigitado && numeroDigitado !== 0) {
        alert('La cantidad de caracteres no puede ser vacío');
        limpiar();
        return;
    }

    let password = '';
    for (i = 0; i < numeroDigitado; i++) {
        let caracterAleatorio = cadenaCaracteres[Math.floor(Math.random() * cadenaCaracteres.length)];

        /* CONCATENA Y ASIGNA A 'password' EL VALOR DE 'caracterAleatorio', ES IGUAL QUE PONER:
            password = password + caracterAleatorio; */
        password += caracterAleatorio;
    }
    contrasena.value = password;
    validaTipoContrasena(password);
}

function limpiar() {
    cantidad.value = '';
    contrasena.value = '';
    cantidad.focus();
}

/* EL NOMBRE DEL PARAMETRO NO NECESARIAMENTE TIENE QUE LLAMARSE IGUAL QUE EL ARGUMENTO.
   PUEDE TENER CUALQUIER OTRO NOMBRE QUE SE DEFINA */
function validaTipoContrasena(password) { 
    const tipoContrasena = /(?=.*[A-Z])(?=.*\d)/.test(password);
    if (tipoContrasena) {
        alert('Contraseña generada fuerte');
    }    
    else {
        alert('Contraseña generada débil (Se sugiere tenga mínimo una Letra Mayúscula y un Número)');
    }
}