console.log(location.search)     // lee los argumentos pasados a este formulario
var args = location.search.substr(1).split('&');  
//separa el string por los “&” creando una lista [“id=3” , “nombre=’tv50’” , ”precio=1200”,”stock=20”]
console.log(args)
var parts = []
for (let i = 0; i < args.length; ++i) { 
    parts[i] = args[i].split('=');
    console.log(parts)
}
//decodeUriComponent elimina los caracteres especiales que recibe en la URL 
document.getElementById("id").value = decodeURIComponent(parts[0][1])
document.getElementById("nombre").value = decodeURIComponent(parts[1][1])
document.getElementById("categoria").value = decodeURIComponent(parts[2][1])
document.getElementById("precio").value = decodeURIComponent(parts[3][1])
document.getElementById("stock").value =decodeURIComponent( parts[4][1])
document.getElementById("imagen").value =decodeURIComponent( parts[5][1])



function modificar() {

    let id = document.getElementById("id").value
    let n = document.getElementById("nombre").value
    let c = document.getElementById("categoria").value
    let p = parseFloat(document.getElementById("precio").value)
    let s = parseInt(document.getElementById("stock").value)
    let i = document.getElementById("imagen").value
   
    let producto = {
        nombre: n,
        categoria: c,
        precio: p,
        stock: s,
        img:i
    }
    
    const url = 'https://haguen77.pythonanywhere.com/productos/' + id;
    var options = {
        body: JSON.stringify(producto),
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        redirect: 'follow'
    }
    fetch(url, options)
        .then(function () {
           
            alert("Registro modificado")
            window.location.href ="https://correa7.github.io/Crud/"; 
            // window.location.href = "../index.html";  
        })
        .catch(err => {
            //this.errored = true
            console.error(err);
            alert("Error al Modificar")
        })      
}
