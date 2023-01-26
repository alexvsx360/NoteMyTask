<template>
    <v-app>
        <v-responsive class="fill-height overflow-y-auto">
        <v-container fluid class="ma-0 pa-0">
            <the-navbar></the-navbar>
           <router-view></router-view>
            <the-snackbar></the-snackbar>
        </v-container>
        </v-responsive>
    </v-app>
</template>

<script>
    import TheNavbar from './components/layout/TheNavbar';
    import TheSnackbar from "./components/general/TheSnackbar";

    export default {
        props: {
            injected: {
                type: Object,
                required: true,
            }
        },
        computed: {
            isLoading: {
                get() {
                    return this.$store.getters['tasks/isLoading'];
                },
                set(val) {
                    this.$store.commit('tasks/SET_IS_LOADING', val);
                }
            },
        },

        components: {
            TheSnackbar,
            TheNavbar,
        },
        mounted() {
            this.isLoading = true;
            this.$store.dispatch('initApp', this.injected);
        },
    }
</script>

<style>
    :root {
        overflow-y: auto;
    }

    :root * {
        font-family: 'Varela Round', sans-serif !important;
    }

    ::-webkit-scrollbar {
        width: 5px;
        height: 13px;
    }

    ::-webkit-scrollbar-thumb {
        background: #20547D;
        border-radius: 10px;
    }

    ::-webkit-scrollbar-thumb:hover {
        background: #4685B8;
    }

    ::-webkit-scrollbar-track {
        background: #bbb;
        border-radius: 10px;
        box-shadow: inset 7px 10px 12px transparent;
    }
</style>
