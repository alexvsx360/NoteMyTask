export default {

    SET_TASKS_ARRAY(state, value) {
        state.tasksArray = value;
    },
    SET_FORM(state, value) {
        state.form = value;
    },
    SET_FILTER_OPTIONS(state, value) {
        state.filterOptions = value;
    },
    SET_FILTER_TARGET_DATE_FROM(state, value) {
        state.filterOptions.taskTargetDateFrom = value;
    },
    SET_FILTER_TARGET_DATE_TO(state, value) {
        state.filterOptions.taskTargetDateTo = value;
    },
    SET_SELECTED_TASK_TARGET_DATE(state, value) {
        state.selectedTask.target_date = value;
    },
    SET_SELECTED_TASK(state, value) {
        state.selectedTask = value;
    },
    SET_IS_LOADING(state, value) {
        state.isLoading = value;
    },
    SET_SHOW_FORM(state, value) {
        state.showForm = value;
    },
    SET_FORM_TITEL(state, value) {
        state.formTitle = value;
    },
    SET_FORM_TYPE(state, value) {
        state.formType = value;
    },
    SET_SHOW_DIALOG(state, value) {
        state.showDialog = value;
    },
    SET_DIALOG_TITEL(state, value) {
        state.dialogTitle = value;
    },
    SET_DIALOG_TEXT(state, value) {
        state.dialogText = value;
    },
    SET_DIALOG_TYPE(state, value) {
        state.dialogType = value;
    },
};
