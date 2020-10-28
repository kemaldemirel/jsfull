const numberOfFilms = +prompt('Сколько фильмов вы посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    geners: [],
    privat: false
};

for(let i = 0; i < 2; i++){
    const a = prompt("Один из проследних просмотренных фильмов?", ''),
          b = prompt("На сколько его оцениваете?", '');

    if(a != null && b != null && a != '' && b != '' && a.length < 50){
        personalMovieDB.movies[a] = b;
        console.log('done');
    }else{
        console.log('error');
        i--;
    }
    
}

if(personalMovieDB.count <= 10){
    console.log("просмотрено мало фильмов");
}else if(personalMovieDB.count > 10 && personalMovieDB.count < 30){
    console.log("Нормально так зыришь фильмецы");
}else if(personalMovieDB.count >= 30){
    console.log("Да ты киноман!");
}else{
    console.log("произошла  ошибка!");
}

console.log(personalMovieDB);

