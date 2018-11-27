Vue.component('watchers', {
    data() {
        return {
            user: null,
            oldUser: null
        }
    },
    mounted() {
        this.randomUser()
    },
    methods: {
        async randomUser() {
            //con async await try catch pues no usamos el then catch
            try {
                const data = await fetch('https://randomuser.me/api/');
                const json = await data.json();
                const user = json.results[0];
                console.log(user);
                this.user = `${user.name.title} ${user.name.first}  ${user.name.last}`
                console.log(this.user);

            } catch (error) {
                //algo ha ido mal
            }

        }
    },
    watch: {
        user(newVal, oldVal) {
            this.user = newVal;
            this.oldUser = oldVal;
        }
    },

    template: `
    <div>
        <h2>Watchers con Vuejs2</h2>
        <button @click="randomUser">Random User</button>
            <p>Nuevo usuario {{ user }}</p>
            <p>Anterior Usuario {{ oldUser }}</p>
    </div>
    `
})