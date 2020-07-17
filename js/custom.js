

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
}

