// Mapped types
/*
    * Basic form of mapped types is {[P in K]: T}
    ? P is the identifier that can be user it T
    ? K should be a type that can be assigned to 'string'
 */

// Lookup types

/*
* A lookup type, also called indexed access type allows access to the type of given key
? Similar to the way we access the value of the object "Obj[key]" But for types Item[P]
? keyof T is like all keys from T type
? ex: interface Person {
* name: string
* age: number
* }
? type PersonKey = keyof Person // 'name' | 'age'
* */

type Item = {
    a: string;
    b: number;
    c: boolean;
}

type T1 = {
    // ! for let P in ['x', 'y']
    // ? Where P is 'x' and 'y'
    [P in 'x' | 'y']: number
}
type T2 = {
    [P in 'x' | 'y']: P
}

type T3 = {
    // ! for let P in ['x', 'y']
    // ? Where P is is keys of Item object
    // ? Item[P] is like arr[i]
    [P in keyof Item]: Item[P]
}

// ! Pick type

type MyPick<T, K extends keyof T> = {[P in K]: T[P]}

type PickType = MyPick<Item, 'a' | 'b'>

// ! Readonly type

type MyReadonly<T> = {readonly [P in keyof T]: T[P]}

type ReadonlyType = MyReadonly<Item>
