const historyDisplay = document.getElementById('history');
let history =[]
let totalToPay = 0;
const totalDisplay = document.getElementById('total');


const payButton = document.getElementById('payTotal')

const buttonPress = document.querySelectorAll('.article');  // only chooses the elements with the class = "article" 



let menuButton = document.querySelectorAll('.menuButton');   // selects items with the 'menubutton' class, filtering the type of buttons it takes 

let menuSections = document.querySelectorAll('.menu');      // selects all the items with the 'menu' class


for (i of menuButton)       //selects all the buttons from the navBar section
{
    i.addEventListener('click', function()  //makes all the elements invisible 
{
    menuSections.forEach(element => { 
        element.classList.remove('show');
        element.classList.add('hide');
    }); 
    let pressed = Array.from(menuButton).indexOf(this) // this is the index of the button that was pressed
    
    menuSections[pressed].classList.add('show')     //makes only the menu associated with the button that is pressed visible
    menuSections[pressed].classList.remove('hide')
})
}



for ( i of buttonPress)
{
    i.addEventListener('click', function()
    { 
        
        const item = document.createElement("li")
        let val = this.value

        item.innerHTML =  val    
        historyDisplay.appendChild(item)
        history.push(val) 
        val = val.match(/\d+/g) 
        totalToPay += ((Number(val[0]) + (Number(val[1]) * 0.01)))
        totalToPay = Number(totalToPay.toFixed(2))
        totalDisplay.innerHTML = `${totalToPay.toFixed(2)}$`; 
        console.log(history)
    }
    )
}




payButton.onclick = function()
{ 
  const payPage = document.getElementById('payment')
  const payTotal = document.getElementById('historyPayment')

  payPage.classList.toggle('hide');
  payPage.classList.toggle('show'); 
}























































/*                                              
                                              <3<3<3        <3<3<3
                                            <3      <3    <3      <3                                      
                                          <3          <3<3          <3
                                        <3                            <3
                                        <3                            <3
                                        <3                            <3
                                          <3                        <3
                                            <3                    <3
                                              <3                <3
                                                <3            <3
                                                  <3        <3
                                                    <3    <3
                                                      <3<3
*/ 