const historyDisplay = document.getElementById('history');
let history =[]
let totalToPay = 0;
const totalDisplay = document.getElementById('total');

const buttonPress = document.querySelectorAll('button');



const caffetterria = document.getElementById('caffetterria');
const caffePulsante = document.getElementById('caffePulsante');

const dolci = document.getElementById('dolci');
const dolciPulsante = document.getElementById('dolciPulsante');

const panini = document.getElementById('panini');
const paniniPulsante = document.getElementById('paniniPulsante');


/* 
    bug: the "addEventListener" takes the caffe,dolci,panini for the list on the right
*/

caffePulsante.onclick = function() {
    caffetterria.classList.remove("hide")
    dolci.classList.add("hide")
    panini.classList.add("hide")
}

dolciPulsante.onclick = function() {
    caffetterria.classList.add("hide");
    dolci.classList.remove("hide");
    panini.classList.add("hide");
}


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
        totalDisplay.innerHTML = `${totalToPay.toFixed(2)}$`;

    }
    )
}
