var insert = function(intervals, newInterval) {
    let [newStart, newEnd] = newInterval;
    let output = [];
    let i = 0;
    
    while (i < intervals.length && newStart > intervals[i][1]) {
        output.push(intervals[i]);
        i++;
    }

    if (i === intervals.length) return [...intervals, newInterval];

    
    newStart = Math.min(newStart, intervals[i][0]);

    while (i < intervals.length && newEnd >= intervals[i][0]) {
        newEnd = Math.max(newEnd, intervals[i][1]);
        i++;
    }

    output.push([newStart, newEnd]);
    return output.concat(intervals.slice(i));


};

function merge_interval(intervals, newInterval) {
    if (intervals.length < 1) {
        return [newInterval];
    }
    
    let [newStart, newEnd] = newInterval;
    let output = [];

    let i = 0;

    while (i < intervals.length) {
        const [start, end] = intervals[i];
        // if no overlapping
        if (newEnd < start || newStart > end) {
            if (newEnd < start) {
                output = [...output, [newStart, newEnd], ...intervals.slice(i)];
                break;
            } else {
                output.push(intervals[i]);
                i++;
            }
            // complete
        } else if (newStart <= start && newEnd >= end) {
            i++;
        } else {
            // partial
            newStart = Math.min(newStart, start);
            console.log(newStart);
            newEnd = Math.max(newEnd, end);
            i++;
        }
    }

    if (i === intervals.length) {
        output.push([newStart, newEnd]);
    }

    return output;
}

function merge(intervals, newInterval) {
    if (intervals.length < 1) {
        return [newInterval];
    }
    
    let [newStart, newEnd] = newInterval;
    let output = [];

    let i = 0;

    while (i < intervals.length) {
        const [start, end] = intervals[i];
        // if no overlapping
        if (newEnd < start || newStart > end) {
            if (newEnd < start) {
                output = [...output, [newStart, newEnd], ...intervals.slice(i)];
                break;
            } else {
                output.push(intervals[i]);
                i++;
            }
            // complete
        } else if (newStart <= start && newEnd >= end) {
            i++;
        } else {
            // partial
            newStart = Math.min(newStart, start);
            newEnd = Math.max(newEnd, end);
            i++;
        }
    }

    if (i === intervals.length) {
        output.push([newStart, newEnd]);
    }

    return output;
}

function merge_different(intervals, newInterval) {
    const flattened = intervals.flat();
    const [newStart, newEnd] = newInterval;
    const output = [];
    let i = 0;
    let j = 0;
    while (i < flattened.length && j < flattened.length) {
        
        while (flattened[i] < newStart)i++;

        if (flattened[i] === newStart) {
            break;
        } else {
            flattened.splice(i, 0, newStart);
        }

        while (flattened[j] < newEnd) j++;

        if (flattened[j] === newEnd) {
            break;
        } else {
            flattened.splice(j, 0, newEnd);
        }
    }
    console.log(flattened);
    i = 0;
    let interval = [];
    while (i < flattened.length && flattened[i] < newStart) {
        interval.push(flattened[i]);
        if (i % 2 === 1 && i > 0) {
            output.push(interval);
            interval = [];
        }
        i++;
        

    }
    // let mergedInterval = []
    // if (i % 2 === 0) {
    //     mergedInterval.push(flattened[i]);
    // }

    // while (i)
    
}

console.log(merge_different([[1,3], [6, 9]], [10, 10]))
