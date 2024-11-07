const score: Array<number> = [1, 2, 3, 4, 5];
const names: Array<string> = ['a', 'b', 'c', 'd', 'e'];

// Normally
function indentityOne(val: boolean | number): boolean | number {
    return val;
}

// Generic
function identityTwo<Type>(val: Type): Type {
    return val;
}

// Shortcut version of generic
function identityThree<T>(val: T): T {
    return val;
}