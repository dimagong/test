const NumberAndNameMounth = (data) => {
    return data.map((el) => {
        let sec = Date.parse(el.dob);
        let setObj = new Date(sec);
        let numberMonth = setObj.getMonth();
        let nameMonth = setObj.toLocaleString("en-US", { month: 'long' });
        return [numberMonth, nameMonth];
    })
}

export default NumberAndNameMounth;