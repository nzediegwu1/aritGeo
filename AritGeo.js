const AritGeo = (array) => {
    if (array.length === 0) {
        return 0;
    }
    const arithArray = [];
    const geomArray = [];
    for (let i = 0; i < array.length; i++) {
        if (i > 1) {
            const aritListElement = array[i] - array[i - 1];
            arithArray.push(aritListElement);
            const geomListElement = array[i] / array[i - 1];
            geomArray.push(geomListElement);
        }
    }
    const arithSet = new Set(arithArray);
    if (arithSet.size === 1) {
        return 'Arithmetic';
    }
    else {
        const geomSet = new Set(geomArray);
        if (geomSet.size === 1) {
            return 'Geometric';
        }
        else {
            return -1;
        }
    }
};