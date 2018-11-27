Vue.component('login-form', {
    data() {
        return {
            logged: false,
            user: {
                email: '',
                password: ''
            }
        }
    },
    methods: {
        login() {
            this.logged = this.user.email === 'test@m.com' && this.user.password === '1234';
        }
    },
    template:`
    <div>
        <h2>Formulario Login</h2>
        <p v-show="logged" style="background: green; color: #fff">
            Has iniciado sesión con los datos : {{ user }}
        </p>
        <form @submit.prevent="login">
        <input autocomplete="off" type="email" v-model="user.email" name="email">
        <input type="password" v-model="user.password" name="password">
        <input type="submit" name="email" value="Iniciar sesión">

        </form>
    </div>
    `
})