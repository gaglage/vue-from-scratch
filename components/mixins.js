let myMixin ={
    mounted(){
        console.log("MIXIN init");
        console.log(this.mixinData);
        this.test()
    },
    data(){
        return{
            mixinData: 'Mixin Data'
        }
    },
    methods:{
        test(){
            console.log('text from mixin');
        }
    }
}
Vue.component('mixins',{
    mixins: [myMixin],
    mounted() {
        console.log('Mounted from mixin')
    },
    data(){
        return{
            mixinData: 'Mixin Data desde el componente'
        }
    },
    template:`<div>
        <h2>USO de Mixins</h2>
        <p>{{ mixinData }}</p>
    </div>`
})