let btnajouter = document.querySelector("#btnajouter")
let inputtodo = document.querySelector("#inputtodo")
let body = document.querySelector("body")                //ciblage des ellements
let filtres = document.querySelectorAll(".btnhover")


function addtodo() {

    let tododiv = document.createElement("div")
    tododiv.classList.add("tododiv")
    
    let titretask = document.createElement("h2")
    titretask.classList.add("titletask")
    titretask.innerText = inputtodo.value
    tododiv.appendChild(titretask)                    //fonction pour cree les div , h2 , button

    let btndiv = document.createElement("button")
    btndiv.classList.add("btnvalider")
    btndiv.innerText="Valider"
    tododiv.appendChild(btndiv)

    let btndiv1 = document.createElement("button")
    btndiv1.classList.add("btnvalider")
    btndiv1.innerText="Modifier"
    tododiv.appendChild(btndiv1)

    let btndiv2 = document.createElement("button")
    btndiv2.classList.add("btnvalider")
    btndiv2.innerText="Supprimer"
    tododiv.appendChild(btndiv2)

    let valider

    btndiv.addEventListener('click', ()=>{
        tododiv.classList.toggle("letoggle")
        console.log(tododiv.classList);
        valider = "valider"                    //btn valider
        tododiv.style.display="block"
     
    })
    
    btndiv1.addEventListener('click', ()=>{
        titretask.innerText = inputtodo.value         //btn modifier
        inputtodo.value=""
    })                                                   
    btndiv2.addEventListener('click',()=>{             //btn supprimer
        tododiv.remove()
    })

    filtres[0].addEventListener('click', ()=>{
        if (tododiv.classList=="tododiv letoggle") {         
            tododiv.style.display = "block"               //btn filtre tout 
        }else{
            tododiv.style.display = "block"
        }
    })

    filtres[1].addEventListener('click', ()=>{
        if (tododiv.classList=="tododiv letoggle") {        //btn filtre en cours
            tododiv.style.display = "none"
        }else{
            tododiv.style.display = "block"
        }

    })
   

    filtres[2].addEventListener("click", ()=>{
        if (tododiv.classList=="tododiv letoggle") {       //btn filtre valider
            tododiv.style.display = "block"
        }else{
            tododiv.style.display = "none"
        }
    })
    body.appendChild(tododiv)  //creation de la div dans le body
    inputtodo.value=""        //vider linput
}

btnajouter.addEventListener('click',addtodo)  // addevent qui appelle la fonction pour cree les div, ...


inputtodo.addEventListener("keydown", (ev) => {
    console.log(ev.key);
    if (ev.key == 'Enter' ){   // utiliser la touche entree pour trigger l input
        addtodo()
    }
})






