export const isMorseCode = (input) => {
    for(let i = 0; i < input.length; i++) {
        if(["/", "-", ".", " "].indexOf(input.charAt(i)) == -1) {
            return false;
        }
        return true;
    }
}