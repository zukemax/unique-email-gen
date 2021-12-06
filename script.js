// const employees = [
//     {
//         userId: 1,
//         name: 'Hemant',
//         occupation: 'Frontend Developer',
//         age: 25,
//         salary: 99
//     },{
//         userId: 2,
//         name: 'Mrityunjay',
//         occupation: 'Ui Developer',
//         age: 24,
//         salary: 88
//     },
// ]
// for(let employee for employees){
//     console.log(employee.name)
// }

const emailField = document.getElementById('emailField');
const generateList = document.getElementById('generateList');
const number = document.getElementById('number');
let emailArr = [];

function emailSpliter(){
    emailArr.push(emailField.value)
    console.log(emailArr);

    for(let i = 0; i<number.value; i++){
        emailArr.push(emailField.value + '+' + (i+1) + '@gmail.com')
    }

    for(let i = 0; i < emailArr.length; i++){
        print(emailArr[i])
    }
}

function print(data){
    generateList.innerHTML += '<li>'+ data + '</li>';
}