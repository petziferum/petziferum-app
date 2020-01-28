<template>
    <v-container>
        <div class="chat Container">
            <h1>Chat</h1>
            <p>Hello {{name}}</p>
            <v-card>
                <v-content>
                   <v-list>
                       <v-list-item>
                           <span class="teal-text">Name</span>
                           <span class="grey--text">message</span>
                           <span class="grey-text time">time</span>
                       </v-list-item>
                   </v-list>
                </v-content>
                <v-text-field value="Nachricht" label="nachricht"></v-text-field>
            </v-card>

        </div>
    </v-container>
</template>

<script>
    export default {
        name: "Chat.vue",
        props: ['name'],
        data() {
            return{

            }
        }
    }
</script>

<style scoped>

</style>