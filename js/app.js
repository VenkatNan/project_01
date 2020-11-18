/*-----------------------Constant/ Variabls------------------------------*/
const baseURL ='https://www.dnd5eapi.co/api/'
const nameURL ='https://www.dnd5eapi.co'

const classArray=['non','barbarian','bard','cleric','druid','fighter','monk','paladin','ranger','rogue','sorcerer','warlock','wizard']

/*---------------------------Element Refrences (cached)--------------------------*/
const options = document.querySelector('.classSelect')

/*-----------------------Event Listners------------------------------*/
    options.addEventListener('input', showClick)


/*-------------------------Functions----------------------------*/
//fetches all spell data
function getAllSpells(){
    fetch(baseURL+'spells')
    .then(response => response.json())
    .then(data => getName(data));
}

//fetches all spell data for single class
function getClassSpells(idx){
    fetch(baseURL+`classes/${idx}/spells`)
        .then(response => response.json())
        .then(data => getName(data));
}
//fetches all spell data for single school
function getSchoolSpells(idx){
    fetch(baseURL+`/spells?school=${idx}`)
        .then(response => response.json())
        .then(data => console.log(data));
}

//fetches data from specific spell based on name
function getName(data){
    if(data.length === 0){noSpells()}
    data = data.results.flat()
    data.forEach((spell) => {
    fetch(nameURL+ spell.url)
    .then(response => response.json())
    .then(data => console.log(data));
    });
}

//puts spells into table
function renderTable(spell){
    let tb = document.createElement('tbody')
    
    let tr = document.createElement('tr')

    let td2 = document.createElement('td')
    let td3 = document.createElement('td')
 
    td2.innerText = spell.name
    td3.innerText = spell.desc
    tr.appendChild(td2)
    tr.appendChild(td3)

    tb.appendChild(tr)
}


function showClick(e){
    let idx = e.target.selectedIndex
    getClassSpells(classArray[idx])
}
function noSpells(){
    console.log('no spells here');
}

getAllSpells();