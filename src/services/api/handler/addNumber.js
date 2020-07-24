const AddNumberPerson = (dataMonth) => {
    dataMonth.forEach((el, i) => {
        let count = 0;
        dataMonth.forEach((el_data, j) => {
            if (el[0] === el_data[0]) {
                count++;
                if (i < j) {
                    el_data[3] = 'waste';
                }
            }
        })
        el[2] = count;
    })
}
export default AddNumberPerson;