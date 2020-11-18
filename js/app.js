/*-----------------------Constant/ Variabls------------------------------*/
const baseURL ='https://www.dnd5eapi.co/api/'

let options = document.querySelectorAll('select option')
// console.log(options);
// options.forEach((opt)=>{
    
// });
/*---------------------------Element Refrences (cached)--------------------------*/

/*-----------------------Event Listners------------------------------*/

    


/*-------------------------Functions----------------------------*/
function getAllSpells(){
    fetch(baseURL+'spells')
    .then(response => response.json())
    .then(data => renderTable(data));
}
function getClassSpells(idx){
    fetch(baseURL+`classes/${idx}/spells`)
        .then(response => response.json())
        .then(data => console.log(data));
}

function getSchoolSpells(idx){
    fetch(baseURL+`/spells?school=${idx}`)
        .then(response => response.json())
        .then(data => console.log(data));
}

function renderTable(data){
    data = data.results.flat()
    data.forEach((spell) => {
       let newRow = document.createElement('tr')
       let nameCell = document.createElement('td')
       nameCell.innerHTML = `${spell.name}`

        

       document.querySelector('tbody').appendChild(newRow.appendChild(nameCell))
    });
    

}

function showClick(e){
    console.log(e);
}

getAllSpells();