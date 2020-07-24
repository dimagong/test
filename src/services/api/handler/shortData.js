const ShortDaraSort = (dataMonth) => {
    const shortData = dataMonth.filter(el => el[3] !== 'waste');
    shortData.sort((a, b) => a[0] - b[0]);
    console.log(shortData);
    return shortData;
}

export default ShortDaraSort;