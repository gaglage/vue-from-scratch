Vue.component('methods',{
    data() {
        return {
            name: 'Gabi',
            surname: 'Alvarez'
        }
    },
    computed:{
        fullName (){
            return `${this.name} ${this.surname}`
        }
    },
    methods:{
        hello (){
            alert(this.fullName);
        }
    },
    template:`
    <div>
        <h2>Ejecutar métodps con VueJs</h2>
        <p @click="hello">Pulsa aquí para ejecutar el método hello</p>
    </div>`
})