//импорт
import printPushok from './otgoloskiBazi1.mjs'
//можно переименовывать импортируемые переменные
import {sum, mult as multNumbers} from "./otgoloskiBazi2.mjs";

//объект
const objectA = {
//свойства объекта
    a:12,
    b:'ggg'
}

//копия объекта objectA, через которую можно влиять на свойства оригинала (мутация)
const objectOfA = objectA
objectOfA.b = 'gggg'
objectA.c = 66
objectA.c += objectA.a

//стрелочная функция с выводом первого объекта
const fu = () => {
//объекты со свойствами лучше выводить через свойство table
    console.table(objectA)
}

//оператор if else, в котором при произвольных условиях можно делать манипуляции со свойствами объектов и многим другим
if (objectA.c > objectA.a) {
    objectA.b = 'ggggg'
    fu()
} else {
    console.dir(objectA)
}

//снова пример с объектом и оператором if
const myCity = {
    city : 'Rostov',
    country : 'Russia'
}
//получение доступа к свойству объекта через точку. К ним же можно писать различные методы
if (myCity.city.length < 10) {
    myCity.popular = true
} else {
    myCity.popular = false
}
console.table(myCity)

//объект с вложенными объектами и функцией
const objectB = {
    d : 14,
    e : {
        f: 28,
        g: objectA.a * 3,
    },
    h () {
        return `В функции получилось вот такое число: ${objectB.d * objectB.e.g}`
    }
}
//что бы вывести функцию в объекте, нужно указать к ней четкий путь, а иначе она не покажется
//функцию в объекте нельзя вывести через 'table'
console.log(objectB, objectB.h())

//JAVASCRIPT OBJECT NOTATION - формат обмена данными
//1. запарсить
JSON.stringify(objectB)
//2. переслать кому-нибудь
//3. распарсить
JSON.parse(JSON.stringify(objectB))

//копия объекта objectB, которая не меняет основные свойства оригинала, но меняет вложенные объекты оригинала
//метод assign создает новые объекты: первый авгумент - пустой объект; второй аргумент - оригинал, который нужно скопировать
const objectB2 = Object.assign({}, objectB)
objectB2.e.f = 30;
objectB2.d = 11;
delete objectB2.h
console.table(objectB2)
//другая форма записи такой же копии (спрэд)
const objectB3 = {... objectB}
objectB3.d = objectB.d + objectB2.d
objectB3.h = 'тут была функция в оригинале'
console.table(objectB3)

//копия, которая АБСОЛЮТНО не влияет на оригинал, но пропала функция :(
//двойная конвертация через JSON
const objectB4 = JSON.parse(JSON.stringify(objectB))
objectB4.e.g = 'в оригинале число 36'
console.table(objectB4)

//безымянная функция
let myFn2 = function(a, b) {
    let c
     a += b
     c = a + b
     console.log(c)
     return c
}
myFn2(20, 30)

//стрелочная функция + оператор if else
const myFn = (aa, bb) => {
    let cc;
    aa++;
    cc = aa + bb;
    if (aa > bb) {
        console.log(`если вы видите эту запись, значит первый аргумент больше второго и вот результат: ${cc}`);
    }else{
        console.log(cc)
    }
    return cc
}
myFn(73, 43)

//стрелочная функция и функция отложенного вывода
const sto = () => {
    console.log('Ты приемный')
}
setTimeout(() => {
console.log('ща, погоди 5 сек')
}, 1000)
setTimeout(sto, 6000);

//сокращение стрелочных функций
//1
a => {
    console.log('some txt')
}
//2
(a, b) => a + b

//значение параметров функции по умолчанию
//1
const funcPoUmolch = (a, b = 1) => {
    console.log(a * b)
}
funcPoUmolch(3, 4)
funcPoUmolch(2)

//2
const funcNewPost = (post, addedAt = Date())/*текущая дата строкой*/ => ({ //если добавить скобки (), то функция НЕЯВНО вернет объект
    ...post, //таким образом выведутся сразу свойства объекта, без упоминания объекта
    addedAt, //это выглядит так addedAt: addedAt, так как у свойства и параметра одинаковое название
})
const firstPost = {
    id: 1,
    author: 'Andrew'
}
console.log(funcNewPost(firstPost))

//А так выглядит функция с ЯВНЫМ возвратом объекта
const funcNewPostFalse = (post, addedAt = Date()) => {
    return {
    ...post,
    addedAt,
    }
}

//ОБРАБОТКА ОШИБОК

//непойманная ошибка
const firstError = () => {
    throw new Error('Ha-ha error')
}
//ловим ошибку
try { /*сюда пишем функцию или переменнуюс ошибкой*/
    firstError()
} catch (error) { /*здесь пишем замену этой ошибки на что-угодно работающее*/
//  console.error(error) - стандартный показ ошибки
    console.log(error.message)
}
console.log('Ох уж эти ошибки')

//МАССИВЫ

//Формат записи №1
const myArray = [1, 2, 3]
//№2
const myArray2 = new Array(1, 2, 3)
//2 одинаковых массива не будут равны, потому что массив - это объект, а у объекта ссылочный тип памяти
//это значит, что 2 одинаковых массива будут иметь разные ссылки
console.log(myArray === myArray2)
//а если сравнить объекты, у которых, по сути, одна ссылка, то они будут равны
const myArray3 = myArray
console.log(myArray3 === myArray)

//добавление и изиенение элементов массива
myArray[3] = 4
myArray[1] = 'два'
console.log(myArray)

//добавить элементы в конец массива
myArray.push(5)
//метод .pop удаляет последний элемент массива
myArray.pop()
//можно сделать переменную с удаленным элементом массива
let cutLastElement = myArray.pop() //4
console.log(cutLastElement)

//добавить элементы в начало массива
myArray.unshift(0, 0)
//удалить элемент из начала массива
myArray.shift()
//также можно присвоить результат .shift переменной
const cutFirstElement = myArray.shift() //0

myArray[1] = 2

//метод .forEach перебирает элементы массива, но не меняет его. Выводит каждый элемент отдельно
myArray.forEach(a => console.log(a * 2))
//если присвоим массив с методом forEach переменной, то она вернет результат undefined, потому что .forEach с неявной функцией
const myArrayPer = myArray.forEach(a => console.log(a * 2))
console.log(myArrayPer)

//метод .map возвращает новый массив (неявный возврат)
let myArrayPer2 = myArray.map(a => a * 3)
console.log(myArrayPer2)
//явный возврат
myArrayPer2 = myArray.map((a) => {
    return a * 3
})
console.log(myArrayPer2)
//через анонимную функцию
myArrayPer2 = myArray.map(function(a)  {
    return a * 3
})
console.log(myArrayPer2)

//деструктуризация объектов
const userProfile1 = {
    name1 : 'andrew',
    commentsNum : 43,
    hasSignedAgreement: true,
}
//делаем из свойств переменные. Переменные присваивают свойства объекта по общему названию
const {name1, commentsNum, hasSignedAgreement} = userProfile1
console.log(name1, commentsNum, hasSignedAgreement)

//деструктуризация массивов
const cars = new Array('Nissan', 'Toyota', 'Mitsubishi')
//используем квадратные скобки. Переменные присваивают значения массива по порядку написания
const [car1, car2, car3] = cars
console.log(car3, car1, car2)

//деструктуризация в функциях
const userInfo = ({name1, commentsNum}) => { //221 строка
    if(!commentsNum){
        return `${name1} has no comments`
    }
    return `${name1} has ${commentsNum} comments`
}
console.log(userInfo(userProfile1))

//Оператор switch
const month = 4

switch (month) {
    case 1:
      console.log('Январь')
      break
    case 2:
      console.log('Февраль')
      break
    case 3:
      console.log('Март')
      break
    case 4:
      console.log('Апрель')
      break
    case 5:
      console.log('Май')
      break
    default:
      console.log('Летние и осенние месяцы')
}

//Тернарный оператор - [Условие ? Выражение 1 : Выражение 2]
//Пример 1
const value0 = 12

value0
    ? console.log('true')
    : console.log('false')

//Пример 2
const myFuncAgain = (a, b) => {
    console.log(a == b)
}

const value1 = 16
const value2 = '16'

value1 === value2
    ? console.log(false)
    : myFuncAgain(value1, value2)

////Пример 3
let value3 = 11
console.log(value3 <= value1 ? value3 : -value3)
//можно присваивать выражение с тернарным оператором переменной
const value4 = value3 <= value1 ? value3 : -value3
console.log(value4)

//Циклы [for, for...in..., while, do...while, for...of...]
/*Цикл for (начальная инструкция; условие; итерационное действие) {
    блок кода, выполняемый на каждой итерации
}*/
for (let i = 0; i < 4; i++){
    console.log(i)
}

//for в работе с массивами
const myArray4 = [2, 1, 0]

for (let i = 0; i < myArray4.length; i++) {
    console.log(myArray4[i])
}

//forEach в работе с массивами (еще один пример)
myArray4.forEach((element, index) => {
    console.log(element, index)
})

//Цикл While - позволяет выполнять блок кода, пока условие правдиво
/* while (Условие) {
    блок кода, выполняемый на каждой итерации
} */
let i = 0
while (i < 4) {
    i++
    console.log(i)
}

//Цикл do while
/* do {
    блок кода, выполняемый на каждой итерации
} while (условие) */
do {
    i++
    console.log(i)
} while (i < 4) /* из прошлого примера i стал равен 4-м! Цикл запустится хотя бы один раз, даже если условия не выполнены */

//Цикл for in - перебирает все свойства объекта
/* for (key in Object) {
    действия с каждым свойством объекта
    значения свойства Object[key]
} */
const zebraObject = {
    vid: 'Млекопитающее',
    old: 10,
    kopita: true
}

for (const key in zebraObject) {
    console.log(key + ':', zebraObject[key])
}

//то же самое, только через forEach
//Object.keys - перебирает ключи объекта (названия свойств). Конвертирует объект в массив
Object.keys(zebraObject).forEach(key =>{
    console.log(key + ':', zebraObject[key])
})
//Object.values - перебирает свойства объекта. Конвертирует объект в массив
Object.values(zebraObject).forEach(value => {
    console.log(value)
})

//for In для массивов (уже есть .forEach(), так что это не рекомендуется)
const myArray5 = [false, 10, 'abc', null]

for (const a in myArray5) {
    console.log(myArray5[a])
}

//Цикл for of
/* for (Element of Iterable) {
    действия с определенным элементом
} */

//for of для строк
const sky = 'sky'
for (const a of sky) {
    console.log(a)
}
//for of для массивов
const skyArray = ['helicopter', 'bird', 'god']

for (const a of skyArray) {
    console.log(a)
}

//но для массивов всегдп лучше forEach!
skyArray.forEach(a => {
    console.log(a)
})

//for of НЕ ДЛЯ ОБЪЕКТОВ! Объекты - это не итрируемый элемент

//Экспорт и импорт - импорты всегда пишутся на первых строках файла
printPushok()

sum(2,3)
multNumbers(2, 3)