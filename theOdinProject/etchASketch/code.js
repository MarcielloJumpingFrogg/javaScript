function squareGeneration(sizeOfGrid)
{
    const container = document.getElementById("container");
    let numberOfSquares = sizeOfGrid * sizeOfGrid; 
    for (let i = 0; i < numberOfSquares; i++)   //generates squares + gives them the class "square" + random color
    {
        let newSquare = document.createElement("div");
        newSquare.classList.add("square");
        newSquare.style.backgroundColor = colorRandomizer()
        container.appendChild(newSquare);

    }

    const root = document.documentElement;

    let sizeOfSquare = 100 / sizeOfGrid;

    root.style.setProperty('--squareSize', sizeOfSquare + "%")


    reduceOpacity() //need to be somewhere where it will be loaded after a new generatrion of square is completed and at beginning
}

function colorRandomizer()
{
    let r = Math.floor(Math.random() * 255)
    let g = Math.floor(Math.random() * 255) 
    let b = Math.floor(Math.random() * 255)
    let rgb = "rgb(" + r + ", " + g + ", " + b + ")" ;

    return(rgb)
}
let defaultValue = 16;

squareGeneration(defaultValue);
//i like u

function reduceOpacity()
{
    const square = document.querySelectorAll(".square");

for (let i = 0; i < square.length; i++)
{
    square[i].addEventListener("mouseover", () => { // on mouse over
        console.log("ciao")
        let test = window.getComputedStyle(square[i]).getPropertyValue("opacity")
        test =  Number(test)
        let numVal = test - 0.1
        numVal = String(numVal)
        square[i].style.opacity = numVal
    })

} 
}


const generate = document.getElementById("generate");

generate.onclick = function()
{
    let sizeOfGrid = window.prompt("Size of the square", defaultValue)
    if (sizeOfGrid > 100)
    {
        alert("Cannot load a square that big, try with 100 or less")
    }
    else
        if (sizeOfGrid != null && sizeOfGrid != "")
        {
            defaultValue = sizeOfGrid
            const container = document.getElementById("container");

            container.innerHTML = ''
            squareGeneration(sizeOfGrid)
        }
}

/* 

*/