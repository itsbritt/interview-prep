
// function curry(cb) {
//     const curriedCb = (...args) => {
//         if (args.length === 0) {
//             return cb();
//         }

//         return (...otherArgs) => {
//             if (otherArgs.length === 0) {
//                 return cb(...args);
//             }

//             return curriedCb(...args, ...otherArgs);
//         }
//     }

//     return curriedCb;
// }

function curry(cb) {

    return function curriedCb(...args) {
        if (args.length >= cb.length) {
            return cb.apply(this, args);
        }
        return function(...moreArgs) {
            return curriedCb.apply(this, [...args, ...moreArgs]);
        }
    }
}

function add(a, b, c) {
    return a + b + c;
}

const curriedAdd = curry(add);
console.log(curriedAdd(1,2)());