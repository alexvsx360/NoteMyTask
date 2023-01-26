<template>
        <v-btn
            color="error"
            :loading="isLoading"
            :disabled="isLoading"
            @click="reject()"
        >
            {{text}}
        </v-btn>
</template>

<script>
    import {mapGetters} from "vuex";

    export default {
        props:{
            text:{
                require:true,
                type:String,
            },
        },
        computed: {
            ...mapGetters({
                isLoading:'isLoading',
            }),
        },
        methods:{
            reject(){
                this.$emit('reject');
            }
        }
    }
</script>
