
const {getSizeWindow,shuffle,rand} = require ("./ulti");
describe("Ulti function", () => {
    test('getSizeWindow',()=>{
        expect(getSizeWindow({viewWidth:1000,viewHeight:800})).toStrictEqual({width:792,height: 792});
        expect(getSizeWindow({viewWidth:800,viewHeight:1000})).toStrictEqual({width:792,height: 792});
    })
    test('shuffle array',()=>{
        let array = [1,2,3,4,5];
        let newarray = shuffle(array);
        expect(newarray.length).toBe(array.length);
    })
    test('rand array',()=>{
        let max = 20;
        let result = rand(max)
        expect(result<=max && result>=0).toBeTruthy();

    })
});
