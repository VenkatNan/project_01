/*-----------------------Constant/ Variabls------------------------------*/
const baseURL ='https://www.dnd5eapi.co/api/'
const nameURL ='https://www.dnd5eapi.co'



/*---------------------------Element Refrences (cached)--------------------------*/
const options = document.querySelectorAll('select option')
/*-----------------------Event Listners------------------------------*/

    options.forEach((opt)=>{
        if(opt.value !== 'non'){
            opt.addEventListener('click',showClick(opt.value))
        }
    })


/*-------------------------Functions----------------------------*/
//fetches all spell data
function getAllSpells(){
    fetch(baseURL+'spells')
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
//fetches all spell data for single class
function getClassSpells(idx){
    fetch(baseURL+`classes/${idx}/spells`)
        .then(response => response.json())
        .then(data => console.log(data));
}
//fetches all spell data for single school
function getSchoolSpells(idx){
    fetch(baseURL+`/spells?school=${idx}`)
        .then(response => response.json())
        .then(data => console.log(data));
}


//puts spells into table
function renderTable(spell){
    // console.log(spell.name);
    let tb = document.querySelector('tbody')
    let tr = document.createElement('tr')

    let td2 = document.createElement('td')
    let td3 = document.createElement('td')
 
    td2.innerText = spell.name
    td3.innerText = spell.desc
    // console.log(spell.level, spell.name, spell.desc);
    tr.appendChild(td2)
    tr.appendChild(td3)

    tb.appendChild(tr)
}


function showClick(e){
    console.log(e);
}

getAllSpells();