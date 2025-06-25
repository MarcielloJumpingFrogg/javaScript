/* function Player (name, id, kills)
{
    this.name = name;
    this.id = id;
    this.kills = kills;

    this.display = function() {
        console.log(this.name, this.id, this.kills)
    }
}

const jonny = new Player('John', 1, 15)

 */
let i = 0;
const page = document.getElementById('container')

let Car = {
    0 : {
        brand : 'honda',
        doors: 5,
        fuel: 'diesel',
        value: 'used',
    },
    1 : {
        brand : 'toyota',
        doors: 3,
        fuel : 'petrol',
        value : 'unused',
    },
}


const Construct = function(brand, doors, fuel, value) 
{
        this.brand = brand;
        this.doors = doors;
        this.fuel = fuel;
        this.value = value;
    }

    
function Build(num)  
{
    this.container = document.createElement('div') 
    this.container.classList.add('container')
    this.container.dataset.id = num



    this.card = document.createElement('p')
    this.card.innerText = Car[num].brand
    this.container.append(this.card) 

    this.deleteBtn = document.createElement('button')
    this.deleteBtn.textContent = 'delete'
    this.deleteBtn.classList.add('delete')
    this.container.appendChild(this.deleteBtn)
    
    page.appendChild(this.container)



    

}




for(i = 0; i < 2; i++)
    { 
        Build(i)
    }
    
    Car[2] = new Construct('mini', 5, 'diesel', 'used') 
    
    Build(2)


    const deletefun = document.querySelectorAll('.delete')
    deletefun.forEach(element => {
        element.addEventListener('click', function(){
            //console.log(element.parentElement.dataset.id)
            page.removeChild(element.parentElement)
            delete Car[element.parentElement.dataset.id]
            
        })
    });
    
