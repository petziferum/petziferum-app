<template>
    <v-app>
        <v-app-bar
                app
                color="primary"
                dark
                shrink-on-scroll
                :src="require('./assets/Bugasee-edit.jpg')"
                prominent
                elevation="0"
        >
            <template v-slot:img="{ props }">
                <v-img                  v-bind="props"
                                        gradient="to top right, rgba(90,190,236,.7), rgba(25,32,172,.7)"
                ></v-img>
            </template>
            <v-img :src="logo"  max-height="100px" max-width="140px"></v-img>

            <v-spacer></v-spacer>
            <template v-slot:extension>
                <v-tabs
                        class="ml-8"
                        background-color="transparent"
                >
                    <v-tab to="/">Tab 1</v-tab>
                    <v-tab to="/enter">Tab 2</v-tab>
                </v-tabs>
            </template>
        </v-app-bar>

        <v-content>
            <router-view></router-view>
        </v-content>
    </v-app>
</template>

<script>
    export default {
        name: 'App',
        data: () => ({
            logo: require("@/assets/Petziferum_schriftzug_Trans.png")
        }),
    };
</script>
