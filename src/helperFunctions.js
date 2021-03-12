//generate an array of unique colors according to level

export const colorgen = (level) => {
    let colors = [];
    let numbergen = () => {
        return Math.floor(Math.random()*256);
    }
    for(let i = 0; i < level; i++){
        let r = numbergen();
        let g = numbergen();
        let b = numbergen();
        let color = `rgb( ${r}, ${g}, ${b} )`
        if(colors.indexOf(color) === -1){
            colors.push(color);
        } else {
            i--;
        };
    }
    return colors;
};

//select one random color from the array

export const random = (arr) => {
    let random = Math.floor(Math.random()*arr.length);
    return arr[random];
};

// calculate progress

export const points = (guess, maxGuesses) => {
    let perc = guess/maxGuesses*100;
    if(guess === 1) {
        return 20;
    } else if(perc < 34) {
        return 15;
    }else if( perc >= 34 && perc < 67){
        return 10;
    }else if (perc >= 67 && perc < 100) {
        return 5;
    } else {
        return 0;
    }
}



