const titulo = document.querySelectorAll('h1')
function activetitulo(){
    console.log(this)
}


titulo.forEach((item)=>{
    item.addEventListener('click', activetitulo)
})
