const submit = document.getElementById("submit")
const result = document.getElementById("result")
const numbers =  [1,   5,  10,  50,  100, 500,  1000]
const symbols = ['I', 'V', 'X', 'L', 'C', 'D',  'M']
const buffer =   [0,   1,   1,  10,   10, 100,  100]
let sequence = ''

submit.onclick = function() 
{
    let input = Number(document.getElementById("input").value)

    for ( let i = numbers.length; i >= 0; i--)
    {
        if (numbers[i] - input <= buffer[i])
        {
            sequence += symbols[i - 1] + symbols[i]
        }

    }
}