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
}

function colorRandomizer()
{
    let r = Math.floor(Math.random() * 255)
    let g = Math.floor(Math.random() * 255) 
    let b = Math.floor(Math.random() * 255)
    let rgb = "rgb(" + r + ", " + g + ", " + b + ")" ;

    return(rgb)
}

squareGeneration(6);    //devo far chiedere all'uttente

const square = document.querySelector(".square");

square.addEventListener("onmouseover", console.log("ciao"))


function reduceOpacity(square)
{ 
    const root = document.documentElement;
    root.style.setProperty("nome della variabile," , "in cosa cambiarlo")
}





/* 

*/