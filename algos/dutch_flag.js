function dutch_flag_sort(balls) {
 
    let nextRed = 0;
    let nextBlue = balls.length - 1;
    
    // G B G G R B R G

    // G G G G R B | R b

    // r | G G G G B | R b

    // r | G G G G | R b b
    
    let i = 0;
    
    while (i <= nextBlue) {
        
        if (balls[i] === 'B') {
            [balls[i], balls[nextBlue]] = [balls[nextBlue], balls[i]];
            nextBlue--;
        } else if (balls[i] === 'R') {
            console.log('Found r at', i);
            [balls[i], balls[nextRed]] = [balls[nextRed], balls[i]];
            nextRed++;
            i++;
        } else {
            i++;
        }
        
    }
    
    return balls;
}

console.log(dutch_flag_sort(["G", "B", "G", "G", "R", "B", "R", "G"]))