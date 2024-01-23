let btnajouter = document.querySelector("#btnajouter")
let inputtodo = document.querySelector("#inputtodo")
let body = document.querySelector("body")
let filtres = document.querySelectorAll(".btnhover")






function addtodo() {
    
    let tododiv = document.createElement("div")
    tododiv.classList.add("tododiv")
    
    let titretask = document.createElement("h2")
    titretask.classList.add("titletask")
    titretask.innerText = inputtodo.value
    tododiv.appendChild(titretask)

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
        // tododiv.style.background= "#00ff04"
        tododiv.classList.toggle("letoggle")
        console.log(tododiv.classList);
        valider = "valider"
        tododiv.style.display="block"
        // btndiv.addEventListener("click",()=>{
        //     tododiv.style.display=""
            // btndiv.addEventListener('click', ()=>{
            //     tododiv.style.background= "#00ff04"})
            //     tododiv.style.display="block"
        // })
     
    })
    
    btndiv1.addEventListener('click', ()=>{
        titretask.innerText = inputtodo.value
        inputtodo.value=""
    })
    btndiv2.addEventListener('click',()=>{
        tododiv.remove()
    })

    filtres[0].addEventListener('click', ()=>{
        if (valider=="valider") {
            tododiv.style.display = "block"
        }else{
            tododiv.style.display = "block"

        }

    })

    filtres[1].addEventListener('click', ()=>{
        if (valider=="valider") {
            tododiv.style.display = "none"
        }else{
            tododiv.style.display = "block"

        }

    })

    filtres[2].addEventListener("click", ()=>{
        if (valider=="valider") {
            tododiv.style.display = "block"
        }else{
            tododiv.style.display = "none"
        }

    })
    body.appendChild(tododiv)
    inputtodo.value=""
}

btnajouter.addEventListener('click',addtodo)


inputtodo.addEventListener("keydown", (ev) => {
    console.log(ev.key);
    if (ev.key == 'Enter' ){
        addtodo()
    }
})






