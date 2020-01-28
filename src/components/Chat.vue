<template>
    <v-container>
        <h1>Chat</h1>
        <p>Hello {{name}}</p>
        <v-card>
            <v-list two-line dense >
                <v-list-item-group multiple>
                    <template v-for="message in messages">
                    <v-list-item :key="message.id">
                        <v-list-item-content>
                            <v-list-item-title>{{message.name}}: <span class="grey--text small">{{message.timestamp}}</span></v-list-item-title>
                        <v-list-item-subtitle>{{message.content}}</v-list-item-subtitle>
                        </v-list-item-content>
                    </v-list-item>
                    </template>
                </v-list-item-group>
            </v-list>
            <NewMessage :name="name"></NewMessage>
        </v-card>
    </v-container>
</template>

<script>
    import axios from 'axios'
    import NewMessage from "./NewMessage";
    export default {
        name: "Chat.vue",
        props: ['name'],
        components: {
            NewMessage
        },
        data() {
            return{
                messages: []
            }
        },
        mounted() {
            axios.get("https://petziferum-85609.firebaseio.com/chat.json")
                .then(res => {
                    for(let key in res.data){
                        const data = res.data[key]
                        data.id = key
                        this.messages.push(data)
                    }
                })
        }
    }
</script>

<style scoped>

</style>