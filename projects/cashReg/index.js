let stores = []

async function dataFromJson() 
{
  const requestUrl = "./articles.json";
  const request = new Request(requestUrl)

  const response = await fetch (request);
  const location = await response.json();
  
  for (const macroSection in location) 
  {
    /* 
    let macro = location[macroSection]
    console.log("macro: ", macro)
    for (const navBarButton in macro)
    { 
      let navB = macro[navBarButton]

      console.log("nav: ", navB)
      for (const item in navB)
      {
        let itemSec = navB[item]
        console.log("articlesec: ", itemSec)
        for (const article in itemSec )
        {
          console.log("article : ", itemSec[article])
          console.log("article price: ", itemSec[article].price)
          console.log("bleh ", itemSec[article][0])
          console.log("manual: ", location[0].juiceBar.caffetteria[0].espresso.price)  //example of how to procede
          console.log("manual2: ", location[1].caio.tranci[0].price)      //example of how to procede
          
        }
      }
    } */  
    //console.log(Object.keys(location[macroSection]))  //gives back the name of the key
    getStores(location[macroSection])
  }
}


dataFromJson()

function getStores(navElement)
{
  console.log("nav element: ", navElement)
  for (const i in navElement)   //we get the names and amount of stores that we have
  { 
    for (const content in navElement[i].store)
    {
      let loc = navElement[i].store 
      if (stores.includes(loc[content]) == false)
      {
        console.log("loc[content", loc[content])
        stores.push(loc[content])
        //creo un div e una navBar a seconda del caso in questione

        createStoreButton(loc[content])    //ho creato il div ma ora mi serve per inserire gli oggetti al suo interno
        // ma allo stesso tempo mi serve il navElement = al nome del tasto che mi servirá per la navbar
        //ugh i am tire

        //i superlike my girlfriend

      }
    }
  }
}



function createStoreButton (obj)
{
  const myStoreButton = document.createElement('button')  //the created button
  const myStores = document.getElementById('stores')  //the container for the new buttons
  myStoreButton.setAttribute(obj, 'id')   //set the id to be the name of the store
  myStoreButton.textContent = obj;  //set the text to be the name of the store
  myStores.appendChild(myStoreButton)   //adds the button to the container
  console.log(myStoreButton)

  //maybe i can add to each button a functions that passes the name of the store and something idk bye bye


  createNavBar(myStoreButton)  

} 


function createNavBar (obj)   //createNavBar va fatto prima di creare il div, perché va inserito li dentro
{
  
}


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