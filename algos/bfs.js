function bestSeat(seats) {
    let best = -1;
    let maxSpace = 0;
    
    let left = 0;
    let right = 1;
  
    while(right < seats.length) {

      while(seats[right] === 0) {
        right++;
        continue;
      }

      console.log('left', left, 'right', right)
  
      let space = right - left - 1;
      
      if (space > maxSpace) {
        maxSpace = space;
  
        if (space % 2 === 0) {
          best = left + (space / 2);
        } else {
          best = left + Math.ceil(space/2);
        }
      }
  
      left = right;
      right++;
    }
  
    return best;
    
  }

  console.log(bestSeat([1,0,1,0,0,0,1]))