<template>
    <div>
        <v-data-table
            fixed-header
            :headers="headers"
            :items="[...filterdTsksArray]"
            :items-per-page="5"
            class="elevation-3 my-data-table"
        >
            <template v-slot:item.status="{ item }">
                <v-tooltip bottom>
                    <template v-slot:activator="{ on, attrs }">
                        <v-avatar
                            v-bind="attrs"
                            v-on="on"
                            :color="getColorByStatus(item.status)"
                            size="36"
                        >
                            <span class="white--text text-h5">{{item.status.charAt(0)}}</span>
                        </v-avatar>
                    </template>
                    <span>{{item.status}}</span>
                </v-tooltip>
            </template>
            <template v-slot:item.target_date="{ item }">
                <span dir="ltr">{{ formatDateToDateTimeLocalString(item.target_date)}}</span>
            </template>
            <template v-slot:item.id="{ item }">
                <v-tooltip bottom>
                    <template v-slot:activator="{ on, attrs }">
                        <v-btn
                            class="ma-2"
                            text
                            icon
                            v-bind="attrs"
                            v-on="on"
                            color="primary"
                            @click="editTask(item)"
                        >
                            <v-icon>
                                mdi-pencil
                            </v-icon>
                        </v-btn>
                    </template>
                    <span>Edit Task</span>
                </v-tooltip>

                <v-tooltip bottom v-if="canDeleteTask(item)">
                    <template v-slot:activator="{ on, attrs }">
                        <v-btn
                            class="ma-2"
                            text
                            icon
                            v-bind="attrs"
                            v-on="on"
                            color="error"
                            @click="deleteTask(item)"
                        >
                            <v-icon>
                                mdi-delete-forever
                            </v-icon>
                        </v-btn>
                    </template>
                    <span >Delete Task</span>
                </v-tooltip>
                <v-tooltip bottom v-else>
                    <template v-slot:activator="{ on, attrs }">
                        <v-btn
                            class="ma-2"
                            text
                            icon
                            v-bind="attrs"
                            v-on="on"
                            color="info"
                        >
                            <v-icon>
                                mdi-delete-forever
                            </v-icon>
                        </v-btn>
                    </template>
                    <span >Only can delete task with target date greater than in 6 days!</span>
                </v-tooltip>

                <v-tooltip bottom>
                    <template v-slot:activator="{ on, attrs }">
                        <v-btn
                            class="ma-2"
                            text
                            icon
                            v-bind="attrs"
                            v-on="on"
                            color="secondary"
                            @click="showTask(item)"
                        >
                            <v-icon>
                                mdi-eye
                            </v-icon>
                        </v-btn>
                    </template>
                    <span>Display Task</span>
                </v-tooltip>

            </template>
        </v-data-table>
    </div>
</template>

<script>
    import {mapGetters} from "vuex";
    import {formatDateToDateTimeLocalString, formatDateTimeTounixTimstemp} from "../../helpers/formatter/dateFormatter";

    export default {
        data: () => ({
            formatDateToDateTimeLocalString,
            formatDateTimeTounixTimstemp,
            sortedTasksBy: 'text',
            sortedTaskByDesc: true,
            headers: [
                {text: 'Status', value: 'status', sortable: true},
                {text: 'Text', value: 'text', sortable: true},
                {text: 'Target Date', value: 'target_date', sortable: true},
                {text: 'Actions', value: 'id', sortable: false},
            ],
        }),
        computed: {
            ...mapGetters({
                tasksArray: 'tasks/tasksArray',
                statusArray: 'tasks/statusArray',
                filterOptions: 'tasks/filterOptions',
            }),
            filterdTsksArray() {
                let newTasksArray = [...this.tasksArray];
                if (this.filterOptions.taskText) {
                    newTasksArray = newTasksArray.filter((value) => value.text.toLowerCase().includes(this.filterOptions.taskText.toLowerCase()));
                }
                if (this.filterOptions.taskStatus && this.filterOptions.taskStatus.length) {
                    newTasksArray = newTasksArray.filter((value) => this.filterOptions.taskStatus.includes(value.status));
                }
                if (this.filterOptions.taskTargetDateFrom) {
                    newTasksArray = newTasksArray.filter((value) => formatDateTimeTounixTimstemp(value.target_date) > formatDateTimeTounixTimstemp(this.filterOptions.taskTargetDateFrom));
                }
                if (this.filterOptions.taskTargetDateTo) {
                    newTasksArray = newTasksArray.filter((value) => formatDateTimeTounixTimstemp(value.target_date) < formatDateTimeTounixTimstemp(this.filterOptions.taskTargetDateTo));
                }
                return newTasksArray;
            },
        },
        methods: {
            canDeleteTask(task){
                let taskTargetTimestemp = this.formatDateTimeTounixTimstemp(task.target_date);
                let inSixDaysTimestemp = (24*60*60*6) + this.formatDateTimeTounixTimstemp(Date(Date.now()));//add 6 days
                console.log(taskTargetTimestemp , inSixDaysTimestemp);
                if(taskTargetTimestemp > inSixDaysTimestemp){
                    return true;
                }
                return false;
            },
            getColorByStatus(status) {
                switch (status) {
                    case 'OPEN':
                        return 'warning';
                    case 'DONE':
                        return 'success';
                    default:
                        return 'info';
                }
            },
            editTask(task) {
                this.$store.dispatch('tasks/showEditTaskForm', task);
            },
            showTask(task) {
                this.$store.dispatch('tasks/displayTask', task);
            },
            deleteTask(task) {
                this.$store.dispatch('tasks/showDeleteTaskForm', task);
            },
        },
    }
</script>
