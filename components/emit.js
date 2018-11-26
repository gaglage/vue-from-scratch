Vue.component('emit', {
    data(){
        return{
            carBrand: 'Toyota'
        }
    },
    template: `
    <div>
        <h2>Emitir eventos con Vuejs 2</h2>
        <p @click="$emit('showCarBrand',carBrand)">Pulsa aqui para emitir un evento a la instancia ROOT de Vuejs</p>
    </div>

    `
})