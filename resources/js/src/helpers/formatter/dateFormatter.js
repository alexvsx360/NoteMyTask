import moment from 'moment'

export const formatDateToIsoDate = date => {
    return moment(date).format("YYYY-MM-DD")
};
export const formatDateToIsoTime = date => {
    return moment(date).format("HH:MM")
};

export const formatDateTimeTounixTimstemp = date => {
    return moment(date).unix()
};

export const formatDateToDateTimeLocalString = date => {
    return moment(date).format("YYYY-MM-DD HH:MM")
};





