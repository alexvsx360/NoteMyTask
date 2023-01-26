<template>
    <v-form ref="form">
        <v-row>
            <v-col cols="12 ">

                <v-switch
                    v-model="dispalyFilter"
                    inset
                    left
                    overlap
                    label="Filter"
                >
                    <template v-slot:label>
                        <v-badge
                            v-if="calcActiveFilters"
                            color="error"
                            left
                            :content="calcActiveFilters"
                        >
                            <span>Filter</span>
                        </v-badge>
                        <span v-else>Filter</span>
                    </template>
                </v-switch>
            </v-col>
        </v-row>
        <v-row v-if="dispalyFilter">
            <v-col cols="12" sm="6" md="3">
                <v-text-field
                    v-model="filterOptions.taskText"
                    append-icon="mdi-clipboard-text"
                    label="By Text"
                    clearable
                    :rules="rules.textRule"
                    outlined
                    dense
                ></v-text-field>
            </v-col>
            <v-col cols="12" sm="6" md="3">
                <v-select
                    v-model="filterOptions.taskStatus"
                    :items="statusArray"
                    append-icon="mdi-star"
                    chips
                    clearable
                    dense
                    label="By Status"
                    multiple
                    outlined
                >
                    <template v-slot:selection="{ item }">
                        <v-chip
                            close
                            :color="getColorByStatus(item)"
                            @click:close="remove(item)"
                        >
                            {{item.charAt(0)}}
                        </v-chip>
                    </template>
                </v-select>
            </v-col>
            <v-col cols="12" sm="6" md="3">
                <the-date-time-picker
                    label="By Target Date From"
                    color="primary"
                    prependIcon=""
                    appendIcon="mdi-calendar-clock"
                    :dense="true"
                    :clearable="true"
                    getter="tasks/filterTargetDateFrom"
                    setter="tasks/SET_FILTER_TARGET_DATE_FROM"
                ></the-date-time-picker>
            </v-col>
            <v-col cols="12" sm="6" md="3">
                <the-date-time-picker
                    label="By Target Date To"
                    color="primary"
                    :dense="true"
                    :clearable="true"
                    prependIcon=""
                    appendIcon="mdi-calendar-clock"
                    getter="tasks/filterTargetDateTo"
                    setter="tasks/SET_FILTER_TARGET_DATE_TO"
                ></the-date-time-picker>
            </v-col>
        </v-row>
    </v-form>
</template>

<script>
    import {mapGetters} from "vuex";
    import validateText from "../../helpers/validation/validateText";
    import TheDateTimePicker from "./TheDateTimePicker";

    export default {
        components: {TheDateTimePicker},
        data: () => ({
            dispalyFilter: false,
            rules: {
                textRule: [
                    v => (!v || validateText(v)) || 'task text must contain only Hebrew and English or numbers'
                ],
            }
        }),
        computed: {
            ...mapGetters({
                tasksArray: 'tasks/tasksArray',
                statusArray: 'tasks/statusArray',
            }),
            filterOptions: {
                get() {
                    return this.$store.getters['tasks/filterOptions'];
                },
                set(val) {
                    this.$store.commit('tasks/SET_FILTER_OPTIONS', val);
                }
            },
            calcActiveFilters() {
                let activeFiltersNumber = Object.values(this.filterOptions).length;
                Object.values(this.filterOptions).forEach(value => {
                    if (!value || !value.length) {
                        activeFiltersNumber--
                    }
                });
                return activeFiltersNumber;
            }
        },
        methods: {
            remove(item) {
                const index = this.filterOptions.taskStatus.indexOf(item);
                if (index >= 0) this.filterOptions.taskStatus.splice(index, 1);
            },
            getColorByStatus(status) {
                switch (status) {
                    case 'OPEN':
                        return 'warning';
                    case 'DONE':
                        return 'success';
                    default:
                        return 'info';
                }
            },
        },
    }
</script>
