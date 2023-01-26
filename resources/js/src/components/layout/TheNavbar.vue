<template>
    <v-toolbar>
            <div class="mt-5">
            <v-switch
                v-model="$vuetify.theme.dark"
                inset
                label="Dark Mode"
            ></v-switch>
                </div>
        <v-spacer></v-spacer>

        <v-toolbar-title>Note My Task</v-toolbar-title>
    </v-toolbar>
</template>

<script>

    export default {
        data: () => ({}),
        computed: {},
        methods: {},
        mounted() {

        }
    }
</script>

<style>

</style>
