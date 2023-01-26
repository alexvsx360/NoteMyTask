<template>
    <v-row justify="center">
        <v-dialog
            v-model="showDialog"
            max-width="600px"
        >
            <the-card :color="dialogType" :title="dialogTitle" v-if="dialogType">
                <template v-slot:contant>
                    <v-row class="ma-4">
                        <v-col class="text-center">
                            <h5>{{dialogText}}</h5>
                        </v-col>
                    </v-row>
                </template>
                <template v-slot:actions>
                    <v-row class="ma-2">
                        <v-col class="text-center">
                            <the-reject-button
                                text="cancel"
                                @reject="closeModel()"
                            ></the-reject-button>
                        </v-col>
                        <v-col class="text-center">
                            <the-submit-button
                                text="sebmit"
                                @submit="submit()"
                            ></the-submit-button>
                        </v-col>
                    </v-row>
                </template>
            </the-card>
        </v-dialog>
    </v-row>
</template>

<script>
    import TheCard from "./TheCard";
    import {mapGetters} from "vuex";
    import TheRejectButton from "./TheRejectButton";
    import TheSubmitButton from "./TheSubmitButton";

    export default {
        components: {
            TheSubmitButton,
            TheRejectButton,
            TheCard
        },
        data: () => ({
        }),
        computed: {
            ...mapGetters({
                dialogTitle: 'tasks/dialogTitle',
                dialogText: 'tasks/dialogText',
                dialogType: 'tasks/dialogType',
            }),
            showDialog: {
                get() {
                    return this.$store.getters['tasks/showDialog'];
                },
                set(val) {
                    this.$store.commit('tasks/SET_SHOW_DIALOG', val);
                }
            },
        },
        methods: {
            closeModel() {
                this.showDialog = false;
            },
            submit() {
                this.$emit('submit');
            }
        },
    }
</script>
