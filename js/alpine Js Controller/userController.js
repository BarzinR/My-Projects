document.addEventListener('alpine:init', () => {

    Alpine.data('userData', () => ({

        Users: [],
        getUser() {
            axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {

                this.Users = res.data

            })
        }

    }))
})