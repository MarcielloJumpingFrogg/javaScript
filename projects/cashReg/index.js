const historyDisplay = document.getElementById('history');
let history =[]
let totalToPay = 0;
const totalDisplay = document.getElementById('total');


const payButton = document.getElementById('payTotal')

const buttonPress = document.querySelectorAll('.article');  // only chooses the elements with the class = "article" 



let menuButton = document.querySelectorAll('.menuButton');   // selects items with the 'menubutton' class, filtering the type of buttons it takes 

let menuSections = document.querySelectorAll('.menu');      // selects all the items with the 'menu' class

/*                                  //reso commento perché non ci sono i pultsanti per avere la funzione
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
} */


/* 
for ( i of buttonPress)     //reso commento perché non ci sono i pultsanti per avere la funzione
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
 */



payButton.onclick = function()
{ 
  const payPage = document.getElementById('payment')
  const payTotal = document.getElementById('historyPayment')

  payPage.classList.toggle('hide');
  payPage.classList.toggle('show'); 
}

/* 
fetch('./articles.json')
  .then(res => res.json())  //makes the value readable since it's json and not js 
  .then(data => {           // idk it's making it into a readable file i guess, the important thing is i have the data 
    const bleh = data[0].juicebar.caffetteria
    Object.keys(data[0].juicebar.caffetteria).forEach(element => { 
      const menu0 = document.getElementById('menu0')
      const createButton = document.createElement("button")
      let thing = bleh.element.name
      let val = thing
      createButton.innerHTML = val
      menu0.appendChild(createButton)

      
    });
  })

 */ 



async function fillPage() 
{
  const requestUrl = './articles.json';
  const request = new Request (requestUrl);
  
  const response = await fetch (request);
  const sections = await response.json();

  buttons(sections[0])

}


function buttons(obj)
{
  const caffe = obj.caffetteria
  
  for( const i in caffe)
    {
      const myButton = document.createElement('button')
      const menu0 = document.getElementById('menu0')
      console.log(caffe[i].button)
      myButton.innerHTML = caffe[i].button + " <br><i> " + caffe[i].price
      menu0.appendChild(myButton)
  }

  //console.log(caffe)
}



fillPage()


/* 
[
    {
        
        "caffetteria" : 
        [
            {
                "espresso" : 
                {
                    "name" : "Caffe Gran espresso Lavazza",
                    "price" : 1.40,
                    "menu" : "juicyMenu"
                },
                "macchiato" : 
                {
                    "name" : "Caffe Macchiato",
                    "price" : 1.40,
                    "menu" : "juicyMenu"
                }
            }
        ], 
        "tranci" : {
            "name" : "margherita",
            "price" : 4.80
        }
        
    }
]


*/





































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