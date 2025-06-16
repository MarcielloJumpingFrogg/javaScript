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
    library.push(newBook)
    console.log(library)
}) 



library.forEach(element => {
    const lib = document.getElementById('library')
    
    const box = document.createElement('div')
    
    box.classList.add('book')

    let didread

    if(element.read) 
        didread = 'yes'; 
    else
        didread = 'no';

    box.innerHTML = `title: ${element.title}<br>author: ${element.author}<br>Pages: ${element.pages}<br>Read: ${didread}`  //se creo una linea di testo ciascuno posso usare flex e metterci anche la foto

    

    lib.appendChild(box)
    
});