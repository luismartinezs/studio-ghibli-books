// fetch JSON object from API
async function asyncCall() {
    let url = 'https://ghibliapi.herokuapp.com/films';

    return fetch(url)
        .then((response) => response.json())
        .then((responseJson) => {

            return responseJson;

        })
        .catch((error) => {

            throw(error);

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
    // console.log('arr:',arr);

    for (let i = 0; i < arr.length; i++) {
        // console.log(arr[i]);
        moviesArr.push(
            new Movie(arr[i].title, arr[i].description, arr[i].director, arr[i].producer, arr[i].release_date, arr[i].rt_score)
        );
    }

    return moviesArr;
}

// export the data to be used as state by Redux

export { asyncCall , Movie , makeMovies };