<template>
<v-row class="mt-2">
<v-col cols="12" class="text-center">
    <v-btn
        class="mx-auto text-center white--text"
        fab
        color="success"
        @click="createTask"
    >
        <v-icon >
            mdi-plus
        </v-icon>
    </v-btn>
</v-col>
</v-row>
</template>

<script>
    export default {
        methods: {
            createTask() {
                this.$store.dispatch('tasks/showCreateTaskForm');
            },
        }
    }
</script>
