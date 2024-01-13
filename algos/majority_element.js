function majorityElement(array) {

    let i = 0;
    while (i < array.length) {
      let value = array[i];
      if (array[value - 1] < 0) {
        array[value - 1]-=1;
      } else {
        array[value - 1] = -1;
      }
      i++;
    }

    console.log(array);
    let min = Number.POSITIVE_INFINITY;
    let minIndex = -1;
    i = 0;
    while (i < array.length) {
      if (array[i] !== null && array[i] !== undefined) {
        if (array[i] < min) {
            min = array[i];
            minIndex = i;
        }
      }
      i++;
    }
    return minIndex + 1;
  }

  console.log(majorityElement([1,2,3,2,2,1,2]));