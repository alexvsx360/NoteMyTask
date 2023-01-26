
export const validateIsraeliDate = date => {
    // this is a super basic regex and only validates the logical format e.g dd/mm/yyyy
    // this will take dates like 31/02/0000
    const regex = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[012])\/\d{4}$/;
    return regex.test(date);
};