import { Component, OnInit, Type } from '@angular/core';
import { kStringMaxLength } from 'buffer';
import { stat } from 'fs';
import { totalmem } from 'os';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})

export class NavComponent implements OnInit {
  constructor() { }
  ngOnInit(): void {
  }
}

const level = 1;
const str = strength();
const dex = dexterity();
const con = constitution();
const int = intellect();
const wis = wisdom();
const cha = charisma();
const strmod = mod(str);
const dexmod = mod(dex);
const conmod = mod(con);
const intmod = mod(int);
const wismod = mod(wis);
const chamod = mod(cha);
const proficiency_mod = proficiencymod(level);
const proficiencies = [];
const strsave = (strsaving);
const dexsave = (dexsaving);
const consave = (consaving);
const intsave = (intsaving);
const wissave = (wissaving);
const chasave = (chasaving);
const athletics = (athleticsskill);
const acrobatics = (acrobaticsskill);
const sleight = (sleightskill);
const stealth = (stealthskill);
const arcana = (arcanaskill);
const history = (historyskill);
const investigation = (investigationskill);
const passiveinves = (passiveinvestigation);
const nature = (natureskill);
const religion = (religionskill);
const animal = (animalskill);
const insight = (insightskill);
const passiveins = (passiveinsight);
const medicine = (medicineskill);
const perception = (perceptionskill);
const passiveper = (passiveperception);
const survival = (survivalskill);
const deception = (deceptionskill);
const intimidation = (intimidationskill);
const performance = (performanceskill);
const persuasion = (persuasionskill);
const hitdice = (hitdicemod);
const hitpoints = (hitpointtotal);
const deathsaves = (rollsaves);
const spellsavedc = (spellsave);
const spellattackbonus = (spellattack);
const initiative = (initiativecalc);
const speed = (speedcalc);

//==================================================================DICE ROLLS===========================================================================
function d4 () {
  var d4 = Math.floor(Math.random() * (4 - 1 + 1)) + 1;
  return d4;
}
function d6 () {
 var d6 = Math.floor(Math.random() * (6 - 1 + 1)) + 1;
 return d6;
}
function d8 () {
  var d8 = Math.floor(Math.random() * (8 - 1 + 1)) + 1;
  return d8;
}
function d10 () {
  var d10 = Math.floor(Math.random() * (10 - 1 + 1)) + 1;
  return d10;
}
function d12 () {
  var d12 = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
  return d12;
}
function d20 () {
  var d20 = Math.floor(Math.random() * (20 - 1 + 1)) + 1;
  return d20;
}

// ========================================================ROLLING STATS=====================================================================================
function strength() {
  let str = [d6(), d6(), d6(), d6()];
  str.sort();
  console.log(str);
  str.splice(0,1);
  console.log(str);
  const strsum = str.reduce((partial_sum, a) => partial_sum + a,0);
  console.log(strsum);
  return strsum;
}
function dexterity() {
  let str = [d6(), d6(), d6(), d6()];
  str.sort();
  console.log(str);
  str.splice(0,1);
  console.log(str);
  const dexsum = str.reduce((partial_sum, a) => partial_sum + a,0);
  console.log(dexsum);
  return dexsum;
}
function constitution() {
  let str = [d6(), d6(), d6(), d6()];
  str.sort();
  console.log(str);
  str.splice(0,1);
  console.log(str);
  const consum = str.reduce((partial_sum, a) => partial_sum + a,0);
  console.log(consum);
  return consum;
}
function intellect() {
  let str = [d6(), d6(), d6(), d6()];
  str.sort();
  console.log(str);
  str.splice(0,1);
  console.log(str);
  const intsum = str.reduce((partial_sum, a) => partial_sum + a,0);
  console.log(intsum);
  return intsum;
}
function wisdom() {
  let str = [d6(), d6(), d6(), d6()];
  str.sort();
  console.log(str);
  str.splice(0,1);
  console.log(str);
  const wissum = str.reduce((partial_sum, a) => partial_sum + a,0);
  console.log(wissum);
  return wissum;
}
function charisma() {
  let str = [d6(), d6(), d6(), d6()];
  str.sort();
  console.log(str);
  str.splice(0,1);
  console.log(str);
  const chasum = str.reduce((partial_sum, a) => partial_sum + a,0);
  console.log(chasum);
  return chasum;
}
//================================================================STAT MODIFIER================================================================================
function mod(x : number) {
  switch (x) {
    case (0 || 1):
        return -5;
    case (2 || 3):
        return -4;
    case (4 || 5):
      return -3;
    case (6 || 7):
      return -2;
    case (8 || 9):
      return -1;
    case (10 || 11):
      return 0;
    case (12 || 13):
        return 1;
    case (14 || 15):
      return 2;
    case (16 || 17):
      return 3;
    case (18 || 19):
      return 4;
    case (20 || 21):
      return 5;
    default:
      return null;
  }
}
//====================================================================PROFICIENCY MODIFIER====================================================================
function proficiencymod(level : number) {
  switch (level) {
    case (1 || 2 || 3 || 4):
        return 2;
    case (5 || 6 || 7 || 8):
        return 3;
    case (9 || 10 || 11 || 12):
      return 4;
    case (13 || 14 || 15 || 16):
      return 5;
    case (17 || 18 || 19 || 20):
      return 6;
    default:
      return null;
  }
}

//====================================================SAVING THROWS=========================================================================================
function strsaving(stat: String) {
  if (proficiencies.includes(stat)) {
    let total = (d20() + proficiencymod(level) + strmod);
    console.log('Your dice roll ${d20} and your strength modifier is ${strmod} and your proficiency bonus of ${proficiencymod(level)} a total of ${total}');
    return total;
  } else {
    let total = (d20() + strmod);
    console.log('Your dice roll ${d20} and your strength modifier is ${strmod} a total of ${total}');
    return total;
  }
}
function dexsaving(stat: String) {
  if (proficiencies.includes(stat)) {
    let total = (d20() + proficiencymod(level) + dexmod);
    console.log('Your dice roll ${d20} and your dexterity modifier is ${dexmod} and your proficiency bonus of ${proficiencymod(level)} a total of ${total}');
    return total;
  } else {
    let total = (d20() + dexmod);
    console.log('Your dice roll ${d20} and your dexterity modifier is ${dexmod} a total of ${total}');
    return total;
  }
}
function consaving(stat: String) {
  if (proficiencies.includes(stat)) {
    let total = (d20() + proficiencymod(level) + conmod);
    console.log('Your dice roll ${d20} and your constitution modifier is ${conmod} and your proficiency bonus of ${proficiencymod(level)} a total of ${total}');
    return total;
  } else {
    let total = (d20() + conmod);
    console.log('Your dice roll ${d20} and your constitution modifier is ${conmod} a total of ${total}');
    return total;
  }
}
function intsaving(stat: String) {
  if (proficiencies.includes(stat)) {
    let total = (d20() + proficiencymod(level) + intmod);
    console.log('Your dice roll ${d20} and your intellegence modifier is ${intmod} and your proficiency bonus of ${proficiencymod(level)} a total of ${total}');
    return total;
  } else {
    let total = (d20() + intmod);
    console.log('Your dice roll ${d20} and your intelligence modifier is ${intmod} a total of ${total}');
    return total;
  }
}
function wissaving(stat: String) {
  if (proficiencies.includes(stat)) {
    let total = (d20() + proficiencymod(level) + wismod);
    console.log('Your dice roll ${d20} and your wisdom modifier is ${wismod} and your proficiency bonus of ${proficiencymod(level)} a total of ${total}');
    return total;
  } else {
    let total = (d20() + wismod);
    console.log('Your dice roll ${d20} and your wisdom modifier is ${wismod} a total of ${total}');
    return total;
  }
}
function chasaving(stat: String) {
  if (proficiencies.includes(stat)) {
    let total = (d20() + proficiencymod(level) + chamod);
    console.log('Your dice roll ${d20} and your charisma modifier is ${chamod} and your proficiency bonus of ${proficiencymod(level)} a total of ${total}');
    return total;
  } else {
    let total = (d20() + chamod);
    console.log('Your dice roll ${d20} and your charisma modifier is ${chamod} a total of ${total}');
    return total;
  }
}

//==============================================STRENGTH SKILLS================================================================================================
function athleticsskill(stat: String) {
  if (proficiencies.includes(stat)) {
    let total = (d20() + proficiencymod(level) + strmod);
    console.log('Your dice roll ${d20} and your strength modifier is ${strmod} and your proficiency bonus of ${proficiencymod(level)} a total of ${total}');
    return total;
  } else {
    let total = (d20() + strmod);
    console.log('Your dice roll ${d20} and your strength modifier is ${strmod} a total of ${total}');
    return total;
  }
}
//=================================================DEXTERITY SKILLS===============================================================================================
function acrobaticsskill(stat: String) {
  if (proficiencies.includes(stat)) {
    let total = (d20() + proficiencymod(level) + dexmod);
    console.log('Your dice roll ${d20} and your dexterity modifier is ${dexmod} and your proficiency bonus of ${proficiencymod(level)} a total of ${total}');
    return total;
  } else {
    let total = (d20() + dexmod);
    console.log('Your dice roll ${d20} and your dexterity modifier is ${dexmod} a total of ${total}');
    return total;
  }
}
function sleightskill(stat: String) {
  if (proficiencies.includes(stat)) {
    let total = (d20() + proficiencymod(level) + dexmod);
    console.log('Your dice roll ${d20} and your dexterity modifier is ${dexmod} and your proficiency bonus of ${proficiencymod(level)} a total of ${total}');
    return total;
  } else {
    let total = (d20() + dexmod);
    console.log('Your dice roll ${d20} and your dexterity modifier is ${dexmod} a total of ${total}');
    return total;
  }
}
function stealthskill(stat: String) {
  if (proficiencies.includes(stat)) {
    let total = (d20() + proficiencymod(level) + dexmod);
    console.log('Your dice roll ${d20} and your dexterity modifier is ${dexmod} and your proficiency bonus of ${proficiencymod(level)} a total of ${total}');
    return total;
  } else {
    let total = (d20() + dexmod);
    console.log('Your dice roll ${d20} and your dexterity modifier is ${dexmod} a total of ${total}');
    return total;
  }
}
//======================================INTELLECT SKILLS==========================================================================================================
function arcanaskill(stat:String) {
  if (proficiencies.includes(stat)) {
    let total = (d20() + proficiencymod(level) + intmod);
    console.log('Your dice roll ${d20} and your intellegence modifier is ${intmod} and your proficiency bonus of ${proficiencymod(level)} a total of ${total}');
    return total;
  } else {
    let total = (d20() + intmod);
    console.log('Your dice roll ${d20} and your intelligence modifier is ${intmod} a total of ${total}');
    return total;
  }
}
function historyskill(stat:String) {
  if (proficiencies.includes(stat)) {
    let total = (d20() + proficiencymod(level) + intmod);
    console.log('Your dice roll ${d20} and your intellegence modifier is ${intmod} and your proficiency bonus of ${proficiencymod(level)} a total of ${total}');
    return total;
  } else {
    let total = (d20() + intmod);
    console.log('Your dice roll ${d20} and your intelligence modifier is ${intmod} a total of ${total}');
    return total;
  }
}
function investigationskill(stat:String) {
  if (proficiencies.includes(stat)) {
    let total = (d20() + proficiencymod(level) + intmod);
    console.log('Your dice roll ${d20} and your intellegence modifier is ${intmod} and your proficiency bonus of ${proficiencymod(level)} a total of ${total}');
    return total;
  } else {
    let total = (d20() + intmod);
    console.log('Your dice roll ${d20} and your intelligence modifier is ${intmod} a total of ${total}');
    return total;
  }
}
function passiveinvestigation(stat:String) {
  if (proficiencies.includes(stat)) {
    let total = (d20() + proficiencymod(level) + intmod);
    return total;
  } else {
    let total = (d20() + intmod);
    return total;
  }
}
//=============================================WISDOM SKILLS ====================================================================================================
function natureskill(stat:String) {
  if (proficiencies.includes(stat)) {
    let total = (d20() + proficiencymod(level) + wismod);
    console.log('Your dice roll ${d20} and your wisdom modifier is ${wismod} and your proficiency bonus of ${proficiencymod(level)} a total of ${total}');
    return total;
  } else {
    let total = (d20() + wismod);
    console.log('Your dice roll ${d20} and your wisdom modifier is ${wismod} a total of ${total}');
    return total;
  }
}
function religionskill(stat:String) {
  if (proficiencies.includes(stat)) {
    let total = (d20() + proficiencymod(level) + wismod);
    console.log('Your dice roll ${d20} and your wisdom modifier is ${wismod} and your proficiency bonus of ${proficiencymod(level)} a total of ${total}');
    return total;
  } else {
    let total = (d20() + wismod);
    console.log('Your dice roll ${d20} and your wisdom modifier is ${wismod} a total of ${total}');
    return total;
  }
}
function animalskill(stat:String) {
  if (proficiencies.includes(stat)) {
    let total = (d20() + proficiencymod(level) + wismod);
    console.log('Your dice roll ${d20} and your wisdom modifier is ${wismod} and your proficiency bonus of ${proficiencymod(level)} a total of ${total}');
    return total;
  } else {
    let total = (d20() + wismod);
    console.log('Your dice roll ${d20} and your wisdom modifier is ${wismod} a total of ${total}');
    return total;
  }
}
function insightskill(stat:String) {
  if (proficiencies.includes(stat)) {
    let total = (d20() + proficiencymod(level) + wismod);
    console.log('Your dice roll ${d20} and your wisdom modifier is ${wismod} and your proficiency bonus of ${proficiencymod(level)} a total of ${total}');
    return total;
  } else {
    let total = (d20() + wismod);
    console.log('Your dice roll ${d20} and your wisdom modifier is ${wismod} a total of ${total}');
    return total;
  }
}
function passiveinsight(stat:String) {
  if (proficiencies.includes(stat)) {
    let total = (d20() + proficiencymod(level) + wismod);
    return total;
  } else {
    let total = (d20() + wismod);
    return total;
  }
}
function medicineskill(stat:String) {
  if (proficiencies.includes(stat)) {
    let total = (d20() + proficiencymod(level) + wismod);
    console.log('Your dice roll ${d20} and your wisdom modifier is ${wismod} and your proficiency bonus of ${proficiencymod(level)} a total of ${total}');
    return total;
  } else {
    let total = (d20() + wismod);
    console.log('Your dice roll ${d20} and your wisdom modifier is ${wismod} a total of ${total}');
    return total;
  }
}
function perceptionskill(stat:String) {
  if (proficiencies.includes(stat)) {
    let total = (d20() + proficiencymod(level) + wismod);
    console.log('Your dice roll ${d20} and your wisdom modifier is ${wismod} and your proficiency bonus of ${proficiencymod(level)} a total of ${total}');
    return total;
  } else {
    let total = (d20() + wismod);
    console.log('Your dice roll ${d20} and your wisdom modifier is ${wismod} a total of ${total}');
    return total;
  }
}
function passiveperception(stat:String) {
  if (proficiencies.includes(stat)) {
    let total = (d20() + proficiencymod(level) + wismod);
    return total;
  } else {
    let total = (d20() + wismod);
    return total;
  }
}
function survivalskill(stat:String) {
  if (proficiencies.includes(stat)) {
    let total = (d20() + proficiencymod(level) + wismod);
    console.log('Your dice roll ${d20} and your wisdom modifier is ${wismod} and your proficiency bonus of ${proficiencymod(level)} a total of ${total}');
    return total;
  } else {
    let total = (d20() + wismod);
    console.log('Your dice roll ${d20} and your wisdom modifier is ${wismod} a total of ${total}');
    return total;
  }
}
//===============================CHARISMA SKILLS================================================================================================================
function deceptionskill(stat:String) {
  if (proficiencies.includes(stat)) {
    let total = (d20() + proficiencymod(level) + chamod);
    console.log('Your dice roll ${d20} and your charisma modifier is ${chamod} and your proficiency bonus of ${proficiencymod(level)} a total of ${total}');
    return total;
  } else {
    let total = (d20() + chamod);
    console.log('Your dice roll ${d20} and your charisma modifier is ${chamod} a total of ${total}');
    return total;
  }
}
function intimidationskill(stat:String) {
  if (proficiencies.includes(stat)) {
    let total = (d20() + proficiencymod(level) + chamod);
    console.log('Your dice roll ${d20} and your charisma modifier is ${chamod} and your proficiency bonus of ${proficiencymod(level)} a total of ${total}');
    return total;
  } else {
    let total = (d20() + chamod);
    console.log('Your dice roll ${d20} and your charisma modifier is ${chamod} a total of ${total}');
    return total;
  }
}
function performanceskill(stat:String) {
  if (proficiencies.includes(stat)) {
    let total = (d20() + proficiencymod(level) + chamod);
    console.log('Your dice roll ${d20} and your charisma modifier is ${chamod} and your proficiency bonus of ${proficiencymod(level)} a total of ${total}');
    return total;
  } else {
    let total = (d20() + chamod);
    console.log('Your dice roll ${d20} and your charisma modifier is ${chamod} a total of ${total}');
    return total;
  }
}
function persuasionskill(stat:String) {
  if (proficiencies.includes(stat)) {
    let total = (d20() + proficiencymod(level) + chamod);
    console.log('Your dice roll ${d20} and your charisma modifier is ${chamod} and your proficiency bonus of ${proficiencymod(level)} a total of ${total}');
    return total;
  } else {
    let total = (d20() + chamod);
    console.log('Your dice roll ${d20} and your charisma modifier is ${chamod} a total of ${total}');
    return total;
  }
}

// const pokeId = document.getElementById('poke-id')
//  const respId = document.getElementById('resp-id')
//  const pokeName = document.getElementById('resp-name')
//  const pokeImg = document.getElementById('resp-sprite');
//  const button = document.getElementById('btn')

//  button.addEventListener('click', fetchCall);

//  function fetchCall() {

//  let idNum = document.getElementById('poke-id').value;

//  fetch(`https://pokeapi.co/api/v2/pokemon/${idNum}`)
//      .then((response) => response.json()) // this parses the body of the response into a JS object
//      .then(renderPokemon, handleError); // we pass that JS object to that function here
//  }

//  function renderPokemon(data) {
//      // we're going to modify the elements on the index.html page
//      // by plugging in the values of the properties of the data recevievd

//      pokeName.innerHTML = `Name: ${data.name}` // /name and .id have to be properties on the JSON object
//      respId.innerHTML = `Id: ${data.id}`

//      pokeImg.setAttribute("src", data.sprites.front_default);

//      pokeImg.setAttribute("height", 300);

//  }
function fetchCall(cls: String) {
  //  let classname = document.getElementById('index').value;
   fetch(`https://www.dnd5eapi.co/api/classes/classes/${cls}`)
       .then((response) => response.json()) // this parses the body of the response into a JS object
       .then(renderCharacter); // we pass that JS object to that function here
}
const hitdie = document.getElementsByClassName('hit_die')
const respId = document.getElementById('resp-id')
const pokeName = document.getElementById('resp-name')
const pokeImg = document.getElementById('resp-sprite');
const button = document.getElementById('btn')
// const hitdice = (hitdicemod);
function renderCharacter(data) {
  // we're going to modify the elements on the index.html page
  // by plugging in the values of the properties of the data recevievd

  var hitdie = document.getElementsByName("hit_die");
  // characterClass.innerHTML = `Name: ${data.name}` // /name and .id have to be properties on the JSON object
  // respId.innerHTML = `Id: ${data.id}`

  // pokeImg.setAttribute("src", data.sprites.front_default);

  // pokeImg.setAttribute("height", 300);

}

function hitpointtotal() {
  if (hitdie == 6) {
    let total = (conmod * level) + (level * d6());
    return total;
  } else if (hitdie == 8){
    let total = (conmod * level) + (level * d8());
    return total;
  } else if (hitdie == 10) {
    let total = (conmod * level) + (level * d10());
    return total;
  } else (hitdie == 12)
  let total = (conmod * level) + (level * d12());
  return total;
}

function rollsaves() {
  let roll = d20();
  if (roll > 10) {
    console.log("Your body is succeeding in it's own revival with a ${roll} roll.")
  } else {
    console.log("Your body failed to recover from the natural recovery process with a ${roll} roll.")
  }

}

const spellsavedc = (spellsave);


const spellattackbonus = (spellattack);


const initiative = (initiativecalc);


const speed = (speedcalc);



str.addEventListener("click", strength);
dex.addEventListener("click", dexterity);
con.addEventListener("click", constitution);
int.addEventListener("click", intellect);
wis.addEventListener("click", wisdom);
cha.addEventListener("click", charisma);
strength_throw.addEventListener("click", strsaving);
dexterity_throw.addEventListener("click", dexsaving);
constitution_throw.addEventListener("click", consaving);
intelligence_throw.addEventListener("click", intsaving);
wisdom_throw.addEventListener("click", wissaving);
charisma_throw.addEventListener("click", chasaving);
athletics_check.addEventListener("click", athleticsskill);
acrobatics_check.addEventListener("click", acrobaticsskill);
sleight_check.addEventListener("click", sleightskill);
stealth_check.addEventListener("click", stealthskill);
arcana_check.addEventListener("click", arcanaskill);
history_check.addEventListener("click", historyskill);
investigation_check.addEventListener("click", investigationskill);
nature_check.addEventListener("click", natureskill);
religion_check.addEventListener("click", religionskill);
animal_check.addEventListener("click", animalskill);
insight_check.addEventListener("click", insightskill);
medicine_check.addEventListener("click", medicineskill);
perception_check.addEventListener("click", perceptionskill);
survival_check.addEventListener("click", survivalskill);
deception_check.addEventListener("click", deceptionskill);
intimidation_check.addEventListener("click", intimidationskill);
performance_check.addEventListener("click", performanceskill);
persuasion_check.addEventListener("click", persuasionskill);
hitdice.addEventListener("click", hitdicemod);
deathsaves.addEventListener("click", rollsaves);
spellattackbonus.addEventListener("click", spellattack);



