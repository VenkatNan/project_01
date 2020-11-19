/*-----------------------Constant/ Variabls------------------------------*/
const baseURL ='https://www.dnd5eapi.co/api/'
const nameURL ='https://www.dnd5eapi.co'

const classArray=['non','barbarian','bard','cleric','druid','fighter','monk','paladin','ranger','rogue','sorcerer','warlock','wizard']

/*---------------------------Element Refrences (cached)--------------------------*/
const classes = document.querySelector('.classSelect')

/*-----------------------Event Listners------------------------------*/
classes.addEventListener('input', (e)=>{
    let idx = e.target.selectedIndex
    getClassSpells(classArray[idx])
})

// options.addEventListener('input', (e)=>{
//     let idx = e.target.selectedIndex
//     getClassSpells(classArray[idx])
// })

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
    data = data.results.flat()
    data.forEach((spell) => {
    fetch(nameURL+ spell.url)
    .then(response => response.json())
    .then(data => renderTable(data));
    });
}

//puts spells into table
function renderTable(spell){
    let cr = document.createElement('tbody')
    cr.id = "tbody"

    let tb = document.getElementById('tbody')
    let tr = document.createElement('tr')
    let td1 = document.createElement('td')
    let td2 = document.createElement('td')

    td1.innerText = spell.name
    td2.innerText = spell.desc

    tr.appendChild(td1)
    tr.appendChild(td2)
    tb.appendChild(tr)
}


// function showClick(e){
    
// }

// function noSpells(){
//     console.log('no spells here');
// }
getAllSpells();