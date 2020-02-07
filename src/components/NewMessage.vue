<template>
    <v-container>
        <span class="new-message">
            <v-form>
                <v-text-field filled type="text" name="new-message" v-model="newMessage" label="new Message"></v-text-field>
                <v-btn @click="addMessage">Send</v-btn>
                <v-alert class="error" v-if="feedback">{{feedback}}</v-alert>
            </v-form>
        </span>
    </v-container>
</template>

<script>
    import db from '@/firebase/init'
    export default {

        name: "NewMessage.vue",
        props: ['name'],
        data() {
            return {
                newMessage: null,
                feedback: null
            }
        },
        methods: {
            addMessage() {
                if (this.newMessage) {
                    this.feedback = null;
                    const message = {
                        content: this.newMessage,
                        name: this.name,
                        timestamp: Date.now()
                    }
                    db.collection('chat').add(message)
                        .catch(err => {
                            console.log(err)
                        })
                    this.newMessage = null

                }
            }
        }
    }
</script>

<style scoped>

</style>