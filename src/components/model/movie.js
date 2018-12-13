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
    return arr.map(
      item =>
        new Movie(
          item.title,
          item.description,
          item.director,
          item.producer,
          item.release_date,
          item.rt_score
        )
    );
  }
  
  export { Movie, makeMovies };