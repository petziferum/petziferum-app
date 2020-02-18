<template>
    <v-container>
        <h1>Dashboard</h1>
        <v-card max-width="25%" tile dark>
            <v-card-title>Willkommen {{getData.alias}}</v-card-title>
            <v-card-subtitle>{{email}}</v-card-subtitle>
            <v-card-text>ID: {{getData.id}}</v-card-text>
        </v-card>
    </v-container>
</template>

<script>
    export default {
        name: "Dashboard.vue",
        data(){
            return{
            }
        },
        methods:{

        },
        computed:{
            getData() {
                return this.$store.getters.user
            },
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