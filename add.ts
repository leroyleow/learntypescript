function add(x:number, y:number): number{
    return x + y;
}

const first = {property: 'value'};
const second = false;
const result = add(first, second);

const result2 = add(10, 15)

const result3: string = add(10, 15)