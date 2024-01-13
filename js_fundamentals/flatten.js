

function flattenArr(arr, output = []) {
    for (const value of arr) {
        if (!Array.isArray(value)) {
            output.push(value);
        } else {
            flatten(value, output);
        }
    }

    return output;
}

function flatten(value) {

    if (typeof value === 'object' && !!value && !Array.isArray(value)) {
        return flattenObj(value);
    }

    if (Array.isArray(value)) {
        return flattenArr(value);
    }

    return value;
}

function flattenArray(arr, output = []) {
    for (const value of arr) {
        output.push(flatten(value));
    }
    return output;
}


function flattenObj(obj) {
    for (const [key, value] of Object.entries(obj)) {
        const flattenedValue = flatten(value);
        obj[key] = flattenedValue;
    }
    return obj;
}

// console.log(flatten([1,2, [3,4], 5, [6, 7], 8]))
console.log(flattenObj({key: {val: true, nested: { key: false}}}));

const test = {
    key: {
        val: true,
        nested: {
            key: false
        }
    }
}

