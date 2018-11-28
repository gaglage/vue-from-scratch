Vue.component('computed-properties-get-set', {
    data() {
        return {
            amount: 0
        }
    },
    computed: {
        amountFromatted: {
            get() {
                return `${this.amount}€`
            },
            set(newValues) {
                this.amount = newValue;
            }
        }
    },
    template: `
            <div>
                <h2>Computed properties get & set</h2>
                <input type="text"v-model="amount">
                <p>{{ amountFromatted }}</p>
            </div>
        `

})