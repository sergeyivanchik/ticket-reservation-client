export const convertDate = date => {
  let convertDate = new Date(+date);
    return `${convertDate.toLocaleString('en', {day: 'numeric'})} `+ 
      `${convertDate.toLocaleString('en', {month: 'long'})}, `.toLowerCase() +
      `${convertDate.toLocaleString('en', {weekday: 'long'})}`.toLowerCase()
};

export const getCinemasByMovieAndDate = (movie, date, sessions) => {
  let cinemasByMovie = [];
  for(let i = 0; i < sessions.length; i++) {
    if(convertDate(sessions[i].date) === date && 
      sessions[i].movie === movie) 
        cinemasByMovie.push(sessions[i].cinema); 
    }
  return cinemasByMovie.filter((item, pos) => 
    cinemasByMovie.indexOf(item) === pos);	
}

export const getDatesByMovie = (movie, sessions) => {
  let datesByMovie = [];
  for(let i = 0; i < sessions.length; i++) {
    if(sessions[i].movie === movie) 
        datesByMovie.push(convertDate(sessions[i].date));
  }
  return datesByMovie.filter((item, pos) => 
    datesByMovie.indexOf(item) === pos);	
}

export const getTime = date => {
  let currentDate = new Date(+date);
  return `${currentDate.toLocaleString('ru', {hour:'2-digit', minute:'2-digit'})}`;	
}

export const getTimesByMovieAndDateAndCinema = (movie, date, cinema, sessions) => {
  let timesByMovie = [];
  for(let i = 0; i < sessions.length; i++ )
    if(convertDate(sessions[i].date) === date &&
      cinema === sessions[i].cinema && 
      movie === sessions[i].movie
      ) 
      timesByMovie.push({
        time : getTime(sessions[i].date), 
        hall : sessions[i].hall, 
        id :sessions[i].id
      });
  return timesByMovie;
}

export const sortTime = masTime => {
  let result = [];
  for ( let i = 0; i < masTime.length; i++ )
      result[i] = masTime[i];
  for(let j = 0; j < result.length-1; j++)
    for(let i = 0; i < result.length-1; i++) {
      if(result[i].time.split('.')[0] > result[i+1].time.split('.')[0]) {
        let change = result[i];
        result[i] = result[i+1];
        result[i+1] = change;
      } else if (result[i].time.split('.')[0] === 
        result[i+1].time.split('.')[0]
        ) {
        if(result[i].time.split('.')[1] > result[i+1].time.split('.')[1]) {
          let change = result[i];
          result[i] = result[i+1];
          result[i+1] = change;
        }
      }
    }
  return result;	
}