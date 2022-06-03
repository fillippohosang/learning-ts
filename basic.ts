function add(n1: number, n2: number, showResult: boolean, phrase: string){
    //Vanila JS
    // if (typeof n1 !== 'number' || typeof n2 !== 'number'){
    //     throw new Error ('Incorect Value!')
    // }
    const result = n1 + n2; 
    if (showResult) {
        console.log(phrase + result);
    }else {
        return result;
    }
}

const number1 = 2;
const number2 = 1.77;
const printResult = true;
const resultPhrase = 'Your GPA : ';

add(number1, number2, printResult, resultPhrase);