let btn = document.querySelectorAll(".num");

let num = ['', ''];
let order = 0;
let point = false;

btn.forEach(element => {
    element.onclick = function() {
        if(point == false)
        {
            write(element)
            if(element.innerText == '.')
                point == true
            console.log(point)
        }    
        if((point == true) && (element != '.'))
        {
            write(element)
        }

    }
}); 

function write(n)
{
    num[order] += (n.innerText) 
    console.log(num[order])
}
