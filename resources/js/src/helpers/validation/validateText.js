module.exports = text => {
    const regex = /^[0-9.,!?א-תa-zA-Z ]+$/;

    return regex.test(text);
};
