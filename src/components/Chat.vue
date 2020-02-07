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
    import db from '@/firebase/init'
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
        created() {
            let ref = db.collection('chat').orderBy('timestamp')
             ref.onSnapshot(snapshot => {
                 snapshot.docChanges().forEach(change => {
                     if (change.type == "added") {
                         let doc = change.doc
                         this.messages.push({
                             id: doc.id,
                             name: doc.data().name,
                             content: doc.data().content,
                             timestamp: doc.data().timestamp
                         })
                     }
                 })
             })
        },
        watch: {


        }
    }
</script>

<style scoped>

</style>