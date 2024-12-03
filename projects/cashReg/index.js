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
        stores.push(loc[content])
        //creo un div e una navBar a seconda del caso in questione

        createStoreDiv(loc[content])

      }
    }
  }
}



function createStoreDiv (obj)
{
  const myStoreDiv = document.createElement('div')
  const myStores = document.getElementById('stores')
  myStoreDiv.setAttribute(obj, 'id')
  myStores.appendChild(myStoreDiv)
  console.log(myStoreDiv)

  createNavBar(myStoreDiv)  

}


function createNavBar (obj)
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