import { Component, OnInit, Type } from '@angular/core';
// import { kStringMaxLength } from 'buffer';
// import { stat } from 'fs';
// import { totalmem } from 'os';

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

<<<<<<< HEAD
// const level = document.getElementById("character_level");
// const str = document.getElementById("str");
// const dex = document.getElementById("dex");
// const con = document.getElementById("con");
// const int = document.getElementById("int");
// const wis = document.getElementById("wis");
// const cha = document.getElementById("cha");

// const proficiency_mod = proficiencymod(level);
// const proficiencies = [];
// const strsave = document.getElementById("strength_throw");
// const dexsave = document.getElementById("dexterity_throw");
// const consave = document.getElementById("constitution_throw");
// const intsave = document.getElementById("intelligence_throw");
// const wissave = document.getElementById("wisdom_throw");
// const chasave = document.getElementById("charisma_throw");
// const athletics = document.getElementById("athletics_check");
// const acrobatics = document.getElementById("acrobatics_check");
// const sleight = document.getElementById("sleight_check");
// const stealth = document.getElementById("stealth_check");
// const arcana = document.getElementById("arcana_check");
// const history = document.getElementById("history_check");
// const investigation = document.getElementById("investigation_check");
// const nature = document.getElementById("nature_check");
// const religion = document.getElementById("religion_check");
// const animal = document.getElementById("animal_check");
// const insight = document.getElementById("insight_check");
// const medicine = document.getElementById("medicine_check");
// const perception = document.getElementById("perception_check");
// const survival = document.getElementById("survival_check");
// const deception = document.getElementById("deception_check");
// const intimidation = document.getElementById("intimidation_check");
// const performance = (document.getElementById("performance_check");
// const persuasion = document.getElementById("persuasion_check");
// const totalhitdice = document.getElementById("total_hit_dice");
// const remaininghitdice = document.getElementById("remaining_hit_dice");
// const hitdietype = document.getElementById("hit_die_type");
// const hitpoints = document.getElementById("character_hp_max");
// const deathsaves = document.getElementById("death_saves");
// const spellsavedc = (spellsave);
// const spellattackbonus = (spellattack);
// const initiative = document.getElementById("character_initiative");
// const speed = document.getElementById("character_speed");
=======

const level = document.getElementById("character_level");
const str = document.getElementById("str");
const dex = document.getElementById("dex");
const con = document.getElementById("con");
const int = document.getElementById("int");
const wis = document.getElementById("wis");
const cha = document.getElementById("cha");
const strmod = document.getElementById("strmod");
const dexmod = document.getElementById("dexmod");
const conmod = document.getElementById("conmod");
const intmod = document.getElementById("intmod");
const wismod = document.getElementById("wismod");
const chamod = document.getElementById("chamod");
// const proficiency_mod = proficiencymod(level);
const proficiencies = [];
const strsave = document.getElementById("strength_throw");
const dexsave = document.getElementById("dexterity_throw");
const consave = document.getElementById("constitution_throw");
const intsave = document.getElementById("intelligence_throw");
const wissave = document.getElementById("wisdom_throw");
const chasave = document.getElementById("charisma_throw");
const athletics = document.getElementById("athletics_check");
const acrobatics = document.getElementById("acrobatics_check");
const sleight = document.getElementById("sleight_check");
const stealth = document.getElementById("stealth_check");
const arcana = document.getElementById("arcana_check");
const history = document.getElementById("history_check");
const investigation = document.getElementById("investigation_check");
const nature = document.getElementById("nature_check");
const religion = document.getElementById("religion_check");
const animal = document.getElementById("animal_check");
const insight = document.getElementById("insight_check");
const medicine = document.getElementById("medicine_check");
const perception = document.getElementById("perception_check");
const survival = document.getElementById("survival_check");
const deception = document.getElementById("deception_check");
const intimidation = document.getElementById("intimidation_check");
const performance = document.getElementById("performance_check");
const persuasion = document.getElementById("persuasion_check");
const totalhitdice = document.getElementById("total_hit_dice");
const remaininghitdice = document.getElementById("remaining_hit_dice");
const hitdietype = document.getElementById("hit_die_type");
const hitpoints = document.getElementById("character_hp_max");
const deathsaves = document.getElementById("death_saves");
// const spellsavedc = (spellsave);
// const spellattackbonus = (spellattack);
const initiative = document.getElementById("character_initiative");
const speed = document.getElementById("character_speed");
>>>>>>> 8de83f960fa84596eed4624acea9b508ac93cf41
// const ac = document.getElementById(armorclass);


// //==================================================================DICE ROLLS===========================================================================
// function d4 () {
//   var d4 = Math.floor(Math.random() * (4 - 1 + 1)) + 1;
//   return d4;
// }
// function d6 () {
//  var d6 = Math.floor(Math.random() * (6 - 1 + 1)) + 1;
//  return d6;
// }
// function d8 () {
//   var d8 = Math.floor(Math.random() * (8 - 1 + 1)) + 1;
//   return d8;
// }
// function d10 () {
//   var d10 = Math.floor(Math.random() * (10 - 1 + 1)) + 1;
//   return d10;
// }
// function d12 () {
//   var d12 = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
//   return d12;
// }
// function d20 () {
//   var d20 = Math.floor(Math.random() * (20 - 1 + 1)) + 1;
//   return d20;
// }

<<<<<<< HEAD
// // ========================================================ROLLING STATS=====================================================================================
// const strength = () => {
//   let str = [d6(), d6(), d6(), d6()];
//   str.sort();
//   console.log(str);
//   str.splice(0,1);
//   console.log(str);
//   const strsum = str.reduce((partial_sum, a) => partial_sum + a,0);
//   console.log(strsum);
//   return strsum;
// }
// const dexterity = () => {
//   let str = [d6(), d6(), d6(), d6()];
//   str.sort();
//   console.log(str);
//   str.splice(0,1);
//   console.log(str);
//   const dexsum = str.reduce((partial_sum, a) => partial_sum + a,0);
//   console.log(dexsum);
//   return dexsum;
// }
// const constitution = () => {
//   let str = [d6(), d6(), d6(), d6()];
//   str.sort();
//   console.log(str);
//   str.splice(0,1);
//   console.log(str);
//   const consum = str.reduce((partial_sum, a) => partial_sum + a,0);
//   console.log(consum);
//   return consum;
// }
// const intellect = () => {
//   let str = [d6(), d6(), d6(), d6()];
//   str.sort();
//   console.log(str);
//   str.splice(0,1);
//   console.log(str);
//   const intsum = str.reduce((partial_sum, a) => partial_sum + a,0);
//   console.log(intsum);
//   return intsum;
// }
// const wisdom = () => {
//   let str = [d6(), d6(), d6(), d6()];
//   str.sort();
//   console.log(str);
//   str.splice(0,1);
//   console.log(str);
//   const wissum = str.reduce((partial_sum, a) => partial_sum + a,0);
//   console.log(wissum);
//   return wissum;
// }
// const charisma = () => {
//   let str = [d6(), d6(), d6(), d6()];
//   str.sort();
//   console.log(str);
//   str.splice(0,1);
//   console.log(str);
//   const chasum = str.reduce((partial_sum, a) => partial_sum + a,0);
//   console.log(chasum);
//   return chasum;
// }
// //================================================================STAT MODIFIER================================================================================
// const mod = (x: number) => {
//   switch (x) {
//     case 0 : case 1:
//         return -5;
//     case 2: case 3:
//         return -4;
//     case 4: case 5:
//       return -3;
//     case 6: case 7:
//       return -2;
//     case 8: case 9:
//       return -1;
//     case 10: case 11:
//       return 0;
//     case 12: case 13:
//         return 1;
//     case 14: case 15:
//       return 2;
//     case 16: case 17:
//       return 3;
//     case 18: case 19:
//       return 4;
//     case 20: case 21:
//       return 5;
//     default:
//       return null;
//   }
// }
// //====================================================================PROFICIENCY MODIFIER====================================================================
//

// //====================================================SAVING THROWS=========================================================================================
=======
// ========================================================ROLLING STATS=====================================================================================
function strength(){
  let strength = [d6(), d6(), d6(), d6()];
  strength.sort();
  console.log(strength);
  strength.splice(0,1);
  console.log(strength);
  let strsum = strength.reduce((partial_sum, a) => partial_sum + a,0);
  console.log(strsum);
  str!.innerHTML= `${strsum}`;
  strmod!.innerHTML= `${mod(strsum)}`
  return strsum;
}
const dexterity = () => {
  let str = [d6(), d6(), d6(), d6()];
  str.sort();
  console.log(str);
  str.splice(0,1);
  console.log(str);
  const dexsum = str.reduce((partial_sum, a) => partial_sum + a,0);
  console.log(dexsum);
  return dexsum;
}
const constitution = () => {
  let str = [d6(), d6(), d6(), d6()];
  str.sort();
  console.log(str);
  str.splice(0,1);
  console.log(str);
  const consum = str.reduce((partial_sum, a) => partial_sum + a,0);
  console.log(consum);
  return consum;
}
const intellect = () => {
  let str = [d6(), d6(), d6(), d6()];
  str.sort();
  console.log(str);
  str.splice(0,1);
  console.log(str);
  const intsum = str.reduce((partial_sum, a) => partial_sum + a,0);
  console.log(intsum);
  return intsum;
}
const wisdom = () => {
  let str = [d6(), d6(), d6(), d6()];
  str.sort();
  console.log(str);
  str.splice(0,1);
  console.log(str);
  const wissum = str.reduce((partial_sum, a) => partial_sum + a,0);
  console.log(wissum);
  return wissum;
}
const charisma = () => {
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
const mod = (x: number) => {
  switch (x) {
    case 0 : case 1:
        return -5;
    case 2: case 3:
        return -4;
    case 4: case 5:
      return -3;
    case 6: case 7:
      return -2;
    case 8: case 9:
      return -1;
    case 10: case 11:
      return 0;
    case 12: case 13:
        return 1;
    case 14: case 15:
      return 2;
    case 16: case 17:
      return 3;
    case 18: case 19:
      return 4;
    case 20: case 21:
      return 5;
    default:
      return 0;
  }
}
//====================================================================PROFICIENCY MODIFIER====================================================================
const proficiencymod = (level : number) => {
  switch (level) {
    case 1 : case 2: case 3 : case 4:
        return 2;
    case 5 : case 6: case 7 : case 8:
        return 3;
    case 9 : case 10: case 11 : case 12:
      return 4;
    case 13 : case 14: case 15 : case 16:
      return 5;
    case 17: case 18: case 19 : case 20:
      return 6;
    default:
      return 0;
  }
}

//====================================================SAVING THROWS=========================================================================================
>>>>>>> 8de83f960fa84596eed4624acea9b508ac93cf41
// const strsaving = (stat: String) => {
//   if (proficiencies.includes(stat)) {
//     let total = (d20() + proficiencymod(level) + strmod);
//     console.log('Your dice roll ${d20} and your strength modifier is ${strmod} and your proficiency bonus of ${proficiencymod(level)} a total of ${total}');
//     return total;
//   } else {
//     let total = (d20() + strmod);
//     console.log('Your dice roll ${d20} and your strength modifier is ${strmod} a total of ${total}');
//     return total;
//   }
// }
// const dexsaving = (stat: String) => {
//   if (proficiencies.includes(stat)) {
//     let total = (d20() + proficiencymod(level) + dexmod);
//     console.log('Your dice roll ${d20} and your dexterity modifier is ${dexmod} and your proficiency bonus of ${proficiencymod(level)} a total of ${total}');
//     return total;
//   } else {
//     let total = (d20() + dexmod);
//     console.log('Your dice roll ${d20} and your dexterity modifier is ${dexmod} a total of ${total}');
//     return total;
//   }
// }
// const consaving = (stat: String) => {
//   if (proficiencies.includes(stat)) {
//     let total = (d20() + proficiencymod(level) + conmod);
//     console.log('Your dice roll ${d20} and your constitution modifier is ${conmod} and your proficiency bonus of ${proficiencymod(level)} a total of ${total}');
//     return total;
//   } else {
//     let total = (d20() + conmod);
//     console.log('Your dice roll ${d20} and your constitution modifier is ${conmod} a total of ${total}');
//     return total;
//   }
// }
// const intsaving = (stat: String) => {
//   if (proficiencies.includes(stat)) {
//     let total = (d20() + proficiencymod(level) + intmod);
//     console.log('Your dice roll ${d20} and your intellegence modifier is ${intmod} and your proficiency bonus of ${proficiencymod(level)} a total of ${total}');
//     return total;
//   } else {
//     let total = (d20() + intmod);
//     console.log('Your dice roll ${d20} and your intelligence modifier is ${intmod} a total of ${total}');
//     return total;
//   }
// }
// const wissaving = (stat: String) => {
//   if (proficiencies.includes(stat)) {
//     let total = (d20() + proficiencymod(level) + wismod);
//     console.log('Your dice roll ${d20} and your wisdom modifier is ${wismod} and your proficiency bonus of ${proficiencymod(level)} a total of ${total}');
//     return total;
//   } else {
//     let total = (d20() + wismod);
//     console.log('Your dice roll ${d20} and your wisdom modifier is ${wismod} a total of ${total}');
//     return total;
//   }
// }
// const chasaving = (stat: String) => {
//   if (proficiencies.includes(stat)) {
//     let total = (d20() + proficiencymod(level) + chamod);
//     console.log('Your dice roll ${d20} and your charisma modifier is ${chamod} and your proficiency bonus of ${proficiencymod(level)} a total of ${total}');
//     return total;
//   } else {
//     let total = (d20() + chamod);
//     console.log('Your dice roll ${d20} and your charisma modifier is ${chamod} a total of ${total}');
//     return total;
//   }
// }

// //==============================================STRENGTH SKILLS================================================================================================
// const athleticsskill = (stat: String) => {
//   if (proficiencies.includes(stat)) {
//     let total = (d20() + proficiencymod(level) + strmod);
//     console.log('Your dice roll ${d20} and your strength modifier is ${strmod} and your proficiency bonus of ${proficiencymod(level)} a total of ${total}');
//     return total;
//   } else {
//     let total = (d20() + strmod);
//     console.log('Your dice roll ${d20} and your strength modifier is ${strmod} a total of ${total}');
//     return total;
//   }
// }

// //=================================================DEXTERITY SKILLS===============================================================================================
// const acrobaticsskill = (stat: String) => {
//   if (proficiencies.includes(stat)) {
//     let total = (d20() + proficiencymod(level) + dexmod);
//     console.log('Your dice roll ${d20} and your dexterity modifier is ${dexmod} and your proficiency bonus of ${proficiencymod(level)} a total of ${total}');
//     return total;
//   } else {
//     let total = (d20() + dexmod);
//     console.log('Your dice roll ${d20} and your dexterity modifier is ${dexmod} a total of ${total}');
//     return total;
//   }
// }
// const sleightskill = (stat: String) => {
//   if (proficiencies.includes(stat)) {
//     let total = (d20() + proficiencymod(level) + dexmod);
//     console.log('Your dice roll ${d20} and your dexterity modifier is ${dexmod} and your proficiency bonus of ${proficiencymod(level)} a total of ${total}');
//     return total;
//   } else {
//     let total = (d20() + dexmod);
//     console.log('Your dice roll ${d20} and your dexterity modifier is ${dexmod} a total of ${total}');
//     return total;
//   }
// }
// const stealthskill = (stat: String) => {
//   if (proficiencies.includes(stat)) {
//     let total = (d20() + proficiencymod(level) + dexmod);
//     console.log('Your dice roll ${d20} and your dexterity modifier is ${dexmod} and your proficiency bonus of ${proficiencymod(level)} a total of ${total}');
//     return total;
//   } else {
//     let total = (d20() + dexmod);
//     console.log('Your dice roll ${d20} and your dexterity modifier is ${dexmod} a total of ${total}');
//     return total;
//   }
// }
// //======================================INTELLECT SKILLS==========================================================================================================
// const arcanaskill = (stat:String) => {
//   if (proficiencies.includes(stat)) {
//     let total = (d20() + proficiencymod(level) + intmod);
//     console.log('Your dice roll ${d20} and your intellegence modifier is ${intmod} and your proficiency bonus of ${proficiencymod(level)} a total of ${total}');
//     return total;
//   } else {
//     let total = (d20() + intmod);
//     console.log('Your dice roll ${d20} and your intelligence modifier is ${intmod} a total of ${total}');
//     return total;
//   }
// }
// const historyskill = (stat:String) => {
//   if (proficiencies.includes(stat)) {
//     let total = (d20() + proficiencymod(level) + intmod);
//     console.log('Your dice roll ${d20} and your intellegence modifier is ${intmod} and your proficiency bonus of ${proficiencymod(level)} a total of ${total}');
//     return total;
//   } else {
//     let total = (d20() + intmod);
//     console.log('Your dice roll ${d20} and your intelligence modifier is ${intmod} a total of ${total}');
//     return total;
//   }
// }
// const investigationskill = (stat:String) => {
//   if (proficiencies.includes(stat)) {
//     let total = (d20() + proficiencymod(level) + intmod);
//     console.log('Your dice roll ${d20} and your intellegence modifier is ${intmod} and your proficiency bonus of ${proficiencymod(level)} a total of ${total}');
//     return total;
//   } else {
//     let total = (d20() + intmod);
//     console.log('Your dice roll ${d20} and your intelligence modifier is ${intmod} a total of ${total}');
//     return total;
//   }
// }
// const passiveinvestigation = (stat:String) => {
//   if (proficiencies.includes(stat)) {
//     let total = (d20() + proficiencymod(level) + intmod);
//     return total;
//   } else {
//     let total = (d20() + intmod);
//     return total;
//   }
// }
// //=============================================WISDOM SKILLS ====================================================================================================
// const natureskill = (stat:String) => {
//   if (proficiencies.includes(stat)) {
//     let total = (d20() + proficiencymod(level) + wismod);
//     console.log('Your dice roll ${d20} and your wisdom modifier is ${wismod} and your proficiency bonus of ${proficiencymod(level)} a total of ${total}');
//     return total;
//   } else {
//     let total = (d20() + wismod);
//     console.log('Your dice roll ${d20} and your wisdom modifier is ${wismod} a total of ${total}');
//     return total;
//   }
// }
// const religionskill = (stat:String) => {
//   if (proficiencies.includes(stat)) {
//     let total = (d20() + proficiencymod(level) + wismod);
//     console.log('Your dice roll ${d20} and your wisdom modifier is ${wismod} and your proficiency bonus of ${proficiencymod(level)} a total of ${total}');
//     return total;
//   } else {
//     let total = (d20() + wismod);
//     console.log('Your dice roll ${d20} and your wisdom modifier is ${wismod} a total of ${total}');
//     return total;
//   }
// }
// const animalskill = (stat:String) => {
//   if (proficiencies.includes(stat)) {
//     let total = (d20() + proficiencymod(level) + wismod);
//     console.log('Your dice roll ${d20} and your wisdom modifier is ${wismod} and your proficiency bonus of ${proficiencymod(level)} a total of ${total}');
//     return total;
//   } else {
//     let total = (d20() + wismod);
//     console.log('Your dice roll ${d20} and your wisdom modifier is ${wismod} a total of ${total}');
//     return total;
//   }
// }
// const insightskill = (stat:String) => {
//   if (proficiencies.includes(stat)) {
//     let total = (d20() + proficiencymod(level) + wismod);
//     console.log('Your dice roll ${d20} and your wisdom modifier is ${wismod} and your proficiency bonus of ${proficiencymod(level)} a total of ${total}');
//     return total;
//   } else {
//     let total = (d20() + wismod);
//     console.log('Your dice roll ${d20} and your wisdom modifier is ${wismod} a total of ${total}');
//     return total;
//   }
// }
// const passiveinsight = (stat:String) => {
//   if (proficiencies.includes(stat)) {
//     let total = (d20() + proficiencymod(level) + wismod);
//     return total;
//   } else {
//     let total = (d20() + wismod);
//     return total;
//   }
// }
// const medicineskill = (stat:String) => {
//   if (proficiencies.includes(stat)) {
//     let total = (d20() + proficiencymod(level) + wismod);
//     console.log('Your dice roll ${d20} and your wisdom modifier is ${wismod} and your proficiency bonus of ${proficiencymod(level)} a total of ${total}');
//     return total;
//   } else {
//     let total = (d20() + wismod);
//     console.log('Your dice roll ${d20} and your wisdom modifier is ${wismod} a total of ${total}');
//     return total;
//   }
// }
// const perceptionskill = (stat:String) => {
//   if (proficiencies.includes(stat)) {
//     let total = (d20() + proficiencymod(level) + wismod);
//     console.log('Your dice roll ${d20} and your wisdom modifier is ${wismod} and your proficiency bonus of ${proficiencymod(level)} a total of ${total}');
//     return total;
//   } else {
//     let total = (d20() + wismod);
//     console.log('Your dice roll ${d20} and your wisdom modifier is ${wismod} a total of ${total}');
//     return total;
//   }
// }
// const passiveperception = (stat:String) => {
//   if (proficiencies.includes(stat)) {
//     let total = (d20() + proficiencymod(level) + wismod);
//     return total;
//   } else {
//     let total = (d20() + wismod);
//     return total;
//   }
// }
// const survivalskill = (stat:String) => {
//   if (proficiencies.includes(stat)) {
//     let total = (d20() + proficiencymod(level) + wismod);
//     console.log('Your dice roll ${d20} and your wisdom modifier is ${wismod} and your proficiency bonus of ${proficiencymod(level)} a total of ${total}');
//     return total;
//   } else {
//     let total = (d20() + wismod);
//     console.log('Your dice roll ${d20} and your wisdom modifier is ${wismod} a total of ${total}');
//     return total;
//   }
// }
// //===============================CHARISMA SKILLS================================================================================================================
// const deceptionskill = (stat:String) => {
//   if (proficiencies.includes(stat)) {
//     let total = (d20() + proficiencymod(level) + chamod);
//     console.log('Your dice roll ${d20} and your charisma modifier is ${chamod} and your proficiency bonus of ${proficiencymod(level)} a total of ${total}');
//     return total;
//   } else {
//     let total = (d20() + chamod);
//     console.log('Your dice roll ${d20} and your charisma modifier is ${chamod} a total of ${total}');
//     return total;
//   }
// }
// const intimidationskill = (stat:String) => {
//   if (proficiencies.includes(stat)) {
//     let total = (d20() + proficiencymod(level) + chamod);
//     console.log('Your dice roll ${d20} and your charisma modifier is ${chamod} and your proficiency bonus of ${proficiencymod(level)} a total of ${total}');
//     return total;
//   } else {
//     let total = (d20() + chamod);
//     console.log('Your dice roll ${d20} and your charisma modifier is ${chamod} a total of ${total}');
//     return total;
//   }
// }
// const performanceskill = (stat:String) => {
//   if (proficiencies.includes(stat)) {
//     let total = (d20() + proficiencymod(level) + chamod);
//     console.log('Your dice roll ${d20} and your charisma modifier is ${chamod} and your proficiency bonus of ${proficiencymod(level)} a total of ${total}');
//     return total;
//   } else {
//     let total = (d20() + chamod);
//     console.log('Your dice roll ${d20} and your charisma modifier is ${chamod} a total of ${total}');
//     return total;
//   }
// }
// const persuasionskill = (stat:String) => {
//   if (proficiencies.includes(stat)) {
//     let total = (d20() + proficiencymod(level) + chamod);
//     console.log('Your dice roll ${d20} and your charisma modifier is ${chamod} and your proficiency bonus of ${proficiencymod(level)} a total of ${total}');
//     return total;
//   } else {
//     let total = (d20() + chamod);
//     console.log('Your dice roll ${d20} and your charisma modifier is ${chamod} a total of ${total}');
//     return total;
//   }
// }
// //=========================================TOTAL HIT POINTS======================================================================================
// const hitdice = (stat:String) => {


// }
// totalhitdice.addEventListener("click", hitdice);
// remaininghitdice.addEventListener("click", remainingdice);
// hitpoints.addEventListener("click", totalhitpoints);










// // const pokeId = document.getElementById('poke-id')
// //  const respId = document.getElementById('resp-id')
// //  const pokeName = document.getElementById('resp-name')
// //  const pokeImg = document.getElementById('resp-sprite');
// //  const button = document.getElementById('btn')

// //  button.addEventListener('click', fetchCall);

// //  function fetchCall() {

// //  let idNum = document.getElementById('poke-id').value;

// //  fetch(`https://pokeapi.co/api/v2/pokemon/${idNum}`)
// //      .then((response) => response.json()) // this parses the body of the response into a JS object
// //      .then(renderPokemon, handleError); // we pass that JS object to that function here
// //  }

// //  function renderPokemon(data) {
// //      // we're going to modify the elements on the index.html page
// //      // by plugging in the values of the properties of the data recevievd

// //      pokeName.innerHTML = `Name: ${data.name}` // /name and .id have to be properties on the JSON object
// //      respId.innerHTML = `Id: ${data.id}`

// //      pokeImg.setAttribute("src", data.sprites.front_default);

// //      pokeImg.setAttribute("height", 300);

// //  }
// function fetchCall(cls: String) {
//   //  let classname = document.getElementById('index').value;
//    fetch(`https://www.dnd5eapi.co/api/classes/classes/${cls}`)
//        .then((response) => response.json()) // this parses the body of the response into a JS object
//        .then(renderCharacter); // we pass that JS object to that function here
// }
// const hitdie = document.getElementsByClassName('hit_die')
// const respId = document.getElementById('resp-id')
// const pokeName = document.getElementById('resp-name')
// const pokeImg = document.getElementById('resp-sprite');
// const button = document.getElementById('btn')
// // const hitdice = (hitdicemod);
// function renderCharacter(data) {
//   // we're going to modify the elements on the index.html page
//   // by plugging in the values of the properties of the data recevievd

//   var hitdie = document.getElementsByName("hit_die");
//   // characterClass.innerHTML = `Name: ${data.name}` // /name and .id have to be properties on the JSON object
//   // respId.innerHTML = `Id: ${data.id}`

//   // pokeImg.setAttribute("src", data.sprites.front_default);

//   // pokeImg.setAttribute("height", 300);

// }

// const hitpointtotal = () => {
//   if (hitdie == 6) {
//     let total = (conmod * level) + (level * d6());
//     return total;
//   } else if (hitdie == 8){
//     let total = (conmod * level) + (level * d8());
//     return total;
//   } else if (hitdie == 10) {
//     let total = (conmod * level) + (level * d10());
//     return total;
//   } else (hitdie == 12)
//   let total = (conmod * level) + (level * d12());
//   return total;
// }

// const rollsaves = () => {
//   let roll = d20();
//   if (roll > 10) {
//     console.log("Your body is succeeding in it's own revival with a ${roll} roll.")
//   } else {
//     console.log("Your body failed to recover from the natural recovery process with a ${roll} roll.")
//   }
// }

// const spellsavedc = (spellsave);


// const spellattackbonus = (spellattack);


// const initiative = (initiativecalc);


// const speed = (speedcalc);

// const strmod = mod(str);
// const dexmod = mod(dex);
// const conmod = mod(con);
// const intmod = mod(int);
// const wismod = mod(wis);
// const chamod = mod(cha);

// const passiveper = passiveperception();
// const passiveins = passiveinsight();
// const passiveinves = passiveinvestigation();
<<<<<<< HEAD
// str.addEventListener("click", strength);
// dex.addEventListener("click", dexterity);
// con.addEventListener("click", constitution);
// int.addEventListener("click", intellect);
// wis.addEventListener("click", wisdom);
// cha.addEventListener("click", charisma);
=======
>>>>>>> 8de83f960fa84596eed4624acea9b508ac93cf41
// strsave.addEventListener("click", strsaving);
// dexsave.addEventListener("click", dexsaving);
// consave.addEventListener("click", consaving);
// intsave.addEventListener("click", intsaving);
// wissave.addEventListener("click", wissaving);
// chasave.addEventListener("click", chasaving);
// athletics.addEventListener("click", athleticsskill);
// acrobatics.addEventListener("click", acrobaticsskill);
// sleight.addEventListener("click", sleightskill);
// stealth.addEventListener("click", stealthskill);
// arcana.addEventListener("click", arcanaskill);
// history.addEventListener("click", historyskill);
// investigation.addEventListener("click", investigationskill);
// nature.addEventListener("click", natureskill);
// religion.addEventListener("click", religionskill);
// animal.addEventListener("click", animalskill);
// insight.addEventListener("click", insightskill);
// medicine.addEventListener("click", medicineskill);
// perception.addEventListener("click", perceptionskill);
// survival.addEventListener("click", survivalskill);
// deception.addEventListener("click", deceptionskill);
// intimidation.addEventListener("click", intimidationskill);
// performance.addEventListener("click", performanceskill);
// persuasion.addEventListener("click", persuasionskill);
// totalhitdice.addEventListener("click", hitdice);
// remaininghitdice.addEventListener("click", remainingdice);
// hitpoints.addEventListener("click", totalhitpoints);
// deathsaves.addEventListener("click", rollsaves);
// spellattackbonus.addEventListener("click", spellattack);
