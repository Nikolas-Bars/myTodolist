import {div, mult, reducer, sub, sum} from "./tasks";

test("sum of two number",()=>{

    const a = 10
    const b = 20

    let c = sum(a,b)

    expect(c).toBe(30)
})

test("sub of two number",()=>{

    const a = 10
    const b = 20

    let c = sub(a,b)

    expect(c).toBe(-10)
})

test("mult of two number",()=>{

    const a = 10
    const b = 20

    let c = mult(a,b)

    expect(c).toBe(200)
})

test("div of two number",()=>{

    const a = 20
    const b = 10

    let c = div(a,b)

    expect(c).toBe(2)
})

test("test reducer with 'SUM' action",()=>{

    const a = 20
    const b = 10

    let x = reducer(5, {type: 'SUM', num: 15})

    expect(x).toBe(20)
})

test("test reducer with 'DIV' action",()=>{

    const a = 20
    const b = 10

    let x = reducer(100, {type: 'DIV', num: 10})

    expect(x).toBe(10)
})

test("test reducer with 'MULT' action",()=>{

    const a = 20
    const b = 10

    let x = reducer(100, {type: 'MULT', num: 10})

    expect(x).toBe(1000)
})

test("test reducer with 'SUB' action ",()=>{

    const a = 20
    const b = 10

    let x = reducer(100, {type: 'SUB', num: 10})

    expect(x).toBe(90)
})