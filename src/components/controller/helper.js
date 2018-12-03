async function asyncCall() {
    let url = 'https://ghibliapi.herokuapp.com/films';

    return fetch(url)
        .then((response) => response.json())
        .then((responseJson) => {

            return responseJson;

        })
        .catch((error) => {

            throw (error);

        });

}

export { asyncCall };