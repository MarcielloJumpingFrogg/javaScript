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
    console.log(key)
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

function generateBook()
{ 

    const book = document.createElement('div')

    book.classList.add('book')

    book.appendChild(camps('Title'))
    book.appendChild(camps('Author'))
    book.appendChild(camps('Pages'))
    book.appendChild(camps('Read'))

    return book;
}

let counter = 0;
construct()
function construct()
{
    while(counter < library.length)
    { 
        let element = library[counter] 

        const lib = document.getElementById('library')  //library class from html
        
        lib.appendChild(generateBook())     //generates the blank spaces for title, author ecc...
        

        const children = lib.querySelectorAll('.book')[counter].children;   //selects the right book from the library

        Object.keys(children).forEach(e => {        //for each 'key' (=title, author...) add to the innertext the actual value of the book
            children[e].innerText += Object.values(element)[e]
        })

        counter ++;
    }

    library.forEach(element => { 


    
    
});}