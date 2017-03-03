<template>
    <div class="container">
       example
    </div>
</template>

<script>
    export default {


        data() {
            return {
                huj: 'awd',
                maly: 'malutki',
                a: 0
            }
        },

        mounted() {
            console.log('Component mounted.')
        },

        methods: {
            cilkCOmonent(){
                this.maly = 'mallllllll',
                this.a += 1
            }
        }


    }
</script>

<style>
    
</style>
