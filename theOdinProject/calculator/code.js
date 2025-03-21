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
    console.log(sign)
    if(sign == '+')
    {
        console.log(num1 + num2)
        return num1 + num2;
    }
}


btn.forEach(element => { 
    element.onclick = function() {
        if(point == false)
        { 
            write(element)
            if(element.innerText == '.')
                point = true 
        }    
        else{
            if((point == true) && (element != '.'))
            {
                write(element)
            }

        }

    }
}); 

function write(n)
{
    input[order] += (n.innerText) 
    console.log(input)
}

//close deve essere attivato da: +; /; -; *; e =
function close()
{
    number[order] = Number(input[order])
    console.log(input)
    console.log(number)
}


opBtn.forEach(element => {
    element.addEventListener("click", function() 
    {
        let currentOperator = '';
        close()
        if(order == 0)
        {
            order++;
            currentOperator = element.innerText;
        }
        else
        {
            if(order == 1)
            {
                console.log(currentOperator)
                number[0] = ope(currentOperator, number[0], number[1])
                number[1] = undefined;
                currentOperator = element.innerText
            }
            
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