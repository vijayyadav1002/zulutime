const getUTCTime = (date) => {
    const isoDate = date.toISOString();
    return `${isoDate.substr(11, 5)}`;
};

export { getUTCTime };