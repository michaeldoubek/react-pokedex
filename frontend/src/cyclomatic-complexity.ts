function tooComplex(someInput: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10) {
    if (someInput === 1) return 1;
    if (someInput === 2) return 2;
    if (someInput === 3) return 3;
    if (someInput === 4) return 4;
    if (someInput === 5) return 5;
    if (someInput === 6) return 6;
    if (someInput === 7) return 7;
    if (someInput === 8) return 8;
    if (someInput === 9) return 9;
    if (someInput === 10) return 10;

    return 'not such case';
}

export default tooComplex;
