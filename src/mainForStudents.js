const students = [
    {
        name: "Bob",
        age: 22,
        isMarried: true,
        scores: 85
    },
    {
        name: "Alex",
        age: 21,
        isMarried: true,
        scores: 90,
    },
    {
        name: "Nick",
        age: 20,
        isMarried: false,
        scores: 120
    },
    {
        name: "John",
        age: 19,
        isMarried: false,
        scores: 100
    },
    {
        name: "Helen",
        age: 20,
        isMarried: false,
        scores: 110
    },
    {
        name: "Ann",
        age: 20,
        isMarried: false,
        scores: 105
    },
];

const user = {
    name: "Bob",
    age: 23,
    friends: ["Alex", "Nick", "John"]
}

//1. Создайте поверхностную копию объекта user
let copyUser = user;


//Проверка:
// console.log(user===copyUser)- что должно быть в консоли? // true // в copyUser сидит таже ссылка что и в user
// console.log(user.friends===copyUser.friends)- что должно быть в консоли? // ссылка одна и таже в обоих случаях, поэтому true

//2. Полная (глубокая) копия объекта user
let deepCopyUser = {...user, friends: [...user.friends]};




//Проверка:
// console.log(user===deepCopyUser) - что должно быть в консоли? // false. мы создали новый объект.
// console.log(user.friends===deepCopyUser.friends) - false. копия глубокая, значит и friends тоже новый массив

//3. Поверхностная копия массива students
let copyStudents = students;

/*
console.log(copyStudents === students ) // true // в copyStudents сидит таже ссылка на тотже массив что и в students
console.log(copyStudents[2] === students[2]) /// true // ссылки одни и теже
*/


//4*. Полная (глубокая) копия массива students (map)
let deepCopyStudents = students.map(el => el = {...el});

//Проверка:
// console.log(deepCopyStudents === students ) - что должно быть в консоли? false - ссылки разные
// console.log(deepCopyStudents[2] === students[2]) - что должно быть в консоли? false - ссылки разные

// NB!!! Далее все преобразования выполняем не модифицируя исходный массив students
// Вывод результатов - в консоль


//////////////////////////
///////////////////////////
//////////////////////////
//////////////////////////
///////////////////////////
//////////////////////////



//5. Отсортируйте копию массива deepCopyStudents по алфавиту (sort)

const compare = (a, b)=>{ // для сортировки по возрастанию
    if(a.name <= b.name){
        return -1 //если порядок не надо менять
    }else{
        return 1 // если надо поменять местами
    }
}

let sortedByName = console.log([...deepCopyStudents].sort(compare));



//5a. Отсортируйте deepCopyStudents по успеваемости(лучший идёт первым)(sort)


let sortedByScores = [...deepCopyStudents].sort((a,b)=> a.scores <= b.scores ?  1 :  -1);
console.log(sortedByScores);

//6. Сформируйте массив студентов, у которых 100 и более баллов (filter)
let  bestStudents = students.filter(el => el.scores >= 100);
console.log(bestStudents)





/////////////////////////////////
/////////////////////////////////
/////////////////////////////////

//6a. Получите массив ("вырежьте") из трёх лучших студентов из массива deepCopyStudents (splice)
//https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/splice


let topStudents = deepCopyStudents.reverse().splice(3); // splice(0, 3) - удалит с 0 индекса 3 элемента
console.log(topStudents)
console.log(deepCopyStudents)






//6b. Объедините массивы deepCopyStudents и topStudents так,
//чтоб сохранился порядок сортировки (spread-оператор || concat)
let newDeepCopyStudents = [...deepCopyStudents].concat([...topStudents]).reverse();
console.log(newDeepCopyStudents)







//////////////////////////////////////////
//////////////////////////////////////////
//////////////////////////////////////////
//////////////////////////////////////////
//////////////////////////////////////////
//////////////////////////////////////////
//////////////////////////////////////////



//7. Сформируйте массив холостых студентов (filter)
let notMarriedStudents = students.filter(el => !el.isMarried);
console.log(notMarriedStudents)



//8. Сформируйте массив имён студентов (map)
let studentsNames = students.map(el => el.name);
console.log(studentsNames)


//8a. Сформируйте строку из имён студентов, разделённых
// - пробелом (join)
// - запятой (join)
let nameWithSpace = studentsNames.join(' ');
console.log(nameWithSpace)
let namesWithComma = studentsNames.join(', ');
console.log(namesWithComma)



//9. Добавьте всем студентам свойство "isStudent" со значением true (map)
let trueStudents = students.map(el => el = {...el, isStudent: true});
console.log(trueStudents)


//10. Nick женился. Выполните соответствующие преобразование массива students (map)
let studentsWithMarriedNick = students.map(el => el.name === "Nick" ? el = {...el, isMarried: true} : el);
console.log(studentsWithMarriedNick)


//11. Найдите студента по имени Ann (find)
let ann = students.find(el => el.name === "Ann");
console.log(ann)



//12. Найдите студента с самым высоким баллом (reduce)
// - c помощью reduce
// - *не используя методы массивов и Math.max()*



let best =(students)=>{
    for (let i = 0; i < students.length; i++) {
    if (students[i].scores === students.reduce((max, el) => max > el.scores ? max : el.scores, 0)){
        return students[i]
    }
}
}

let bestStudent = best(students)

console.log(bestStudent)

//13. Найдите сумму баллов всех студентов (reduce)

let sumScoresOfStudents = students.reduce((sc, el) => sc + el.scores, 0)
console.log(sumScoresOfStudents)

// И поднимаем руку!!!!




let scoresSum;
console.log(scoresSum)
// 14. Д.З.:
// Напишите функцию addFriends, которая принимает параметром массив students
// и добавляет в каждому студенту свойство "friends",
// значением которого является массив имён всех остальных студентов из массива students,
// за исключением собственного имени студента. Т.е. в друзьях у Боба Боба быть не должно.

/*



const addFriends = (students) => {
    let newStudents = []
    let finishArr = []
    for (let i = 0; i < students.length ; i++) {

        newStudents.push(students[i] = {...students[i], friends: students.map(el => el.name !== students[i].name ? el.name : 0)})
    }

    for (let i = 0; i < students.length ; i++) {
        finishArr.push(newStudents[i] = {...newStudents[i], friends: newStudents[i].friends.filter(el =>  el !== 0)})
    }
    return finishArr
}
*/



console.log(addFriends(students));







const addFriends2 = (students) => {
    let newStudents = []
      for (let i = 0; i < students.length ; i++) {

        newStudents.push(students[i] = {...students[i], friends: students.filter(el => el.name !== students[i].name)})
    }

    return newStudents
}

