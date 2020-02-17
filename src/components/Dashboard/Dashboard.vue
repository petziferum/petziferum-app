<template>
    <v-container>
        <h1>Dashboard</h1>
        {{email}}
    </v-container>
</template>

<script>
    export default {
        name: "Dashboard.vue",
        computed:{
            email(){
                return !this.$store.getters.user ? false : this.$store.getters.user.email
            }
        },
        created() {
            this.$store.dispatch('fetchUser')
        }
    }
</script>

<style scoped>

</style>