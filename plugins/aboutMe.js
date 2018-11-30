const AboutMe = {
    install: (Vue, options) => {
        const {
            job
        } = options // options.job desestrucutrando en es6
        Vue.prototype.$me = (name, age) => {
            return `Mi nombre es ${name}, tengo ${age} y trabajo de ${job} `;
        }
    }
};

Vue.use(AboutMe, {
    job: 'Web Developer'
})