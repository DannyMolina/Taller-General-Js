// function user(){

//     var name = document.getElementById("name").value,
//         email = document.getElementById("email").value,
//         age = document.getElementById("age").value,
//         occupation = document.getElementById("occupation").value,
//         tel = document.getElementById("tel").value;

//     if (name == "") {
//         document.getElementById("name").focus;
//     } else {
//         if (age == "") {
//             document.getElementById("age").focus;
//         } else {
//             console.log(name+email+age+occupation+tel);
//         }
//     }
    
// }



function informacion(){ 
    let nombres = document.getElementById('name').value, 
        edad = document.getElementById('age').value,
        correo = document.getElementById('email').value, 
        telefono = document.getElementById('tel').value,
        ocupacion = document.getElementById('occupation').value, 
        direccion = document.getElementById('direction').value;
    
    let user = new Map();
    user.set('key', nombres)
    user.set('tiene:', edad, 'años')
    user.set('correo es:', correo)
    user.set('Su telefono:', telefono)
    user.set('Su direccion:', direccion)
    user.set('Su ocupacion es:', ocupacion)
    console.log(user)
}
