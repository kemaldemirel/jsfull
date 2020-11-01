let numberOfFilms;

function start(){    
    while(numberOfFilms == '' || null || isNaN(numberOfFilms)){
        numberOfFilms = +prompt('Сколько фильмов вы посмотрели?', '');
    }
}

start()

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    geners: [],
    privat: false
};


function rememberFilms(){
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
}

rememberFilms();

function detectedPersonalLevel(){
    if(personalMovieDB.count <= 10){
        console.log("просмотрено мало фильмов");
    }else if(personalMovieDB.count > 10 && personalMovieDB.count < 30){
        console.log("Нормально так зыришь фильмецы");
    }else if(personalMovieDB.count >= 30){
        console.log("Да ты киноман!");
    }else{
        console.log("произошла  ошибка!");
    }
}

detectedPersonalLevel();

function showMyDB(hidden){
    if(!hidden){
        console.log(personalMovieDB);
    }
}

console.log(showMyDB(personalMovieDB.privat));

function writeYourGenres(){
    for(let i = 1; i <= 3; i++){
        const geners = prompt(`Ваш любимый жанр под номером ${i}`);
        personalMovieDB.geners[i - 1] = geners;
    }
}

writeYourGenres();

