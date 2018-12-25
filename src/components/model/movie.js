class Movie {
  constructor({
    title,
    description,
    director,
    producer,
    release_date,
    rt_score,
    // This adds some variability in the default retailPrice, otherwise this template is too boring :)
    retailPrice = `${19.95 + Math.floor(Math.random() * 10) - 5}€`
  } = {}) {
    this.title = title;
    this.description = description;
    this.director = director;
    this.producer = producer;
    this.release_date = release_date;
    this.rt_score = rt_score;
    this.retailPrice = retailPrice;
  }
}

// @param {arr} array of objects with properties title, description, director, producer, release_date and rt_score
//
function makeMovies(arr) {
  return arr.map(
    item =>
      new Movie({
        title: item.title,
        description: item.description,
        director: item.director,
        producer: item.producer,
        release_date: item.release_date,
        rt_score: item.rt_score,
        retailPrice: item.retailPrice
      })
  );
}

export { Movie, makeMovies };
