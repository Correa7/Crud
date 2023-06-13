const { createApp } = Vue 

let url='https://my-json-server.typicode.com/Correa7/Api/data'
createApp({
    data(){
        return{
            url:url,
            products:[],
            error:false,
            cargando:true

        }
    },
    methods:{
        fetchData(url){
            fetch(url)
            .then(res=>res.json())
            .then(data=>{
                this.products=data
                this.cargando=false
                console.log(data)
            })
            .catch(err=>console.log(err))
        },
        eliminar(id) {

            Toastify({
                text: "Producto eliminado",
                style: {
                    background: "linear-gradient(to right,  #e92424,  #da5353)",
                },
                duration: 2000,
                gravity: "bottom",
                position: "right",
            }).showToast();

            const url = 'https://my-json-server.typicode.com/Correa7/Api/data/' + id;
            var options = {
                method: 'DELETE',
            }
            fetch(url, options)
                .then(res => res.json()) 
                .then(res => {
                    location.reload();
                })
        }
    },
    created() {
        this.fetchData(this.url)
    },

}).mount('#app')



