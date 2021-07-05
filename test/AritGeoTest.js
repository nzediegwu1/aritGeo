const assert = chai.assert;
describe('Test for Arithmatic Progression', () => {
    it('should return "Arithmetic"', () => {
        assert.equal(AritGeo([2, 6, 10, 14, 18]), 'Arithmetic');
    });
    it('should return "Arithmetic"', () => {
        assert.equal(AritGeo([3, 5, 7, 9, 11]), 'Arithmetic');
    });
});

describe('Test for NEGATIVE Arithmatic Progression', () => {
    it('should return "Arithmetic"', () => {
        assert.equal(AritGeo([-2, -6, -10, -14, -18]), 'Arithmetic');
    });
    it('should return "Arithmetic"', () => {
        assert.equal(AritGeo([-33, -30, -27, -24, -21]), 'Arithmetic');
    });
});

describe('Test for Geometric Progression', () => {
    it('should return "Geometric"', () => {
        assert.equal(AritGeo([2, 6, 18, 54, 162]), 'Geometric');
    });
    it('should return "Geometric"', () => {
        assert.equal(AritGeo([10000, 2000, 400, 80, 16]), 'Geometric');
    });
});

describe('Test for NEGATIVE Geometric Progression', () => {
    it('should return "Geometric"', () => {
        assert.equal(AritGeo([-2, 8, -32, 128, -512]), 'Geometric');
    });
    it('should return "Geometric"', () => {
        assert.equal(AritGeo([10000, -2500, 625, -156.25, 39.0625]), 'Geometric');
    });
});
describe('Test for neither Arithmetic nor Geometric Progression', () => {
    it('should return -1', () => {
        assert.equal(AritGeo([-2, 7, -2, 18, 12]), -1);
    });
    it('should return -1', () => {
        assert.equal(AritGeo([5, -35, 65, 152.15, 39.0625]), -1);
    });
});
describe('Test for Empty Array', () => {
    it('should return 0', () => {
        assert.equal(AritGeo([]), 0);
    });
    it('should return 0', () => {
        assert.equal(AritGeo([]), 0);
    });
});
