export const setOption = (data, index) => {
  let select = document.getElementsByTagName('select')[index];
  select.options.length = 1;
  for (let i = 0; i < data.length; i++) {
    let option = document.createElement('option');
    option.value = data[i].id;
    option.innerHTML = data[i].name;
    select.appendChild(option);
  }
}

export const convertDate = date => {
  let convertDate = new Date(+date);
    return `${convertDate.getDate()}`+ 
      `${convertDate.toLocaleString('en', {month: 'long'})},`+
      `${convertDate.toLocaleString('en', {weekday: 'long'})}`.toLowerCase()
};

export const getCinemasByMovieAndDate = (movie, date, sessions) => {
  let cinemasByMovie = [];
  let check = 0;
  for(let i = 0; i < sessions.length; i++) {
    check = 0;
    if(convertDate(sessions[i].date) === date && 
      sessions[i].movie === movie) {
      if(cinemasByMovie.length === 0) {
        cinemasByMovie.push(sessions[i].cinema);
      } else {
        for(let j = 0; j < cinemasByMovie.length; j++) {
          if(cinemasByMovie[j] !== sessions[i].cinema) 
            check ++;
        }
        if (check === cinemasByMovie.length)
          cinemasByMovie.push(sessions[i].cinema);
      }
    }			
  }			
  return cinemasByMovie;	
}

export const getDatesByMovie = (movie, sessions) => {
  let datesByMovie = [];
  let check = 0;
  for(let i = 0; i < sessions.length; i++) {
    check = 0;
    if(sessions[i].movie === movie) {
      if(datesByMovie.length === 0)
        datesByMovie.push(convertDate(sessions[i].date));
      else {
        for (let j = 0; j < datesByMovie.length; j++) {
          if (datesByMovie[j] !== convertDate(sessions[i].date))
            check++
        }
        if (check === datesByMovie.length)
          datesByMovie.push(convertDate(sessions[i].date)); 
      }
    }
  }
  return datesByMovie;	
}

export const getTime = date => {
  let currentDate = new Date(+date);
  let hours = currentDate.getHours().toString().length === 2 ?
    `${currentDate.getHours()}` : `0${currentDate.getHours()}`;
  let minutes = currentDate.getMinutes().toString().length === 2 ?
    `${currentDate.getMinutes()}` : `${currentDate.getMinutes()}0`;
  return `${hours}.${minutes}`;	
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