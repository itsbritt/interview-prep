// var merge = function(intervals) {
//     // overlapping if start is less than or equal to end
//      if (intervals.length < 2) {
//          return intervals;
//      }
 
//      intervals.sort((a, b) => a[0] - b[0]);
 
     
 
     
 
//  };

var merge = function(intervals) {
    // overlapping if start is less than or equal to end
    if (intervals.length < 2) {
        return intervals;
    }

    intervals.sort((a, b) => a[0] - b[0]);

    return intervals.reduce((acc, curr, i) => {
        if (i === 0) {
            return [...acc, curr];
        }

        const [startPrev, endPrev] = acc[acc.length - 1];
        const [startCurr, endCurr] = curr;

        if (startCurr <= endPrev) {
            acc[acc.length - 1] = [startPrev, endPrev >= endCurr ? endPrev : endCurr];
            return acc;
        }

        return [...acc, curr];

    },[]);

};

console.log(merge([[1,3],[2,6],[8,10],[15,18]]));