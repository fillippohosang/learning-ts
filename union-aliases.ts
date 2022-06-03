type Combineable = number | string;


function combine
    (
    input1: Combineable, 
    input2: Combineable,
    resultConversation: 'as-number' | 'as-text'
    ){
    let result;
    if (typeof input1 === 'number' && typeof input2 === 'number') {
        result = +input1 + +input2;
    }else {
        result = input1.toString() + input2.toString();
    }
    return result
}

// function calculateAge(input1: number, input2: number){
//     const result = input1 - input2
//     return result;
// }

// const calculate = calculateAge(2022, 1999)
// console.log(calculate);


const combinedAges = combine(20, 20, 'as-number');
console.log(combinedAges);

const combinedStringAges = combine('20', '20', 'as-number');
console.log(combinedStringAges);

const combinedNames = combine('Kim', ' Dahyun', 'as-text');
console.log(combinedNames);