/*-----------------------Constant/ Variabls------------------------------*/
const baseURL ='https://www.dnd5eapi.co/api/'
const nameURL ='https://www.dnd5eapi.co'

const classArray=['non','bard','cleric','druid','paladin','ranger','sorcerer','warlock','wizard']

const schoolArray=['non','abjuration','conjuration','divination','enchantment','evocation','illusion','necromancy','transmutation']

const levelArray=['non','1','2','3','4','5','6','7','8','9']

/*---------------------------Element Refrences (cached)--------------------------*/
const classes = document.querySelector('.classSelect')
const levels = document.querySelector('.lvlSelect')
const schools = document.querySelector('.schoolSelect')
const allBtn = document.querySelector('#generator')
/*-----------------------Event Listners------------------------------*/
classes.addEventListener('input', (e)=>{
    let idx = e.target.selectedIndex
    getClassSpells(classArray[idx])
})

levels.addEventListener('input', (e)=>{
    let idx = e.target.selectedIndex
    getLevelSpells(levelArray[idx])
})

schools.addEventListener('input', (e)=>{
    let idx = e.target.selectedIndex
    getSchoolSpells(schoolArray[idx])
    console.log(e);
})

allBtn.addEventListener('click', ()=>{
    getAllSpells();
})
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

function getLevelSpells(idx){
    fetch(baseURL+`/spells?level=${idx}`)
        .then(response => response.json())
        .then(data => getName(data));
}
//fetches all spell data for single school
function getSchoolSpells(idx){
    fetch(baseURL+`/spells?school=${idx}`)
        .then(response => response.json())
        .then(data => getName(data));
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
    let tb = document.getElementById('tbody')
    let tr = document.createElement('tr')
    let td1 = document.createElement('td')
    let td2 = document.createElement('td')
    console.log(spell.name);
    td1.innerText = spell.name
    td2.innerText = spell.desc

    tr.appendChild(td1)
    tr.appendChild(td2)
    tb.appendChild(tr)
}