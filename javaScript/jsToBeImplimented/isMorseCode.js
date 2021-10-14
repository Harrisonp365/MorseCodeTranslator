export const isMorseCode = (input) => {
    for(let i = 0; i < input.length; i++) {
        if(["/", "-", ".", " "].indexOf(input.charAt(i)) == -1) {
            return false;
        }
        return true;
    }
}

//try to allow the user to type in either morese or english with out a selection and just convert to opposite translation