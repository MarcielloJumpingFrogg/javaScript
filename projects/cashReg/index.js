const historyDisplay = document.getElementById('history');
let history =[]
let totalToPay = 0;

const buttonPress = document.querySelectorAll('button');


for ( i of buttonPress)
{
    i.addEventListener('click', function()
    { 
        
        const item = document.createElement("li")
        let val = this.value

        item.innerHTML =  val    /* this = i am not really sure actually, value is declared in the button  */
        historyDisplay.appendChild(item)
        history.push(val) 
        console.log(val)
        val = val.match(/\d+/g)
        console.log(val) 
        totalToPay += ((Number(val[0]) + (Number(val[1]) * 0.01)))
        totalToPay = Number(totalToPay.toFixed(2))
        console.log(totalToPay)

    }
    )
}