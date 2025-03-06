function fizzBuzz(max) {
    let num = 0;

    while (num < max) 
    {
        let result = '';
        num++;

        switch (true)
        {
            case (num % 3 == 0):
            {
                result += "Fizz";
                if (num % 5 != 0)
                    break;
            } 
            case (num % 5 == 0):
            {
                result += "Buzz";
                break;
            }    
            default:
            {
                result += num
            }    
        }
        list(result); 
    }
}

fizzBuzz(20)


function list(num)
{
    div = document.getElementById("list")
    number = document.createElement("p")

    number.textContent = num
    div.append(number)
}