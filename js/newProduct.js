function guardar() {
 
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
        img: i
    }
    let url='https://haguen77.pythonanywhere.com/productos'
    var options = {
        body: JSON.stringify(producto),
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
    }
    fetch(url, options)
        .then(function () {
            
            alert("Grabado")
            window.location.href = "../index.html" || 'https://correa7.github.io/Crud/';  
            // Handle response we get from the API
        })
        .catch(err => {
            //this.errored = true
            alert("Error al grabar" )
            console.error(err);
        })
}