class Command {
//невошедшее в конструктор (дата поступления на службу, часть)
    dot;
    part;
//Конструктор (Фамилия, рота, звание, дата рождения)
    constructor(surname, company, rank, dob) {
        this.surname = surname;
        this.company =  company;
        this.rank = rank;
        this.dob = dob;
    }

    get dot() {
        return this.dot;
    }

    set dot(text) {
        this.dot = text;
    }

    get part() {
        return this.part;
    }

    set part(number) {
        this.part = number;
    }
}

//Дочерний класс №1
class OrganiOfWar extends Command {
//название округа, должность, выслуга лет, сумма надбавки
    constructor(surname, company, rank, dob, nameOfOkrug, position, vislugaOfTheYears, sumOfNadbavka) {
        super(surname, company, rank, dob);
        this.nameOfOkrug = nameOfOkrug;
        this.position = position;
        this.vislugaOfTheYears = vislugaOfTheYears;
        this.sumOfNadbavka = sumOfNadbavka;
    }
}

//Дочерний класс №2
class SlujbaPoContract extends Command{
//период договора, дата договора, номер протокола, сумма зарплаты
    constructor(surname, company, rank, dob, contractPeriod, contractDate, protokolNumber, sumOfZarplata) {
        super(surname, company, rank, dob);
        this.contractPeriod = contractPeriod;
        this.contractDate = contractDate;
        this.protokolNumber = protokolNumber;
        this.sumOfZarplata = sumOfZarplata;
    }
}

//Дочерний класс №3
class Nagrajdennie extends Command{
//название награды, премия, сумма надбавки
    constructor(surname, company, rank, dob, rewardName, premy, sumOfNadbavka) {
        super(surname, company, rank, dob);
        this.rewardName = rewardName;
        this.premy = premy;
        this.sumOfNadbavka = sumOfNadbavka;
    }
}

class Hranenie {
//Конструктор с незаполненным массивом
    constructor() {
        this.list = []
    }

//Добавляем военных в массив
    add(object) {
        this.list.push(object)
    }

//Выводим на экран добавленное
    show() {
        console.log(this.list)
    }

//Реализуем сортировку по фамилии
    sortBySurname() {
        console.log(this.list.sort(this.funcForSortBySurname));
    }

    funcForSortBySurname(x, y) {
        if(x.surname < y.surname) return -1
        if(x.surname > y.surname) return 1
        return 0
    }

//Реализуем сортировку по зарплате
    sortByZarplata() {
        const zarplataList = this.list.filter(this.funcForFilterByZarplata)
        console.log(zarplataList.sort(this.funcForSortByZarplata))
    }

    funcForSortByZarplata(x, y) {
        if(x.sumOfZarplata > y.sumOfZarplata) return -1
        if(x.sumOfZarplata < y.sumOfZarplata) return 1
        return 0
    }

    funcForFilterByZarplata(o) {
        return !!o.sumOfZarplata
    }
}

//создаем переменную для обращения к классу
let spisok = new Hranenie;

//Создаем несколько переменных с разными классами и параметрами
let novobranec = new Command ("Перепечко", 6, "рядовой", "01.01.2001");

//Отдельно обозначаем внеклассовые свойства
novobranec.dot = "01.01.2021";
novobranec.part = 666;

let praporshik = new OrganiOfWar ("Носов", 7, "прапорщик", "02.01.2001",
    "Ростовская обл.", "Генералиссимус", 3, 500);

praporshik.dot = "02.01.2021";
praporshik.part = 667;

let kontraktnik = new SlujbaPoContract ("Шматько", 8, "контрактник", "03.01.2001",
    50, "10.10.2010", 1337, 40000);

kontraktnik.dot = "03.01.2021";
kontraktnik.part = 668;

let veteranOfGerman = new Nagrajdennie ("Жмышенко", 9, "Старший", "04.04.1901",
    "За победу", 90000000, 1);

veteranOfGerman.dot = "03.01.1938";
veteranOfGerman.part = 669;

let kontraktnik2 = new SlujbaPoContract ("Бедолагов", 8, "контрактник", "11.01.2001",
    50, "10.10.2010", 1337, 10000);

kontraktnik2.dot = "03.01.1938";
kontraktnik2.part = 669;

//Добавляем переменные в класс
spisok.add(novobranec);
spisok.add(praporshik);
spisok.add(kontraktnik);
spisok.add(kontraktnik2);
spisok.add(veteranOfGerman);

//Выводим результат на экран
spisok.show(); //Несортированный полный список
spisok.sortBySurname(); //Сортировка по фамилии
spisok.sortByZarplata();//Сортировка по зарплате