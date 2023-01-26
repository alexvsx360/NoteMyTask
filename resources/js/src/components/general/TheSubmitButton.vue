<template>
    <v-btn
        color="success"
        :loading="isLoading"
        :disabled="isLoading"
        @click="submit()"
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
         submit(){
             this.$emit('submit');
         }
     }
    }
</script>
