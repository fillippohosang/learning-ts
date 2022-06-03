// const person:{
//     name: String;
//     age: number;
// } = {
// const person = {
//     name : 'Dahyun',
//     age : 22,
//     positions : ['Main Dancer', 'Lead Vocal'],
//     role: [1, 'member']
// };

// person.role.push('lead');
// person.role[1]= 10;

enum Role {ADMIN, USER, AUTHOR}

const person = {
    name : 'Dahyun',
    age : 22,
    positions : ['Main Dancer', 'Lead Vocal'],
    role: Role.USER
};

let favoritePosition : string[];
favoritePosition = ['Lead Vocal'];

console.log(person.name);

for (const position of person.positions){
    console.log(position)
}

if (person.role === Role.USER){
    console.log(person.name + ' is user')
}