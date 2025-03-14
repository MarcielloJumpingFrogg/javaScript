let numbers = document.querySelectorAll(".num")
console.log(numbers[0].innerText) 

for ( let i = 0; i < numbers.length; i++)
{
    numbers[i].addEventListener('click', console.log("works?"))
}