const ColorApp = (el) => {
    switch (true) {
        case (el >= 0 && el <= 2):
            return 'gray';
        case (el > 2 && el <= 6):
            return 'blue';
        case (el > 6 && el <= 10):
            return 'green';
        case (el > 10):
            return 'red';
        default:
            break;
    }
}

export default ColorApp;
