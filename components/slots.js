Vue.component('slots', {

    methods: {
        login() {
            this.logged = this.user.email === 'test@m.com' && this.user.password === '1234';
        }
    },
    template: `
<div>
    <h2>Slots, Ejemplo de Layaout</h2>
    <header>
    <slot name="header"></slot>
    </header>
    <main>
        <slot></slot>
    </main>
    <footer>
        <slot name="footer"></slot>
    </footer>
</div>
    `
})