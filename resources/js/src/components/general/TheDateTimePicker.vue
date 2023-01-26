<template>
    <v-row
    >
        <v-col
            cols="12"
        >
            <v-menu
                ref="menu"
                top
                v-model="menu"
                :close-on-content-click="false"
                transition="scale-transition"

            >
                <template v-slot:activator="{ on, attrs }">
                    <v-text-field
                        :value="submittableDateTime"
                        v-bind="attrs"
                        v-on="on"
                        readonly
                        outlined
                        @click:clear="clearAll()"
                        :dense="dense"
                        :clearable="clearable"
                        type="text"
                        :prepend-icon="prependIcon"
                        :append-icon="appendIcon"
                        :color="color"
                        :label="label"
                        :disabled="disabled"
                    ></v-text-field>
                </template>

                <v-time-picker
                    class="pa-0"
                    top
                    :close-on-content-click="false"
                    transition="scale-transition"
                    v-model="time"
                    scrollable
                    format="24hr"
                ></v-time-picker>

                <v-date-picker class="pa-0" v-model="date"></v-date-picker>

            </v-menu>
        </v-col>
    </v-row>
</template>

<script>

    import {mapGetters} from "vuex";

    export default {
        props: {
            prependIcon: {
                default: "mdi-calendar-clock",
                type: String,
            },
            appendIcon: {
                default: '',
                type: String,
            },
            label: {
                require: true,
                type: String,
            },
            disabled: {
                type: Boolean,
                default: false
            },
            dense: {
                type: Boolean,
                default: false
            },
            clearable: {
                type: Boolean,
                default: false
            },
            color: {
                require: true,
                type: String,
            },
            getter: {
                require: true,
                type: String,
            },
            setter: {
                require: true,
                type: String,
            },
        },
        data: () => ({
            date: null,
            menu: false,
            time: null,
        }),
        methods: {
            clearAll() {
                this.dateTime = null;
                this.time = null;
                this.date = null;
            }
        },
        computed: {
            ...mapGetters({
                isLoading: 'isLoading',
            }),
            submittableDateTime() {
                if (!this.date) {
                    return this.dateTime;
                }
                let newDatetime =  this.date + ' ' + (this.time ? this.time : '00:00') ;
                this.dateTime = newDatetime;
                return this.dateTime;
            },
            dateTime: {
                get() {
                    return this.$store.getters[this.getter];
                },
                set(val) {
                    this.$store.commit(this.setter, val);
                }
            },
        }
    }
</script>
