
//convert number of views and likes to readable format
export const convertToReadableFormat = (num) => {
    if(num>=1000000){
        return `${(num/1000000).toFixed(1)}M`
      }
      if(num>=1000){
        return `${(num/1000).toFixed(1)}K`
      }
        return num;
}

export const convertSeconds = (seconds) => {
    let hours = Math.floor(seconds / 3600);
    let minutes = Math.floor((seconds % 3600) / 60);
    let secondsLeft = Math.floor(seconds % 60);
    
    if(hours>0){
      if(hours<10){
        hours = `0${hours}`
      }
      return `${hours}:${minutes}:${secondsLeft}`
    }
    if(minutes>0){  
      if(minutes<10){
        minutes = `0${minutes}`
      }
        return `${minutes}:${secondsLeft}`
    }
   if(secondsLeft<10){
    secondsLeft = `0${secondsLeft}`
    }
    return `00:${secondsLeft}`
}

