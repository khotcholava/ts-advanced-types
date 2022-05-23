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
const foo = (name: string, age: number) => 'Hello';

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

type MyPick<T, K extends keyof T> = { [P in K]: T[P] }

type PickType = MyPick<Item, 'a' | 'b'>

// ! Readonly type

type MyReadonly<T> = { readonly [P in keyof T]: T[P] }

type ReadonlyType = MyReadonly<Item>


// ! Tuple to object

type TupleToObject<T extends readonly any[]> = {
    [P in T[number]]: P
}

const tuple = ['tesla', 'model 3', 'model X', 'model Y'] as const;
const arr = ['tesla', 'model 3', 'model X', 'model Y'];
type MyTuple = TupleToObject<typeof tuple>

// ! First of array

type FirstOfArray<T extends any[]> = T[number] extends never ? never : T[0]
type MyFirstOfArray = FirstOfArray<typeof arr>

// ! Length of Tuple
/*
    ? The point in this problem is that you need to use readonly. As you can see
    ? from as const in the case data, the passed value is a tuple type, which you cannot make any change on it.
    ? Since it is a tuple type, you need to add readonly to guarantee that the length of the array will not change.
*/

type TupleLength<T extends readonly any[]> = T['length']
type MyTupleLength = TupleLength<typeof tuple>

// ! If

type If<C, T, F> = C extends true ? T : F;
type MyIf = If<false, 1, 2>

// Concat

type Concat<T extends any[], U extends any[]> = [...T, ...U]
type MyConcat = Concat<[1, 2, 3], ['a', 'b', 'c']>

// ! Push

type Push<T extends any[], U> = [...T, U]
type MyPush = Push<[1, 2], 3>

// ! Exclude
type MyExclude<T, U> = T extends U ? never : T
type MyExcludeT = MyExclude<'a' | 'b' | 'c', 'a'>

// ! Includes
type MyIncludes<T extends any[], U> = U extends T[number] ? true : false
type MyIncludesT = MyIncludes<[boolean, 2, 3, 5, 6, 7], false>

// ! Parameters

type MyParameters<T> = T extends (...args: infer F) => any ? F : never
type MyParametersT = MyParameters<typeof foo>

// ! Unshift
type MyUnshift<T extends any[], U> = [U, ...T]
type MyUnshiftT = MyUnshift<[1, 2], 0>
