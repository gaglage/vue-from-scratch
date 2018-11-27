Vue.component('child-methods', {
    data() {
        return {
            cmpName: 'Child Method CMP'
        }
    },
    methods: {
        showCmpName() {
            console.log('Llamada al método showCmpName',this.cmpName);
        }
    },

    template: `
    <div>
        <h2>Acceso a métodos del cmp hijo desde el cm padre</h2>

    </div>
    `
})