
const {createApp} = Vue 

createApp ({
    data: () => {
        return {
            eMail: [],
            emailNumber: null,
            error: '',      
        }
    },

    computed: {
        endEmailArray () {
            return this.eMail.length === this.emailNumber 
        }
    },

    methods: {
        getRandomEmail () {
            this.eMail = [];
            for(let i = 0; i < this.emailNumber; i++) {
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                    .then((res) => {
                        if(this.eMail.includes(res.data.response)){
                            this.emailNumber++
                        } else {
                            const randomEmail = res.data.response
                            this.eMail.push(randomEmail)
                        }
                    })
            }
        }
    },

}) .mount('#app')