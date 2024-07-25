function capitalize(char) {
    if (char.length === 0) return 'Not a character';
    const firstChar = char.charAt(0).toUppercase();
    const restofChar = char.slice(1).toLowercase();
    return firstChar + restofChar;
}

function capitalize(char) {
    const firstIndex = char.charAt(0).toUpperCase();
    return firstIndex;
}