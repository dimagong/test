async function DataFetch(onData) {
    let getRequest = await fetch('https://yalantis-react-school-api.yalantis.com/api/task0/users');
    let listUsers = await getRequest.json();
    onData(listUsers);
}
export default DataFetch;