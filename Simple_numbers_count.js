//Ввод: натуральное число n
//Вывод: количество простых чисел строго меньше n

const n = Math.floor(Math.random() * 100)
console.log(n)

let arI = []
let count = 0

for (let i = 2; i < n; i++) {
    let flag = 1;

    for (let y = 2; (y < i) && (flag == 1); y++) {
       if (i % y == 0) {
           flag = 0
        }
    }

   if (flag == 1) {
       count++
       arI.push(i)
       //console.log(i)
    }

}

console.log(arI.length)
console.log(count)