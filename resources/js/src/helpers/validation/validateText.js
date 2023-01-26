module.exports = text => {
    const regex = /^[0-9א-תa-zA-Z ]+$/;

    return regex.test(text);
};
