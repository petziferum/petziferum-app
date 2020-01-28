<template>
    <v-container>
        <v-card max-width="50em" class="pa-8 justify-center">
            <v-card-title class="headline">Submit</v-card-title>
        <v-form
                ref="form"
                v-model="valid"
                :lazy-validation="lazy"
        >
            <v-text-field
                    v-model="name"
                    :counter="10"
                    :rules="nameRules"
                    label="Name"
                    required
            ></v-text-field>
            <v-text-field
                    v-model="email"
                    :rules="emailRules"
                    label="E-mail"
                    required
            ></v-text-field>
            <v-select
                    v-model="select"
                    :items="items"
                    :rules="[v => !!v || 'Item is required']"
                    label="Item"
                    required
            ></v-select>
            <v-checkbox
                    v-model="checkbox"
                    :rules="[v => !!v || 'You must agree to continue!']"
                    label="Do you agree?"
                    required
            ></v-checkbox>
            <v-btn
                    :disabled="!valid"
                    color="success"
                    class="mr-4"
                    @click="submit"
            >
                Submit
            </v-btn>
            <v-btn
                    color="error"
                    class="mr-4"
                    @click="reset"
            >
                Reset Form
            </v-btn>
            <v-btn
                    color="warning"
                    @click="resetValidation"
            >
                Reset Validation
            </v-btn>
        </v-form>
        </v-card>
        <v-card class="">
            <v-row>
                <v-col>
            <v-card-title>Submissions</v-card-title>
                </v-col>
            </v-row>
            <v-row>
            <v-card-text>
                <v-row>
                    <v-col>
                        <app-user cols="4" v-for="(user,i) in user" :key="i" :user="user"></app-user>
                    </v-col>
                </v-row>

            </v-card-text>
            </v-row>
        </v-card>

    </v-container>



</template>

<script>
    // @ is an alias to /src
    import user from "../components/User"

    export default {
        name: 'home',
        components: {
            appUser: user
        },
        data:() => ({
            ergebnis: null,
            valid: true,
            items: [
            "item01", "item02", "item03"
            ],
            name: '',
            nameRules: [
                v => !!v || 'Name is required',
                v => (v && v.length <= 10) || 'Name must be less than 10 characters',
            ],
            email: "",
            emailRules: [
                v => !!v || 'Email is requiresd',
                v => /.+@.+\..+/.test(v) || 'Email must be valid'
            ],
            select: null,
            checkbox: false,
            lazy: true,
            subs: [{email: "stefan@mail.com",name:"stefan",valid:false,id:"2"}]
    }),
        methods: {
            submit() {
                const content = {
                    name: this.name,
                    email: this.email,
                    item: this.select,
                    valid: this.valid,
                };
                //hier postaction zum store einfügen
                this.$store.dispatch("postUser",content)
            },
            reset() {
                this.$refs.form.reset()
            },
            resetValidation() {
                this.$refs.form.resetValidation()
            },
            // loadSubmissions()  {
            //     axios.get("https://petziferum-85609.firebaseio.com/submitted.json")
            //         .then(res => {
            //             const data = res.data;
            //             for(let key in data ){
            //                 const user = data[key]
            //                 user.id = key
            //                 console.log(user)
            //                 this.subs.push(user)
            //             }
            //         })
            // },
        },
            computed: {
                user() {
                    return this.$store.getters.getUser
                }
            },
            created() {
                this.$store.dispatch("init")
            }
        }

</script>
<style>
    .border {
        border:1px solid
    }
</style>
