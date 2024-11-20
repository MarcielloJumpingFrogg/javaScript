const submit = document.getElementById("submit")
const result = document.getElementById("result")
const numbers =  [1,   5,  10,  50,  100, 500,  1000]
const symbols = ['I', 'V', 'X', 'L', 'C', 'D',  'M']
const buffer =   [0,   1,   1,  10,   10, 100,  100]
let sequence = ''

submit.onclick = function() 
{
    let input = Number(document.getElementById("input").value)

    for ( let i = numbers.length; i >= 0 && input != 0; i--)
    { 
        while(numbers[i] - input <= 0)
        {
            sequence += symbols[i];
            input -= numbers[i];
        }
        
        if(numbers[i] - input <= buffer[i])
        {
            let ind = numbers.indexOf(buffer[i]);
            sequence += symbols[ind] + symbols[i];
            input -= (numbers[i] - buffer[i]);
        } 
    }
    result.innerHTML = sequence   
}