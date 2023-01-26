<template>
    <div class="text-center ma-2">
        <v-snackbar
            v-model="show"
            elevation="24"
            calss="text-center"
            :color="type"
            dismissible
        >
            {{ text }}

            <template v-slot:action="{ attrs }">
                <v-btn
                    text
                    fab
                    v-bind="attrs"
                    @click="show = false"
                >
                    <span>x</span>
                </v-btn>
            </template>
        </v-snackbar>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex';

    export default {
        computed:{
            ...mapGetters({
                text: 'snackbarAlert/text',
                type: 'snackbarAlert/type',
            }),
            show: {
                get() {
                    return this.$store.getters['snackbarAlert/show'];
                },
                set() {
                    this.$store.commit('snackbarAlert/SET_SHOW', false);
                }
            }
        }
    }
</script>
