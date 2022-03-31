const btnToggleElem = document.getElementById('btn-toggle')
const listGroupElem = document.querySelector('.list-group')
const messageElem = document.querySelector('.message')


btnToggleElem.addEventListener('click', ()=>{
    listGroupElem.classList.toggle('d-none')
    btnToggleElem.innerHTML = 'Hide destinations'

})

listGroupElem.addEventListener('click', (e)=>{
     console.log(e.target);
    if(e.target.id === "rome"){
        messageElem.innerText = ' You selected Rome'
        messageElem.style.backgroundColor = '#FDD7AA'

    }
    else if(e.target.id === "athens"){
        messageElem.innerText = ' You selected Athens'
        messageElem.style.backgroundColor = '#FDD7AA'
    }
    else if(e.target.id === "bangkok"){
        messageElem.innerText = ' You selected Bangkok'
        messageElem.style.backgroundColor = '#FDD7AA'
    }
    else if(e.target.id === "amsterdam"){
        messageElem.innerText = ' You selected Amsterdam'
        messageElem.style.backgroundColor = '#FDD7AA'
    }
    else if(e.target.id === "istanbul"){
        messageElem.innerText = ' You selected Istanbul'
        messageElem.style.backgroundColor = '#FDD7AA'
    }
})


