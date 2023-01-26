import Vue from 'vue';
import VueRouter from 'vue-router';

import TasksDashboardPage from '../views/TasksPage.vue';

Vue.use(VueRouter);

export default new VueRouter({
    routes:[
        {
            path:'/tasks',
            component: TasksDashboardPage,
            name:'tasks',
        },
        {
            path: '*',
            redirect: '/tasks',
        }
    ],
    mode: 'history'
})
