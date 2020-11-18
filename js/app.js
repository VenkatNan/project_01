/*-----------------------Constant/ Variabls------------------------------*/
const baseURL ='https://www.dnd5eapi.co/api/'

let options = document.querySelectorAll('option')
/*---------------------------Element Refrences (cached)--------------------------*/

/*-----------------------Event Listners------------------------------*/
// options.addEventListener('click', (opt)=>{
//    console.log(opt.selectedIndex.value) 
//     }

/*-------------------------Functions----------------------------*/
function getAllSpells(){
    fetch(baseURL+'spells')
    .then(response => response.json())
    .then(data => console.log(data));
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


// function classSelector(){
    
// }

getSchoolSpells('Evocation');