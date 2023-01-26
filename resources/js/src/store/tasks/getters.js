export default {
    emptyTaskObj(state) {
        return state.emptyTaskObj;
    },
    form(state) {
        return state.form;
    },
    filterOptions(state) {
        return state.filterOptions;
    },
    formObj(state) {
        return state.formObj;
    },
    statusArray(state) {
        return state.statusArray;
    },
    isLoading(state) {
        return state.isLoading;
    },
    tasksArray(state) {
        return state.tasksArray;
    },
    selectedTask(state) {
        return state.selectedTask;
    },
    selectedTaskTargetDate(state) {
        return state.selectedTask.target_date;
    },
    filterTargetDateFrom(state) {
        return state.filterOptions.taskTargetDateFrom;
    },
    filterTargetDateTo(state) {
        return state.filterOptions.taskTargetDateTo;
    },
    showForm(state) {
        return state.showForm;
    },
    formTitle(state) {
        return state.formTitle;
    },
    formType(state) {
        return state.formType;
    },
    showDialog(state) {
        return state.showDialog;
    },
    dialogTitle(state) {
        return state.dialogTitle;
    },
    dialogText(state) {
        return state.dialogText;
    },
    dialogType(state) {
        return state.dialogType;
    },

}
