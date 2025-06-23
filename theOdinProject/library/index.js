let library = [

    graevale = {
        title : 'Graevale',
        author : 'non mi ricordo',
        pages: 500,
        read : false
    },

    fourthWing = {
        title : 'Fourth Wing',
        author: 'to check',
        pages: 490,
        read: true
    }
]

function createBook(inf)        //with the given info creates the book
{
    if(!new.target)
    {
        throw Error ('there needs to be a "new" tag')
    }

    this.title = inf.title;
    this.author = inf.author;
    this.pages = inf.pages;
    this.read = inf.read;
} 

const form = document.getElementById('formNewBook')

form.addEventListener('submit', (e) => {        // takes the input inside the form and creates a book adding it to "library"
    e.preventDefault()

    var formData = new FormData(form)

    var newBook =  new createBook(Object.fromEntries(formData))

    /* console.log(Object.values(newBook)[3]) */
    const key = Object.keys(newBook)[3];
    if (newBook[key] === 'on')
    { 
        newBook[key] = true; 
    }
    else{
        newBook[key] = false;
    }

    library.push(newBook)
    construct()
}) 


function camps(text)
{
    const camp = document.createElement('p');
    camp.innerHTML = `${text}:&nbsp;`;

    return camp;
}


function generateId(book)
{
    const uuid = self.crypto.randomUUID() 

    const id = document.createElement('p')
    id.classList.add('hide')
    id.classList.add('id')
    id.textContent = uuid 
    book.appendChild(id)
    
    
    return uuid;
}

let counter = 0;

function generateBook()
{ 

    const book = document.createElement('div')

    book.classList.add('book')

    book.appendChild(camps('Title'))
    book.appendChild(camps('Author'))
    book.appendChild(camps('Pages'))
    book.appendChild(camps('Read'))

    library[counter].id = generateId(book)      //creates a unique id for each book 

    return book;
}









function fillSpace(children, element, counter)
{
    Object.keys(children).forEach(e => {        //for each 'key' (=title, author...) add to the innertext the actual value of the book
            if(children[e].innerHTML == `Read:&nbsp;`)      //creates and assigns the correct value for the checkbox "read: "
            {
                const check = document.createElement('INPUT')
                check.setAttribute('type', 'checkbox')
                check.classList.add('checkbox')

                if(Object.values(element)[e])
                {
                    check.checked = true;
                }
                else
                {
                    check.checked = false;
                }
                children[e].appendChild(check);
            }
            else
            {
                if(!(children[e].classList.contains('id')))
                {
                    children[e].innerText += Object.values(element)[e] 
                }
                
            } 
        })
}


construct()
function construct()
{
    while(counter < library.length)
    { 
        let element = library[counter] 

        const lib = document.getElementById('library')  //library class from html
        
        lib.appendChild(generateBook())     //generates the blank spaces for title, author ecc...
        

        const children = lib.querySelectorAll('.book')[counter].children;   //selects the right book from the library

        fillSpace(children, element, counter)

        counter ++;

    } 

/* 
        ora devo:
            fare in modo di riconoscere quale "library.element" sta venendo cambiato lo status ri "read"
                possibile soluzione: assegnare ad ogni libro un p con classe hidden, grazie al quale risalire al libro 
        
            immagini(?)

            altre robe i guess
*/

        const test = document.getElementsByClassName('hide')
        //console.log( 'id '+ test[0].textContent)


function swtichStatus(recoveredId)
{
    for(let i = 0; i < library.length; i++)
    {
        if(library[i].id == recoveredId) 
        {
            
            if(library[i].read)
            {
                library[i].read = false
            }
            else{
                library[i].read = true
            }

        }
    }
}




let checkboxes = document.querySelectorAll('.checkbox')
//console.log(checkboxes[0].parentNode.parentElement)

checkboxes.forEach(checkbox => {        //event listener per ogni checkbox
    let p = checkbox.parentElement.parentElement
    


    checkbox.addEventListener('change', e => {
        let siblings = Array.from(p.children)

    let recoveredId
    //console.log(siblings[0].classList.contains('id'))
    

    for(let i =0; i < siblings.length; i++)
    {
        if( siblings[i].classList.contains('id'))
        {
            recoveredId = siblings[i].innerText

        }
    } 

    swtichStatus(recoveredId)

    })
});
    
    
}   


const bookButton= document.getElementById('bookTab')

const booktab = document.getElementById('newBook')

bookButton.onclick = function() {
    booktab.classList.toggle('hide')
}