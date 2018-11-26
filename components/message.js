Vue.component('message', {
    data() {
        return {
            message: 'hola Mundo'
        }
    },
    template: `
    <div>
        <h2>Component Message</h2>
        <span>{{message}}</span>
    </div>
    `
})