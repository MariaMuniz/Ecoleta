
function populateUfs(){
    const ufSelect= document
    .querySelector("select[name=Uf]")

    fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
    .then( res => res.json() )
    .then( states => {
        for ( const state of states ){
            ufSelect.innerHTML += `<option value="${state.id}">${state.nome}</option>`
        }
    

    })
}

 


populateUfs()

function getCities(event){
    const citySelect= document
    .querySelector("select[name=city]")
    const stateInput= document
    .querySelector("input[name=state]")
   
   
     const ufValue = event.target.value

     const indexOfSelectedState=event.target.selectedIndex
     stateInput.value = event.target.options[indexOfSelectedState].text


     const url =`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufValue}/municipios ` 

     citySelect.innerHTML = "<option value> Selecione a cidade</option>"
     citySelect .disabled = true
     fetch(url)
    .then( res => res.json() )
    .then( cities => {
       
        for ( const city of cities ){
            citySelect.innerHTML += ` <option value="${city.nome}">${city.nome}</option> `

        }
        citySelect .disabled=false  

    }
    )
}




document
    .querySelector("select[name=Uf]")
    .addEventListener("change", getCities)
     
  
/*itens de coleta*/

/*pegar todos li*/

const itemsToCollect = document.querySelectorAll(".items-grid li")


for (const item of itemsToCollect) {
    item.addEventListener("click", handleSelectedItem)

}
 const collectedItems = document.querySelector("input[name=items]")
let selectedItems = []

function handleSelectedItem(event){
    const itemLi = event.target

//adicionar ou remover uma classe com javascrip
itemLi.classList.toggle("selected")

    const itemId = itemLi.dataset.id

    console.log('Item id:',itemId)

   //verificar items selecionados
   //pegar itens selecionados

   const alreadySelected = selectedItems.findIndex( item => {
    const itemFound = item == itemId
    return itemFound
   })
  
    //se tiver  selecionados tirar da seleçao
    if(alreadySelected >= 0) {

        //tirar da seleção
    const filteredItems = selectedItems.filter(item =>{
        const itemsDifferent  =item != itemId
        return itemsDifferent
    })
    selectedItems = filteredItems
}else{
    //se nao tiver selecionado adicionar a selecao
    selectedItems.push(itemId)
}

console.log('Selected Items:',selectedItems)
    //atualizar o campo escondido com os items selecionados
collectedItems.value=selectedItems
}