<template>
    <v-card color="bgcolor"  elevation="3" :loading="isLoading">
        <v-card-title dense :class="color" class=" fixed-tabs-bar mb-4 pa-5" style="position: sticky;top: 0; z-index: 2;">
          <v-icon dark large>{{icon}}</v-icon> <v-spacer></v-spacer> <h2 class="white--text "> {{title}}</h2>
        </v-card-title>
        <v-card-text>
            <slot name="contant"></slot>
        </v-card-text>
        <v-card-actions>
            <slot name="actions"></slot>
        </v-card-actions>
    </v-card>
</template>

<script>

    import {mapGetters} from "vuex";

    export default {
        props: {
            icon: {
                require: true,
                type: String,
            },
            title: {
                require: true,
                type: String,
            },
            color: {
                default: 'info',
                type: String,
            },
            elevation: {
                default: 3,
                type: Number,
            },
        },
        computed: {
            ...mapGetters({
                isLoading: 'isLoading',
            }),
        },
    }
</script>
