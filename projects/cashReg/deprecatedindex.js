const historyDisplay = document.getElementById('history');
let history =[]
let totalToPay = 0;
const totalDisplay = document.getElementById('total');


const payButton = document.getElementById('payTotal')

const buttonPress = document.querySelectorAll('.article');  // only chooses the elements with the class = "article" 

const navBar = document.getElementById("navBar")


let menuButton = document.querySelectorAll('.menuButton');   // selects items with the 'menubutton' class, filtering the type of buttons it takes 

let menuSections = document.querySelectorAll('.menu');      // selects all the items with the 'menu' class

/*                                  //reso commento perché non ci sono i pultsanti per avere la funzione
for (i of menuButton)       //selects all the buttons from the navBar section
{
    i.addEventListener('click', function()   
{
    menuSections.forEach(element => {       //makes all the elements invisible
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



payButton.onclick = function()    //will use this later
{ 
  const payPage = document.getElementById('payment')
  const payTotal = document.getElementById('historyPayment')

  payPage.classList.toggle('hide');
  payPage.classList.toggle('show'); 
} 



async function fillPage()   // gets the informations from the json and transmits it with the funcions
{
  const requestUrl = './articles.json';
  const request = new Request (requestUrl);
  
  const response = await fetch (request);
  const sections = await response.json(); 
  for (const el in sections) 
  {
    console.log("acgtul lenght= ", sections)
    buttons(sections[el])
  }


}


function buttons(obj)
{
//  console.log("obj.sectionName = ", obj.sectionName)  
  console.log("len = ", obj.lenght)
  let counter = 0;

  for (let i in obj)    // i is for the outside, in this case it will consider the different "areas" with a different sectionName, and will use it to create the buttons
  { 
    if (i == "sectionName")
    {
      //console.log("this is the name ", obj[i])    // this becomes the nav bar buttons
      const myNavBarButton = document.createElement('button');
      myNavBarButton.innerHTML = obj.sectionName;
      myNavBarButton.classList.add("menuButton")  //add the classlist
      myNavBarButton.setAttribute("id" , "btn" + counter)    //add the id
      navBar.appendChild(myNavBarButton)
      counter++;

      


    }
    if(i == "items")
    {
      console.log("obj = ",obj[i])
      for (const j in obj[i])   //j is already inside the sections, which means that is using a loop inside it and getting informations about every item
      {
        console.log("obj[j] = ",obj[i][j].button)
      }

    }

    

  }



  /* const caffe = obj    //almost failed attempt i guess
  
  for( const i in caffe)
    {
      const myButton = document.createElement('button')
      const menu0 = document.getElementById('menu0')
      console.log(caffe[i].button)
      myButton.innerHTML = caffe[i].button + " <br><i> " + caffe[i].price
      menu0.appendChild(myButton)
  } */

}



fillPage()


































/*                                              

                                          <3<3<3<3<3      <3<3<3<3<3
                                        <3          <3  <3          <3
                                      <3              <3              <3
                                    <3       <3<3<3        <3<3<3       <3
                                  <3       <3      <3    <3      <3       <3                                 
                                <3       <3          <3<3          <3       <3     
                              <3       <3                            <3       <3
                              <3       <3                            <3       <3
                              <3       <3                            <3       <3
                                <3       <3                        <3       <3
                                  <3       <3                    <3       <3
                                    <3       <3                <3       <3  
                                      <3       <3            <3       <3
                                        <3       <3        <3       <3
                                          <3       <3    <3       <3
                                            <3       <3<3       <3
                                              <3             <3 
                                                <3         <3
                                                  <3     <3
                                                    <3 <3
                                                      


*/ 