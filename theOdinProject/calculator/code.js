let btn = document.querySelectorAll(".num"); 
const opBtn = document.querySelectorAll(".operator");


let input = ['', ''];
let order = 0;
let point = false;

let number = [ , ];

/* 
const operation = {
    '+': lambda x, y: x + y, 
    '-': (a, b) => a - b,
} */

function ope(sign, num1, num2)
{
    let number1 = Number(num1)
    let number2 = Number(num2)
    if(sign == '+')
    { 
        return number1 + number2;
    }
    if(sign == '-')
    {
        return number1 - number2;
    }
    if(sign == '*')
    {
        return number1 * number2;
    }
    if(sign == '/')
    {
        if(number2 == 0)
        {
            alert("Can't divide by 0");
            return number1;
        }
        else
        {
            return number1 / number2;
        }
    }
}


btn.forEach(element => { 
    element.onclick = function() {
        if(point == false)
        { 
            if(element.innerText == '.')
            {
                point = true
                if(input[order][0] == undefined)
                    input[order] = 0;
            }    

            write(element)
        }    
        else{
            if(element.innerText != '.')
            { 
                write(element)
            }

        }

    }
}); 

function write(n)
{
    input[order] += (n.innerText) 
}



let currentOperator = '';

opBtn.forEach(element => {
    element.addEventListener("click", function() 
    { 

        if(order == 1)
        {
            input[0] = String(ope(currentOperator, input[0], input[1]))
            input[1] = ''
            console.log(input)
            currentOperator = element.innerText
        }
            
        if(order == 0)
        {
            order++; 
            currentOperator = element.innerText;
        }

        
    })
});


// need to make it repeatable for all the signs 

/* 

sum.addEventListener("click", function () 
{
    close() 
    if (order == 0)
    {
        order++; 
    } 
})

 */