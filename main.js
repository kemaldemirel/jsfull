const numberOfFilms = +prompt('Сколько фильмов вы посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    geners: [],
    privat: false
};

const a = prompt("Один из проследних просмотренных фильмов?", ''),
      b = prompt("На сколько его оцениваете?", ''),
      c = prompt("Один из проследних просмотренных фильмов?", ''),
      d = prompt("На сколько его оцениваете?", '');


personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB.movies);

