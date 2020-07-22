

function validacionFormulario(){
 
    
    var res;
    var contrasena = document.getElementById("contrasena").value;

    if(contrasena.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/)){
        res = "true";
    }
    
    else{
        alert("Porfavor verifique que cumple con todos los requisitos de la contraseña")
        res = "false";
    }
        
    
     console.log(res);

     var nodoNombre = document.getElementById('nombre');
     var nodoEmail = document.getElementById('email');
     var msg = comprobarNombre(nodoNombre.value);
     if(msg!=''){alert(msg);}
     nodoEmail.value = pasarEmailAMinusculas(nodoEmail.value);
     nodoEmail.value = comprobrarAtEnEmail(nodoEmail.value);
     msg = comprobarEmail(nodoEmail.value);
     if(msg!=''){alert(msg);}		

}


function comprobrarAtEnEmail(email){
    return email.replace(/at/g,'@');
}
function pasarEmailAMinusculas(email){
    return email.toLowerCase();
}
function comprobarNombre(nombre){
    if(nombre.length<3){
        var msg = 'El nombre no cumple con tener al menos tres letras.';
        return msg;
    }else{
        return msg='';
    }
}
function comprobarApellido(apellido){
    if(apellido.length<3){
        var msg = 'El apellido no cumple con tener al menos tres letras.';
        return msg;
    }else{
        return msg='';
    }
}
function comprobarEmail(email){
    var msg = '';
    var hayArroba = false;
    var hayPunto = false;
    for(var i=0; i<email.length; i++){					
        if(email[i]=='@'){hayArroba = true;}
        if(email[i]=='.'){hayPunto = true;}
    }
    if(hayArroba==false && hayPunto==false){
        msg = 'Faltan el símbolo \'@\' y el \'.\'';
    }else{
        if(hayArroba==false){msg = 'Falta el símbolo \'@\' en el correo electrónico.';}
        if(hayPunto==false){msg = 'Falta el símbolo \'.\' en el correo electrónico.';}
    }
    return msg;
}