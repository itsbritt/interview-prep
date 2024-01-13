function check_if_sum_possible(arr, k) {

    // Write your code here.
    let answer = false;
    function add(sum, i, slate) {
        if (sum === k && slate.length > 0) {
            answer = true;
            return;
        }

        if (i === arr.length) {
            return;
        }
        
        
        sum+=arr[i];
        add(sum, i + 1, [...slate, arr[i]]);
        sum-=arr[i];
        add(sum, i + 1, [...slate]);
    }
    
    add(0, 0, []);
    return answer;
}

console.log(check_if_sum_possible([-2, -3, 1], -8));