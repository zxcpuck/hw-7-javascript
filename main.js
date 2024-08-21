// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)
// function User(id, name, surname, phone) {
//     this.id = id;
//     this.name = name;
//     this.surname = surname;
//     this.phone = phone;
// }
//
// let users = [
//     new User(0, 'kokos', 'kokosovich', '+4832094832'),
//     new User(1, 'kokos', 'kokosovich', '+4832094832'),
//     new User(2, 'kokos', 'kokosovich', '+4832094832'),
//     new User(3, 'kokos', 'kokosovich', '+4832094832'),
//     new User(4, 'kokos', 'kokosovich', '+4832094832'),
//     new User(5, 'kokos', 'kokosovich', '+4832094832'),
//     new User(6, 'kokos', 'kokosovich', '+4832094832'),
//     new User(7, 'kokos', 'kokosovich', '+4832094832'),
//     new User(8, 'kokos', 'kokosovich', '+4832094832'),
//     new User(9, 'kokos', 'kokosovich', '+4832094832'),
//     new User(10, 'kokos', 'kokosovich', '+4832094832'),
//     new User(11, 'clown', 'lower', '+4983290844'),
//     new User(12, 'puk', 'puk', '+75827349872994')
// ]
// console.log(users)
// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
// let userFilter = users.filter(user => user.id % 2 === 0);
// console.log(userFilter)
// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
// let sortedUsers = users.sort((a, b) => b.id - a.id);
// console.log(sortedUsers)

// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client
// class Client {
//     constructor(id, name, surname, email, phone, order = []) {
//         this.id = id;
//         this.name = name;
//         this.surname = surname;
//         this.email = email;
//         this.phone = phone;
//         this.order = order;
//     }
//
//     addNewProduct(title,price){
//         this.order.push(title,price);
//     }
//
//     logOrder(){
//         document.write(`${this.id}<br>${this.name},${this.surname},${this.email},${this.phone},${this.order}`)
//     }
// }
//
// let client1 = new Client(1,'kokos','kokosovich','ieroweirpwe@hmail.com','+4329874293492',['Iphone',50000])
// // console.log(client1)
// client1.logOrder()
// console.log()

// ---------------- Другий варіант :
// function Client(id, name, surname, email, phone, order) {
//     this.id = id;
//     this.name = name;
//     this.surname = surname;
//     this.email = email;
//     this.phone = phone;
//     this.order = order;
// }
//
// let clients = [
//     new Client(1,'Ruba','Korop','sfdsdfds@gmail.com','+4032849024',[{title:'Iphone',price:50000},{title:'lapptop',price:62462},{title:'table',price:14324}]),
//     new Client(1,'Ruba','Korop','sfdsdfds@gmail.com','+4032849024',[{title:'Iphone',price:50000},{title:'tv',price:14324}]),
//     new Client(1,'Ruba','Korop','sfdsdfds@gmail.com','+4032849024',[{title:'Iphone',price:50000},{title:'monitor',price:23435},{title:'clock',price:14324},{title:'wall',price:14324}]),
//     new Client(1,'Ruba','Korop','sfdsdfds@gmail.com','+4032849024',[{title:'Iphone',price:50000}]),
//     new Client(1,'Ruba','Korop','sfdsdfds@gmail.com','+4032849024',[{title:'Iphone',price:50000}]),
//     new Client(1,'Ruba','Korop','sfdsdfds@gmail.com','+4032849024',[{title:'Iphone',price:50000}]),
//     new Client(1,'Ruba','Korop','sfdsdfds@gmail.com','+4032849024',[{title:'Iphone',price:50000}]),
// ];
// console.log(clients)
//
// // - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
// let sortedClients = clients.sort((a,b)=> a.order.length - b.order.length)
// console.log(sortedClients)


// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
//     -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//     -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
//     -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//     -- changeYear (newValue) - змінює рік випуску на значення newValue
//     -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
// function Car(model, creator, year, maxSpeed, volume) {
//     this.model = model;
//     this.creator = creator;
//     this.year = year;
//     this.maxSpeed = maxSpeed;
//     this.volume = volume;
//
//     this.drive = function (){
//         console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`)
//     }
//
//     this.info = function (){
//         console.log(`\n Model - ${this.model} \n Producer - ${this.creator} \n Year of graduation - ${this.year} \n Max speed - ${this.maxSpeed}/h \n Engine volume - ${this.volume}`)
//     }
//
//     this.increaseMaxSpeed = function (newSpeed){
//         if (newSpeed > this.maxSpeed){
//             this.maxSpeed = newSpeed
//         }
//         return newSpeed
//     }
//
//     this.changeYear = function (newValue) {
//         if (newValue){
//             this.year = newValue
//         }
//         return newValue
//     }
//
//     this.addDriver = function (driver){
//         if (driver){
//             this.driver = driver
//         }
//     }
//
// }
//
//
// let car1 = new Car('BMV', 'Puk', 1994, 235, 2.5);
// car1.info()
// car1.increaseMaxSpeed(250)
// car1.info()
// car1.changeYear(2001)
// car1.info()
// car1.addDriver({name:'Kolya',age:45,status:true})
// console.log(car1)


//- (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//     -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
//     -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//     -- changeYear (newValue) - змінює рік випуску на значення newValue
//     -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
// class Car {
//     constructor(model, creator, year, maxSpeed, volume) {
//         this.model = model;
//         this.creator = creator;
//         this.year = year;
//         this.maxSpeed = maxSpeed;
//         this.volume = volume;
//     }
//
//     drive (){
//         console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`)
//     }
//
//     info (){
//         console.log(`\n Model - ${this.model} \n Producer - ${this.creator} \n Year of graduation - ${this.year} \n Max speed - ${this.maxSpeed}/h \n Engine volume - ${this.volume}`)
//     }
//
//     increaseMaxSpeed (newSpeed){
//         if (newSpeed > this.maxSpeed){
//             this.maxSpeed = newSpeed
//         }
//         return newSpeed
//     }
//
//     changeYear (newValue) {
//         if (newValue){
//             this.year = newValue
//         }
//         return newValue
//     }
//
//     addDriver (driver){
//         if (driver){
//             this.driver = driver
//         }
//     }
// }
//
// let car1 = new Car('BMV', 'Puk', 1994, 235, 2.5);
// car1.info()
// car1.increaseMaxSpeed(250)
// car1.info()
// car1.changeYear(2001)
// car1.info()
// car1.addDriver({name:'Kolya',age:45,status:true})
// console.log(car1)

// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// За допомоги циклу знайти яка попелюшка повинна бути з принцом.
// Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

class Cinderella {
    constructor(name,age,footFetish) {
        this.name = name;
        this.age = age;
        this.footFetish = footFetish;
    }
}

let cinderellasArray = [
    new Cinderella('Cinderella1',21,31),
    new Cinderella('Cinderella2',21,33),
    new Cinderella('Cinderella3',21,43),
    new Cinderella('Cinderella4',21,53),
    new Cinderella('Cinderella5',21,11),
    new Cinderella('Cinderella6',21,24),
    new Cinderella('Cinderella7',21,26),
    new Cinderella('Cinderella8',21,28),
    new Cinderella('Cinderella9',21,30),
    new Cinderella('Cinderella10',21,37)
]
class Prince{
    constructor(name,age,findFootFetish) {
        this.name = name;
        this.age = age;
        this.findFootFetish = findFootFetish
    }

    searchFootFetish() {
        let cinderella = cinderellasArray.find(foot => this.findFootFetish === foot.footFetish);
        console.log(cinderella)
        // for (const cinderella of cinderellasArray) {
        //     if (cinderella.footFetish === this.findFootFetish) {
        //         console.log(cinderella)
        //         return cinderella
        //     }
        // }
        // console.log('None'); // Якщо жодна Попелюшка не підходить
        // return 'None';
    }

}

// let try1 = new Prince('Clown',30,24,33)
// try1.searchFootFetish()
let prince1 = new Prince('Clown',30,31)
// let searchCinderella = prince.searchFootFetish()
// console.log(searchCinderella)
prince1.searchFootFetish()

// *Через Array.prototype. створити власний foreach, filter





