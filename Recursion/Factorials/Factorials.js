const fact = (n) => n > 1 ? n * fact(n - 1) : 1;

/*

    F(4) = 4 . f(3) . f(2) . f(1)
    F(3) = 3 . f(2) . f(1)
    F(2) = 2 . f(1)
    F(1) = 1

    F(2) = 2
    F(3) = 3 . 2 . 1 = 6
    F(4) = 4 . 6 . 2 . 1 = 48

*/

console.log(fact(4));
console.log(fact(8));
console.log(fact(6));