import $http from '../../http';

export default {
    init({commit}, payload) {
        commit('SET_TASKS_ARRAY', payload.tasksArray ?? []);
        commit('SET_IS_LOADING', false);
    },
    setForm({commit, getters}, formPayload) {
        commit('SET_SELECTED_TASK', formPayload.task);
        commit('SET_FORM', {...getters.formObj[formPayload.formType]});
        commit('SET_SHOW_FORM', true);
    },
    showEditTaskForm({dispatch}, task) {
        dispatch('setForm', {
            task: {...task},
            formType: 'edit'
        });
    },
    displayTask({dispatch}, task) {
        dispatch('setForm', {
            task: {...task},
            formType: 'display'
        });
    },
    showDeleteTaskForm({dispatch, commit}, task) {
        dispatch('setForm', {
            task: {...task},
            formType: 'delete'
        });
    },
    showCreateTaskForm({dispatch, getters}) {
        dispatch('setForm', {
            task: {...getters.emptyTaskObj},
            formType: 'create'
        });
    },
    async deleteTaskById({dispatch, commit}, task) {
        try {
            commit('SET_IS_LOADING', true);
            const response = await $http.delete(`api/tasks/${task.id}`);
            if (response.status < 400) {
                await dispatch('getAllTasksArray');
                dispatch('snackbarAlert/alertSuccess', {text: 'Task deleted!'}, {root: true});
            } else {
                dispatch('snackbarAlert/alertError', {text: response?.data?.message}, {root: true});
            }
        } catch (error) {
            dispatch('snackbarAlert/alertError', {text: error?.response?.data?.message}, {root: true});
        }
        commit('SET_SHOW_FORM', false);
        commit('SET_IS_LOADING', false);
    },
    async createNewTask({dispatch, commit}, payload) {
        try {
            commit('SET_IS_LOADING', true);
            const response = await $http.post('api/tasks', payload);
            if (response.status < 400) {
                await dispatch('getAllTasksArray');
                dispatch('snackbarAlert/alertSuccess', {text: 'Task created'}, {root: true});
            } else {
                dispatch('snackbarAlert/alertError', {text: response?.data?.message}, {root: true});
            }
        } catch (error) {
            dispatch('snackbarAlert/alertError', {text: error?.response?.data?.message}, {root: true});
        }
        commit('SET_SHOW_FORM', false);
        commit('SET_IS_LOADING', false);
    },
    async updateTaskById({dispatch, commit}, task) {
        try {
            commit('SET_IS_LOADING', true);
            const response = await $http.put('api/tasks', task);
            if (response.status < 400) {
                await dispatch('getAllTasksArray');
                dispatch('snackbarAlert/alertSuccess', {text: 'Task updated!'}, {root: true});
            } else {
                dispatch('snackbarAlert/alertError', {text: response?.data?.message}, {root: true});
            }
        } catch (error) {
            dispatch('snackbarAlert/alertError', {text: error?.response?.data?.message}, {root: true});
        }
        commit('SET_SHOW_FORM', false);
        commit('SET_IS_LOADING', false);
    },
    async getAllTasksArray({dispatch, commit}) {
        try {
            commit('SET_IS_LOADING', true);
            const response = await $http.post('api/tasks/get-all');
            if (response.status < 400) {
                commit('SET_TASKS_ARRAY', response.data.tasksArray ?? []);

            } else {
                dispatch('snackbarAlert/alertError', {text: response?.data?.message}, {root: true});
            }
        } catch (error) {
            dispatch('snackbarAlert/alertError', {text: error?.response?.data?.message}, {root: true});
        }
        commit('SET_SHOW_FORM', false);
        commit('SET_IS_LOADING', false);
    }
};
