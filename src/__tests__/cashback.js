import calculateCashback from "../cashback";
test('casback at sum: 500', () => {
    const result = calculateCashback(500);
    expect(result).toBe(0);
});

const dataList = [
    ['gold', 100000, 5000],
    ['silver', 10000, 200],
    ['regular', 500, 0],
]

const handler = test.each(dataList);

handler('testing cashback function with %s status and %i amount', (status, amount, expected) => {
    const result = calculateCashback(amount);
    expect(result).toBe(expected);
})