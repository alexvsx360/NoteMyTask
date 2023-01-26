<template>
<v-row>
<v-col>
    <v-chip
        class="mx-auto"
        color="warning"
    >
        <v-icon left>
            mdi-minus-circle
        </v-icon>
       Open Tasks {{numberOfOpenTasks}}
    </v-chip>
    <v-chip
        class="mx-auto"
        color="success"
    >
        <v-icon left>
            mdi-checkbox-marked-circle
        </v-icon>
        Tasks Completed {{numberOfCompletedTasks}}
    </v-chip>
</v-col>
</v-row>
</template>

<script>
    import { mapGetters } from "vuex";

    export default {
        components: {

        },
        computed: {
            ...mapGetters({
                tasksArray:'tasks/tasksArray',
            }),
            numberOfCompletedTasks(){
                let newTasksArray = [...this.tasksArray];
                newTasksArray = newTasksArray.filter((value) =>  value.status === 'DONE');
                return newTasksArray.length;
            },
            numberOfOpenTasks(){
                let newTasksArray = [...this.tasksArray];
                newTasksArray = newTasksArray.filter((value) => value.status === 'OPEN');
                return newTasksArray.length;
            },
        },
    }
</script>
