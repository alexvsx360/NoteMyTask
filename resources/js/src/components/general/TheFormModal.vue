<template>
    <v-row justify="center">
        <v-dialog
            v-model="showForm"
            max-width="600px"
            persistent
        >
            <the-task-form ></the-task-form>
        </v-dialog>
    </v-row>
</template>

<script>

    import TheTaskForm from "../tasks/TheTaskForm";

    export default {
        components: {
            TheTaskForm,
        },
        computed: {
            showForm: {
                get() {
                    return this.$store.getters['tasks/showForm'];
                },
                set(val) {
                    this.$store.commit('tasks/SET_SHOW_FORM', val);
                }
            },
        },
    }
</script>
