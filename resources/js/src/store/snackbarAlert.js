export default {

    namespaced: true,

    state: () => ({
        show: false,
        text: '',
        type: 'info',
        time: '9000',
    }),

    getters: {
        show(state) {
            return state.show;
        },
        text(state) {
            return state.text;
        },
        type(state) {
            return state.type;
        },
        time(state) {
            return state.time;
        },
    },

    mutations: {
        SET_SHOW(state, value) {
            state.show = value;
        },
        SET_TEXT(state, value) {
            state.text = value;
        },
        SET_TYPE(state, value) {
            state.type = value;
        },
        SET_TIME(state, value) {
            state.time = value;
        },
    },

    actions: {
        snackbarAlert({ commit, getters }, payload){
            commit('SET_TEXT', payload.text ?? getters.text);
            commit('SET_TYPE', payload.type ?? getters.type);
            commit('SET_TIME', payload.time ?? getters.time);

            commit('SET_SHOW', true);
            setTimeout(() => {
                commit('SET_SHOW', false);
            }, getters.time);
        },
        alertError({ dispatch }, payload) {
            dispatch('snackbarAlert', {
                text: payload.text ?? 'something got very wrong!!',
                type: 'error'
            });
        },
        alertWarning({ dispatch }, payload) {
            dispatch('snackbarAlert', {
                text: payload.text,
                type: 'warning'
            });
        },
        alertInfo({ dispatch }, payload) {
            dispatch('snackbarAlert', {
                text: payload.text,
                type: 'info'
            });
        },
        alertSuccess({ dispatch }, payload) {
            dispatch('snackbarAlert', {
                text: payload.text ?? 'פעולה הושלמה בהצלחה!',
                type: 'success'
            });
        },
    },
}
