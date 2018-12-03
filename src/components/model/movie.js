


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


// @param {arr} array of objects with properties title, description, director, producer, release_date and rt_score
// 
function makeMovies(arr) {
    let moviesArr = [];

    for (let i = 0; i < arr.length; i++) {
        moviesArr.push(
            new Movie(arr[i].title, arr[i].description, arr[i].director, arr[i].producer, arr[i].release_date, arr[i].rt_score)
        );
    }

    return moviesArr;
}


export { Movie, makeMovies };