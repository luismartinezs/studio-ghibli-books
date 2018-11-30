// fetch JSON object from API
async function asyncCall() {
    let url = 'https://ghibliapi.herokuapp.com/films';

    return fetch(url)
        .then((response) => response.json())
        .then((responseJson) => {

            return responseJson;

        })
        .catch((error) => {

            console.error(error);

        });

}

// create class Books / Movies and store each entry in an array

class Movie {
    constructor(title, description, director, producer, release_date, rt_score) {
        this.title = title;
        this.description = description;
        this.director = director;
        this.producer = producer;
        this.release_date = release_date;
        this.rt_score = rt_score;
    }
}

function makeMovies(arr) {
    let moviesArr = [];

    for (let i = 0; i < arr.length; i++) {
        moviesArr.push(
            new Movie(arr.title, arr.description, arr.director, arr.producer, arr.release_date, arr.rt_score)
        );
    }

    return moviesArr;
}

// export the data to be used as state by Redux

export { asyncCall , Movie , makeMovies };