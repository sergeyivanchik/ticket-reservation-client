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
  let convertDate = new Date(+date)
    return `${convertDate.getDate()}`+ 
      `${convertDate.toLocaleString('en', {month: 'long'})},`+
      `${convertDate.toLocaleString('en', {weekday: 'long'})}`.toLowerCase()
};

export const getCinemasByMovieAndDate = (movie, date, dateMas) => {
  let cinemasByMovie = [];
  let check = 0;
  for(let i = 0; i < dateMas.length; i++) {
    check = 0;
    if(convertDate(dateMas[i].date) === date && 
      dateMas[i].movie === movie) {
      if(cinemasByMovie.length === 0) {
        cinemasByMovie.push(dateMas[i].cinema);
      } else {
        for(let j = 0; j < cinemasByMovie.length; j++) {
          if(cinemasByMovie[j] !== dateMas[i].cinema) 
            check ++;
        }
        if (check === cinemasByMovie.length)
          cinemasByMovie.push(dateMas[i].cinema);
      }
    }			
  }			
  return cinemasByMovie;	
}

export const getDatesByMovie = (movie, dateMas) => {
  let datesByMovie = [];
  let check = 0;
  for(let i = 0; i < dateMas.length; i++) {
    check = 0;
    if(dateMas[i].movie === movie) {
      if(datesByMovie.length === 0)
        datesByMovie.push(convertDate(dateMas[i].date));
      else {
        for (let j = 0; j < datesByMovie.length; j ++) {
          if (datesByMovie[j] !== convertDate(dateMas[i].date))
            check++
        }
        if (check === datesByMovie.length)
          datesByMovie.push(convertDate(dateMas[i].date)); 
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

export const getTimesByMovieAndDateAndCinema = (movie, date, cinema, dateMas) => {
  let timesByMovie = [];
  for(let i = 0; i < dateMas.length; i++ )
    if(convertDate(dateMas[i].date) === date &&
      cinema === dateMas[i].cinema && 
      movie === dateMas[i].movie
      ) 
      timesByMovie.push({
        time : getTime(dateMas[i].date), 
        hall : dateMas[i].hall, 
        id :dateMas[i].id
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