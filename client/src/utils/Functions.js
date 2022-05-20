
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
