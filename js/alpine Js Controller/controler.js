document.addEventListener('alpine:init', () => {
    Alpine.data('Data', () => ({


        message: 'I have RGB mouse',
        name: ['Barzin', 'Bagherian'],
        testFunction() { alert(this.message) }


    }))
})