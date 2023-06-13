function guardar() {
    let r = document.getElementById("id").value
    let n = document.getElementById("nombre").value
    let p = parseFloat(document.getElementById("precio").value)
    let s = parseInt(document.getElementById("stock").value)
    let i = document.getElementById("imagen").value


    let producto = {
        id:r,
        nombre: n,
        precio: p,
        stock: s,
        imagen: i
    }
    let url='https://correa7.github.io/api-sport-products/product-store.json'
    var options = {
        body: JSON.stringify(producto),
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
    }
    fetch(url, options)
        .then(function () {
            
            alert("Grabado")
            window.location.href = "../index.html";  
            // Handle response we get from the API
        })
        .catch(err => {
            //this.errored = true
            alert("Error al grabar" )
            console.error(err);
        })
}