//Промисы и fetch
//Метод fetch отправляет запрос на сервер, чтобы получить с него данные (не работает в Node)
fetch('https://jsonplaceholder.typicode.com/todos/1')
//сначала выполняется метод then
.then(response => {
    console.log(response)
    return response.json()
})
//если данные получены, то then выполняется еще раз и показывает нам их (конкретно в этом then прописано как покажутся данные)
.then(json => console.log(json))
//если данные получить не удалось, то срабатывает метод catch (в нем можно прописать текст ошибки)
.catch(error => console.log(error.message))

//Вызов метода fetch внутри функции
//создадим функцию в которой метод fetch уже есть
const getData = (url) => 
    new Promise((resolve, reject) =>
        fetch(url)
            .then(response => response.json())
            .then(json => resolve(json))
            .catch(error => reject(error.message))
    
)

//и при дальнейшей работе можно использовать эту функцию и только один метод then для получения данных
//а так же ее можно экспортировать и импортировать в другие файлы
getData('https://jsonplaceholder.typicode.com/todos/3')
.then(data => console.log(data))
.catch(error => console.log(error.message))



