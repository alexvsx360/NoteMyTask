import Vue from 'vue';
import Vuetify from 'vuetify';

import "@mdi/font/css/materialdesignicons.css";
import "vuetify/dist/vuetify.min.css";

Vue.use(Vuetify);

export default new Vuetify({
    rtl: true,
    icons: {
        iconfont: 'mdi',
    },
    theme: {
        defaultTheme: 'dark',
        options: {
            customProperties: true,
        },
        themes: {
            light: {
                primary: '#4FC3F7',
                secondary: '#90A4AE',
                accent: '#BA68C8',
                error: '#E57373',
                warning: '#FFD54F',
                info: '#E0E0E0',
                success: '#AED581',
                bgcolor:'#ECEFF1',
            },
            dark: {
                primary: '#0288D1',
                secondary: '#455A64',
                accent: '#512DA8',
                error: '#D32F2F',
                warning: '#FFA000',
                info: '#616161',
                success: '#689F38',
                bgcolor:'#37474F',
            }
        }
    },
});
