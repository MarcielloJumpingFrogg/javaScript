const submit = document.getElementById("submit")
const result = document.getElementById("result")

submit.onclick = function() {
    let input = String(document.getElementById("input").value)
    let j = input.length;
    let res = palindrome(input, j)
    if(res)
    {
        result.innerHTML = "is palindrome"
    }
    else 
    {
        result.innerHTML = "false"
    }
    
}

function palindrome(input, j)
{
    for (let i =0; i < input.length; i++)
        {
            if ( input[i] != input [j - 1])
            {
                return false
            }
            j--;
        }
    return true
}