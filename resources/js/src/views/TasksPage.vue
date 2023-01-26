<template>
    <v-row>
        <v-col cols="12"  md="8" class="mx-auto mt-5 ">
            <the-card icon="mdi-view-dashboard" color="primary" title="Tasks Dashboard" >
                <template v-slot:contant>
            <the-status-bar></the-status-bar>
            <the-search-bar></the-search-bar>
            <the-task-table v-if="tasksArray && tasksArray.length"></the-task-table>
            <the-create-task-row></the-create-task-row>
            <the-form-modal></the-form-modal>
            <the-dialog-modal></the-dialog-modal>
                </template>
            </the-card>
        </v-col>
    </v-row>
</template>
<script>
    import {mapGetters} from "vuex";
    import TheTaskTable from "../components/tasks/TheTaskTable";
    import TheDialogModal from "../components/general/TheDialogModal";
    import TheFormModal from "../components/general/TheFormModal";
    import TheSearchBar from "../components/general/TheSearchBar";
    import TheCard from "../components/general/TheCard";
    import TheCreateTaskRow from "../components/general/TheCreateTaskRow";
    import TheStatusBar from "../components/general/TheStatusBar";

    export default {
        components: {
            TheStatusBar,
            TheCreateTaskRow,
            TheCard,
            TheSearchBar,
            TheFormModal,
            TheDialogModal,
            TheTaskTable,
        },
        computed: {
            ...mapGetters({
                tasksArray: 'tasks/tasksArray',
            }),
        },
    }
</script>
