<template>
    <the-card :icon="form.icon" :color="form.color" :title="form.name">
        <template v-slot:contant>
            <v-row class="mt-4">
                <v-col class="text-center">
                    <v-form ref="form" @submit.prevent="submitForm">
                        <v-textarea
                            name="text"
                            outlined
                            prepend-icon="mdi-clipboard-text"
                            :disabled="form.disabled"
                            v-model="selectedTask.text"
                            :rules="rules.textRule"
                            :color="form.color"
                            label="Text"
                        >
                        </v-textarea>
                        <v-select
                            v-model="selectedTask.status"
                            outlined
                            :rules="rules.statusRule"
                            prepend-icon="mdi-star"
                            :disabled="form.disabled"
                            :items="statusArray"
                            :color="form.color"
                            label="Status"
                        ></v-select>
                        <the-date-time-picker
                            label="Target Date"
                            :color="form.color"
                            getter="tasks/selectedTaskTargetDate"
                            setter="tasks/SET_SELECTED_TASK_TARGET_DATE"
                            :disabled="form.disabled"
                        ></the-date-time-picker>
                    </v-form>
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
                <v-col class="text-center" v-if="form.submit">
                    <the-submit-button
                        text="Submit"
                        @submit="submitForm()"
                    ></the-submit-button>
                </v-col>
            </v-row>
        </template>
    </the-card>
</template>

<script>
    import {mapGetters} from "vuex";
    import TheRejectButton from "../general/TheRejectButton";
    import TheSubmitButton from "../general/TheSubmitButton";
    import TheCard from "../general/TheCard";
    import validateText from "../../helpers/validation/validateText";
    import TheDateTimePicker from "../general/TheDateTimePicker";

    export default {

        components: {
            TheDateTimePicker,
            TheCard,
            TheSubmitButton,
            TheRejectButton,
        },
        data: () => ({
            rules: {
                targetDateRule: [
                    value => !!value || 'task target Date cannot be empty',
                ],
                statusRule: [
                    value => !!value || 'task status cannot be empty',
                ],
                textRule: [
                    value => !!value || 'task text cannot be empty',
                    v => validateText(v) || 'task text must contain only Hebrew and English or numbers'
                ],
            }
        }),
        computed: {
            ...mapGetters({
                formTitle: 'tasks/formTitle',
                form: 'tasks/form',
                statusArray: 'tasks/statusArray',
            }),
            selectedTask: {
                get() {
                    return this.$store.getters['tasks/selectedTask'];
                },
                set(val) {
                    this.$store.commit('tasks/SET_SELECTED_TASK', val);
                }
            },
            showForm: {
                get() {
                    return this.$store.getters['tasks/showForm'];
                },
                set(val) {
                    this.$store.commit('tasks/SET_SHOW_FORM', val);
                }
            },
        },
        methods: {
            submitForm(event) {
                if (this.$refs.form.validate()) {
                    this.$store.dispatch(this.form.action, this.selectedTask);
                }
            },
            closeModel() {
                this.showForm = false;
            },
        },
    }
</script>
