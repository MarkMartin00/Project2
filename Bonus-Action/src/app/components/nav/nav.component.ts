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

// import { CharClass } from './../../interface/char-class';
// import { PlayerCharacter } from './../../models/player-character';
// import { SheetService } from './../../services/sheet.service';
// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-sheet',
//   templateUrl: './sheet.component.html',
//   styleUrls: ['./sheet.component.css'],
// })
// export class SheetComponent implements OnInit {
//   title = 'Character Sheet';

//   public character: PlayerCharacter = new Character(
//     'Lisa Lisa',
//     'Human',
//     'Monk',
//     ['str', 'wis', 'int'],
//     2
//   );
// level = document.getElementById("character_level");
// str = document.getElementById("str");
// dex = document.getElementById("dex");
// con = document.getElementById("con");
// int = document.getElementById("int");
// wis = document.getElementById("wis");
// cha = document.getElementById("cha");
// strmod = document.getElementById("strmod");
// dexmod = document.getElementById("dexmod");
// conmod = document.getElementById("conmod");
// intmod = document.getElementById("intmod");
// wismod = document.getElementById("wismod");
// chamod = document.getElementById("chamod");
// // proficiency_mod = proficiencymod(level);
// proficiencies = [];
// strsave = document.getElementById("strength_throw");
// dexsave = document.getElementById("dexterity_throw");
// consave = document.getElementById("tution_throw");
// intsave = document.getElementById("intelligence_throw");
// wissave = document.getElementById("wisdom_throw");
// chasave = document.getElementById("charisma_throw");
// athletics = document.getElementById("athletics_check");
// acrobatics = document.getElementById("acrobatics_check");
// sleight = document.getElementById("sleight_check");
// stealth = document.getElementById("stealth_check");
// arcana = document.getElementById("arcana_check");
// history = document.getElementById("history_check");
// investigation = document.getElementById("investigation_check");
// nature = document.getElementById("nature_check");
// religion = document.getElementById("religion_check");
// animal = document.getElementById("animal_check");
// insight = document.getElementById("insight_check");
// medicine = document.getElementById("medicine_check");
// perception = document.getElementById("perception_check");
// survival = document.getElementById("survival_check");
// deception = document.getElementById("deception_check");
// intimidation = document.getElementById("intimidation_check");
// performance = document.getElementById("performance_check");
// persuasion = document.getElementById("persuasion_check");
// totalhitdice = document.getElementById("total_hit_dice");
// remaininghitdice = document.getElementById("remaining_hit_dice");
// hitdietype = document.getElementById("hit_die_type");
// hitpoints = document.getElementById("character_hp_max");
// deathsaves = document.getElementById("death_saves");
// // spellsavedc = (spellsave);
// // spellattackbonus = (spellattack);
// initiative = document.getElementById("character_initiative");
// speed = document.getElementById("character_speed");
// // ac = document.getElementById(armorclass);

//   constructor(private service: SheetService) { }

//   ngOnInit(): void {
//     this.getClass(this.character.char_class);
//   }


//   private getClass(index: string) {
//     this.service.getClass(this.character.char_class).subscribe(
//       // (data => this.char_class = data)
//     );
//   }

//   //==================================================================DICE ROLLS===========================================================================
//   d4() {
//     var d4 = Math.floor(Math.random() * (4 - 1 + 1)) + 1;
//     return d4;
//   }
//   d6() {
//   var d6 = Math.floor(Math.random() * (6 - 1 + 1)) + 1;
//   return d6;
//   }
//   d8() {
//     var d8 = Math.floor(Math.random() * (8 - 1 + 1)) + 1;
//     return d8;
//   }
//   d10 () {
//     var d10 = Math.floor(Math.random() * (10 - 1 + 1)) + 1;
//     return d10;
//   }
//   d12 () {
//     var d12 = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
//     return d12;
//   }
//   d20 () {
//     var d20 = Math.floor(Math.random() * (20 - 1 + 1)) + 1;
//     return d20;
//   }
// // ========================================================ROLLING STATS=====================================================================================
// strength(){
//   let strength = [d6(), d6(), d6(), d6()];
//   strength.sort();
//   alert(strength);
//   strength.splice(0,1);
//   alert(strength);
//   let strsum = strength.reduce((partial_sum, a) => partial_sum + a,0);
//   alert(strsum);
//   this.str!.innerHTML= `${strsum}`;
//   this.strmod!.innerHTML= `${this.mod(strsum)}`
//   return strsum;
// }
// dexterity(){
//   let dex = [d6(), d6(), d6(), d6()];
//   dex.sort();
//   alert(dex);
//   dex.splice(0,1);
//   console.log(dex);
//   const dexsum = dex.reduce((partial_sum, a) => partial_sum + a,0);
//   console.log(dexsum);
//   this.dex!.innerHTML= `${dexsum}`;
//   this.dexmod!.innerHTML= `${this.mod(dexsum)}`
//   return dexsum;
// }
// constitution(){
//   let con = [d6(), d6(), d6(), d6()];
//   con.sort();
//   alert(con);
//   con.splice(0,1);
//   alert(con);
//   const consum = con.reduce((partial_sum, a) => partial_sum + a,0);
//   console.log(consum);
//   this.con!.innerHTML= `${consum}`;
//   this.conmod!.innerHTML= `${this.mod(consum)}`
//   return consum;
// }
// intellect(){
//   let int = [d6(), d6(), d6(), d6()];
//   int.sort();
//   alert(int);
//   int.splice(0,1);
//   console.log(int);
//   const intsum = int.reduce((partial_sum, a) => partial_sum + a,0);
//   console.log(intsum);
//   this.int!.innerHTML= `${intsum}`;
//   this.intmod!.innerHTML= `${this.mod(intsum)}`
//   return intsum;
// }
// wisdom(){
//   let wis = [d6(), d6(), d6(), d6()];
//   wis.sort();
//   alert(wis);
//   wis.splice(0,1);
//   alert(wis);
//   const wissum = wis.reduce((partial_sum, a) => partial_sum + a,0);
//   console.log(wissum);
//   this.wis!.innerHTML= `${wissum}`;
//   this.wismod!.innerHTML= `${this.mod(wissum)}`
//   return wissum;
// }
// charisma(){
//   let cha = [d6(), d6(), d6(), d6()];
//   cha.sort();
//   alert(cha);
//   cha.splice(0,1);
//   console.log(cha);
//   const chasum = cha.reduce((partial_sum, a) => partial_sum + a,0);
//   console.log(chasum);
//   this.cha!.innerHTML= `${chasum}`;
//   this.chamod!.innerHTML= `${this.mod(chasum)}`
//   return chasum;
// }

// //================================================================STAT MODIFIER================================================================================
// mod = (x: number) => {
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
//       return 0;
//   }
// }
// //====================================================================PROFICIENCY MODIFIER====================================================================
// proficiencymod = (level : number) => {
//   switch (level) {
//     case 1 : case 2: case 3 : case 4:
//         return 2;
//     case 5 : case 6: case 7 : case 8:
//         return 3;
//     case 9 : case 10: case 11 : case 12:
//       return 4;
//     case 13 : case 14: case 15 : case 16:
//       return 5;
//     case 17: case 18: case 19 : case 20:
//       return 6;
//     default:
//       return 0;
//   }
// }

// //====================================================SAVING THROWS=========================================================================================
// strsaving = (stat: String) => {
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
// dexsaving = (stat: String) => {
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
// consaving = (stat: String) => {
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
// intsaving = (stat: String) => {
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
// wissaving = (stat: String) => {
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
// chasaving = (stat: String) => {
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
// athleticsskill = (stat: String) => {
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
// acrobaticsskill = (stat: String) => {
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
// sleightskill = (stat: String) => {
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
// stealthskill = (stat: String) => {
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
// arcanaskill = (stat:String) => {
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
// historyskill = (stat:String) => {
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
// investigationskill = (stat:String) => {
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
// passiveinvestigation = (stat:String) => {
//   if (proficiencies.includes(stat)) {
//     let total = (d20() + proficiencymod(level) + intmod);
//     return total;
//   } else {
//     let total = (d20() + intmod);
//     return total;
//   }
// }
// //=============================================WISDOM SKILLS ====================================================================================================
// natureskill = (stat:String) => {
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
// religionskill = (stat:String) => {
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
// animalskill = (stat:String) => {
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
// insightskill = (stat:String) => {
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
// passiveinsight = (stat:String) => {
//   if (proficiencies.includes(stat)) {
//     let total = (d20() + proficiencymod(level) + wismod);
//     return total;
//   } else {
//     let total = (d20() + wismod);
//     return total;
//   }
// }
// medicineskill = (stat:String) => {
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
// perceptionskill = (stat:String) => {
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
// passiveperception = (stat:String) => {
//   if (proficiencies.includes(stat)) {
//     let total = (d20() + proficiencymod(level) + wismod);
//     return total;
//   } else {
//     let total = (d20() + wismod);
//     return total;
//   }
// }
// survivalskill = (stat:String) => {
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
// deceptionskill = (stat:String) => {
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
// intimidationskill = (stat:String) => {
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
// performanceskill = (stat:String) => {
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
// persuasionskill = (stat:String) => {
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
// hitdice = (stat:String) => {


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
// fetchCall(cls: String) {
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
// renderCharacter(data) {
//   // we're going to modify the elements on the index.html page
//   // by plugging in the values of the properties of the data recevievd

//   var hitdie = document.getElementsByName("hit_die");
//   // characterClass.innerHTML = `Name: ${data.name}` // /name and .id have to be properties on the JSON object
//   // respId.innerHTML = `Id: ${data.id}`

//   // pokeImg.setAttribute("src", data.sprites.front_default);

//   // pokeImg.setAttribute("height", 300);

// }

// hitpointtotal = () => {
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

// rollsaves = () => {
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
// }
