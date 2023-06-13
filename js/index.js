const { createApp } = Vue 
// let url = '../data.json'
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
            // this.products = this.products.filter(p=> p.id !== id)
            
            const url = 'https://my-json-server.typicode.com/Correa7/Api/data/' + id;
            var options = {
                method: 'DELETE',
            }
            fetch(url, options)
                .then(res => res.json()) // or res.json()
                .then(res => {
                    location.reload();
                })
        }
    },
    created() {
        this.fetchData(this.url)
    },

}).mount('#app')



