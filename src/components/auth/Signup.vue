<template>
    <v-container>
        <v-card class="pa-3" width="300px">
            <v-row>
                <v-col cols="12" class="justify-center">
                    <v-card-title>Signup</v-card-title>
                </v-col>
            </v-row>
            <v-row>

                <v-col cols="12">
                    <v-form>
                        <v-text-field v-model="email" :rules="emailrules" label="Email" ></v-text-field>
                        <v-text-field v-model="password" :rules="passwordrules"
                                      label="password"
                                      @click:append="show = !show"
                                      :type="show ? 'text' : 'password'"
                                      :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
                        ></v-text-field>
                        <v-text-field  v-model="alias" label="alias" :rules="aliasrules" ></v-text-field>
                        <v-btn outlined color="blue" @click.prevent="signup">Sign-in</v-btn>
                        <v-alert border="left" colored-border color="red" elevation="12"  v-if="feedback" dense class="mt-2">{{feedback}}</v-alert>
                    </v-form>

                </v-col>

            </v-row>
        </v-card>
    </v-container>
</template>

<script>

    export default {
        name: "Signup.vue",
        data(){
            return {
                show: false,
                email:null,
                password: null,
                feedback:null,
                alias:null,
                emailrules: [
                    v => !!v || 'mail is required',
                    v => /.+@.+\..+/.test(v) || 'Email must be valid'
                ],
                passwordrules:[
                    v => !!v || 'Passwort du Oarschloch!!'
                ],
                aliasrules:[
                    v => !!v || 'Alias eingeben du Depp!!'
                ],
            }
        },
        methods:{
            signup(){
                const formData = {
                    email:this.email,
                    password:this.password,
                    alias:this.alias
                }
                console.log(formData)
                this.$store.dispatch("signup", formData)
                if(this.alias){
                    this.feedback ="Alles klar, dein Alias ist: "+ this.alias
                }else{
                    this.feedback = "you must enter alias"
                }
            }
        }
    }
</script>

<style scoped>

</style>