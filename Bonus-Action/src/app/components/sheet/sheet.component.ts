import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { PlayerCharacter } from 'src/app/models/player-character';


@Component({
  selector: 'app-sheet',
  templateUrl: './sheet.component.html',
  styleUrls: ['./sheet.component.css'],
})
export class SheetComponent implements OnInit {
  pc_char: PlayerCharacter;
  pc_chars: PlayerCharacter[] = [];
  classes: any[] = [];
  spells: any[] = [];
  features: any[] = [];
  backgrounds: any[] = [];
  race: any[] = [];
  equipment: any[] = [];
  feats: any[] = [];
  alignment: string[] = [
    'Lawful-Good',
    'Neutral-Good',
    'Chaotic-Good',
    'Lawful-Neutral',
    'True-Neutral',
    'Chaotic-Neutral',
    'Lawful-Evil',
    'Neutral-Evil',
    'Chaotic-Evil',
  ];
  // Character Info
  char_name;
  char_race;
  char_class;
  char_level;
  char_bg;
  char_align;

  // Character Stats
  char_str;
  char_dex;
  char_con;
  char_int;
  char_wis;
  char_cha;

  // Character Battle Stats
  char_spd;
  char_ac = 10;
  char_init;

  // Character Skills
  char_acro;
  char_animal;
  char_arcana;
  char_athl;
  char_decep;
  char_hist;
  char_insight;
  char_intim;
  char_invest;
  char_med;
  char_nature;
  char_percep;
  char_perform;
  char_persua;
  char_religion;
  char_sleight;
  char_stealth;
  char_surv;



  public registerCharacter() {
    let tempCharacter = new PlayerCharacter(this.char_name,this.char_class,this.char_level,this.char_bg,this.char_race,this.char_align,this.char_ac,this.char_spd,this.char_init);
    this.pc_char = tempCharacter;
    console.log('Character Created!');
  }

  public saveCharacter() {
    this.pc_chars.push(this.pc_char);
    console.log(`${this.pc_char.char_name} saved!`);
  }

  public printCharacter() {
    console.log(this.pc_char);
  }

  public printName() {
    console.log(this.char_name);
  }

  characterExperience() {}
  onSaveEquipment() {}


  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getClasses().subscribe((response: any) => {
      response.results.forEach((result) => {
        this.dataService
          .getPlayerClass(result.index)
          .subscribe((response: any) => {
            this.classes.push(response);
          });
      });
    });
    this.dataService.getFeatures().subscribe((response: any) => {
      response.results.forEach((result) => {
        this.dataService
          .getSubFeatures(result.index)
          .subscribe((response: any) => {
            this.features.push(response);
          });
      });
    });
    this.dataService.getSpells().subscribe((response: any) => {
      response.results.forEach((result) => {
        this.dataService
          .getSpellIndex(result.index)
          .subscribe((response: any) => {
            this.spells.push(response);
          });
      });
    });
    this.dataService.getBackground().subscribe((response: any) => {
      response.results.forEach((result) => {
        this.dataService
          .getBackgroundIndex(result.index)
          .subscribe((response: any) => {
            this.backgrounds.push(response);
          });
      });
    });
    this.dataService.getEquipment().subscribe((response: any) => {
      response.results.forEach((result) => {
        this.dataService
          .getEquipmentIndex(result.index)
          .subscribe((response: any) => {
            this.equipment.push(response);
          });
      });
    });
    this.dataService.getRace().subscribe((response: any) => {
      response.results.forEach((result) => {
        this.dataService
          .getRaceIndex(result.index)
          .subscribe((response: any) => {
            this.race.push(response);
          });
      });
    });
    this.dataService.getFeats().subscribe((response: any) => {
      response.results.forEach((result) => {
        this.dataService
          .getFeatsIndex(result.index)
          .subscribe((response: any) => {
            this.feats.push(response);
          });
      });
    });
  }
}


// const level = document.getElementById("character_level");

// const proficiencies = [''];
// const strsave = document.getElementById("strength_throw");
// const dexsave = document.getElementById("dexterity_throw");
// const consave = document.getElementById("tution_throw");
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
// const performance = document.getElementById("performance_check");
// const persuasion = document.getElementById("persuasion_check");
// const totalhitdice = document.getElementById("total_hit_dice");
// const remaininghitdice = document.getElementById("remaining_hit_dice");
// const hitdietype = document.getElementById("hit_die_type");
// const hitpoints = document.getElementById("character_hp_max");
// const deathsaves = document.getElementById("death_saves");
// // spellsavedc = (spellsave);
// // spellattackbonus = (spellattack);
// const initiative = document.getElementById("character_initiative");
// const speed = document.getElementById("character_speed");
// // ac = document.getElementById(armorclass);

// // ========================================================ROLLING STATS=====================================================================================
// // function strength(){
// //   let strength = [d6(), d6(), d6(), d6()];
// //   strength.sort();
// //   console.log(strength);
// //   strength.splice(0,1);
// //   console.log(strength);
// //   let strsum = strength.reduce((partial_sum, a) => partial_sum + a,0);
// //   console.log(strsum);
// //   str.innerHTML= `${strsum}`;
// //   strmod.innerHTML= `${mod(strsum)}`
// //   return strsum;
// // }
// // function dexterity(){
// //   let str = [d6(), d6(), d6(), d6()];
// //   str.sort();
// //   console.log(str);
// //   str.splice(0,1);
// //   console.log(str);
// //   const dexsum = str.reduce((partial_sum, a) => partial_sum + a,0);
// //   console.log(dexsum);
// //   this.dex!.innerHTML= `${dexsum}`;
// //   this.dexmod!.innerHTML= `${this.mod(dexsum)}`
// //   return dexsum;
// // }
// // function constitution(){
// //   let str = [d6(), d6(), d6(), d6()];
// //   str.sort();
// //   console.log(str);
// //   str.splice(0,1);
// //   console.log(str);
// //   const consum = str.reduce((partial_sum, a) => partial_sum + a,0);
// //   console.log(consum);
// //   this.con!.innerHTML= `${consum}`;
// //   this.conmod!.innerHTML= `${this.mod(consum)}`
// //   return consum;
// // }
// // function intellect(){
// //   let str = [d6(), d6(), d6(), d6()];
// //   str.sort();
// //   console.log(str);
// //   str.splice(0,1);
// //   console.log(str);
// //   const intsum = str.reduce((partial_sum, a) => partial_sum + a,0);
// //   console.log(intsum);
// //   this.int!.innerHTML= `${intsum}`;
// //   this.intmod!.innerHTML= `${this.mod(intsum)}`
// //   return intsum;
// // }
// // function wisdom(){
// //   let str = [d6(), d6(), d6(), d6()];
// //   str.sort();
// //   console.log(str);
// //   str.splice(0,1);
// //   console.log(str);
// //   const wissum = str.reduce((partial_sum, a) => partial_sum + a,0);
// //   console.log(wissum);
// //   this.wis!.innerHTML= `${wissum}`;
// //   this.wismod!.innerHTML= `${this.mod(wissum)}`
// //   return wissum;
// // }
// // function charisma(){
// //   let str = [d6(), d6(), d6(), d6()];
// //   str.sort();
// //   console.log(str);
// //   str.splice(0,1);
// //   console.log(str);
// //   const chasum = str.reduce((partial_sum, a) => partial_sum + a,0);
// //   console.log(chasum);
// //   this.cha!.innerHTML= `${chasum}`;
// //   this.chamod!.innerHTML= `${this.mod(chasum)}`
// //   return chasum;
// // }

// //================================================================STAT MODIFIER================================================================================


// //====================================================SAVING THROWS=========================================================================================

// // const dexsaving = (stat: String) => {
// //   if (proficiencies.includes(stat)) {
// //     let total = (d20() + proficiencymod(level) + dexmod);
// //     console.log('Your dice roll ${d20} and your dexterity modifier is ${dexmod} and your proficiency bonus of ${proficiencymod(level)} a total of ${total}');
// //     return total;
// //   } else {
// //     let total = (d20() + dexmod);
// //     console.log('Your dice roll ${d20} and your dexterity modifier is ${dexmod} a total of ${total}');
// //     return total;
// //   }
// // }
// // const consaving = (stat: String) => {
// //   if (proficiencies.includes(stat)) {
// //     let total = (d20() + proficiencymod(level) + conmod);
// //     console.log('Your dice roll ${d20} and your constitution modifier is ${conmod} and your proficiency bonus of ${proficiencymod(level)} a total of ${total}');
// //     return total;
// //   } else {
// //     let total = (d20() + conmod);
// //     console.log('Your dice roll ${d20} and your constitution modifier is ${conmod} a total of ${total}');
// //     return total;
// //   }
// // }
// // const intsaving = (stat: String) => {
// //   if (proficiencies.includes(stat)) {
// //     let total = (d20() + proficiencymod(level) + intmod);
// //     console.log('Your dice roll ${d20} and your intellegence modifier is ${intmod} and your proficiency bonus of ${proficiencymod(level)} a total of ${total}');
// //     return total;
// //   } else {
// //     let total = (d20() + intmod);
// //     console.log('Your dice roll ${d20} and your intelligence modifier is ${intmod} a total of ${total}');
// //     return total;
// //   }
// // }
// // const wissaving = (stat: String) => {
// //   if (proficiencies.includes(stat)) {
// //     let total = (d20() + proficiencymod(level) + wismod);
// //     console.log('Your dice roll ${d20} and your wisdom modifier is ${wismod} and your proficiency bonus of ${proficiencymod(level)} a total of ${total}');
// //     return total;
// //   } else {
// //     let total = (d20() + wismod);
// //     console.log('Your dice roll ${d20} and your wisdom modifier is ${wismod} a total of ${total}');
// //     return total;
// //   }
// // }
// // const chasaving = (stat: String) => {
// //   if (proficiencies.includes(stat)) {
// //     let total = (d20() + proficiencymod(level) + chamod);
// //     console.log('Your dice roll ${d20} and your charisma modifier is ${chamod} and your proficiency bonus of ${proficiencymod(level)} a total of ${total}');
// //     return total;
// //   } else {
// //     let total = (d20() + chamod);
// //     console.log('Your dice roll ${d20} and your charisma modifier is ${chamod} a total of ${total}');
// //     return total;
// //   }
// // }

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
// // const arcanaskill = (stat:String) => {
// //   if (proficiencies.includes(stat)) {
// //     let total = (d20() + proficiencymod(level) + intmod);
// //     console.log('Your dice roll ${d20} and your intellegence modifier is ${intmod} and your proficiency bonus of ${proficiencymod(level)} a total of ${total}');
// //     return total;
// //   } else {
// //     let total = (d20() + intmod);
// //     console.log('Your dice roll ${d20} and your intelligence modifier is ${intmod} a total of ${total}');
// //     return total;
// //   }
// // }
// // const historyskill = (stat:String) => {
// //   if (proficiencies.includes(stat)) {
// //     let total = (d20() + proficiencymod(level) + intmod);
// //     console.log('Your dice roll ${d20} and your intellegence modifier is ${intmod} and your proficiency bonus of ${proficiencymod(level)} a total of ${total}');
// //     return total;
// //   } else {
// //     let total = (d20() + intmod);
// //     console.log('Your dice roll ${d20} and your intelligence modifier is ${intmod} a total of ${total}');
// //     return total;
// //   }
// // }
// // const investigationskill = (stat:String) => {
// //   if (proficiencies.includes(stat)) {
// //     let total = (d20() + proficiencymod(level) + intmod);
// //     console.log('Your dice roll ${d20} and your intellegence modifier is ${intmod} and your proficiency bonus of ${proficiencymod(level)} a total of ${total}');
// //     return total;
// //   } else {
// //     let total = (d20() + intmod);
// //     console.log('Your dice roll ${d20} and your intelligence modifier is ${intmod} a total of ${total}');
// //     return total;
// //   }
// // }
// // const passiveinvestigation = (stat:String) => {
// //   if (proficiencies.includes(stat)) {
// //     let total = (d20() + proficiencymod(level) + intmod);
// //     return total;
// //   } else {
// //     let total = (d20() + intmod);
// //     return total;
// //   }
// // }
// // //=============================================WISDOM SKILLS ====================================================================================================
// // const natureskill = (stat:String) => {
// //   if (proficiencies.includes(stat)) {
// //     let total = (d20() + proficiencymod(level) + wismod);
// //     console.log('Your dice roll ${d20} and your wisdom modifier is ${wismod} and your proficiency bonus of ${proficiencymod(level)} a total of ${total}');
// //     return total;
// //   } else {
// //     let total = (d20() + wismod);
// //     console.log('Your dice roll ${d20} and your wisdom modifier is ${wismod} a total of ${total}');
// //     return total;
// //   }
// // }
// // const religionskill = (stat:String) => {
// //   if (proficiencies.includes(stat)) {
// //     let total = (d20() + proficiencymod(level) + wismod);
// //     console.log('Your dice roll ${d20} and your wisdom modifier is ${wismod} and your proficiency bonus of ${proficiencymod(level)} a total of ${total}');
// //     return total;
// //   } else {
// //     let total = (d20() + wismod);
// //     console.log('Your dice roll ${d20} and your wisdom modifier is ${wismod} a total of ${total}');
// //     return total;
// //   }
// // }
// // const animalskill = (stat:String) => {
// //   if (proficiencies.includes(stat)) {
// //     let total = (d20() + proficiencymod(level) + wismod);
// //     console.log('Your dice roll ${d20} and your wisdom modifier is ${wismod} and your proficiency bonus of ${proficiencymod(level)} a total of ${total}');
// //     return total;
// //   } else {
// //     let total = (d20() + wismod);
// //     console.log('Your dice roll ${d20} and your wisdom modifier is ${wismod} a total of ${total}');
// //     return total;
// //   }
// // }
// // const insightskill = (stat:String) => {
// //   if (proficiencies.includes(stat)) {
// //     let total = (d20() + proficiencymod(level) + wismod);
// //     console.log('Your dice roll ${d20} and your wisdom modifier is ${wismod} and your proficiency bonus of ${proficiencymod(level)} a total of ${total}');
// //     return total;
// //   } else {
// //     let total = (d20() + wismod);
// //     console.log('Your dice roll ${d20} and your wisdom modifier is ${wismod} a total of ${total}');
// //     return total;
// //   }
// // }
// // const passiveinsight = (stat:String) => {
// //   if (proficiencies.includes(stat)) {
// //     let total = (d20() + proficiencymod(level) + wismod);
// //     return total;
// //   } else {
// //     let total = (d20() + wismod);
// //     return total;
// //   }
// // }
// // const medicineskill = (stat:String) => {
// //   if (proficiencies.includes(stat)) {
// //     let total = (d20() + proficiencymod(level) + wismod);
// //     console.log('Your dice roll ${d20} and your wisdom modifier is ${wismod} and your proficiency bonus of ${proficiencymod(level)} a total of ${total}');
// //     return total;
// //   } else {
// //     let total = (d20() + wismod);
// //     console.log('Your dice roll ${d20} and your wisdom modifier is ${wismod} a total of ${total}');
// //     return total;
// //   }
// // }
// // const perceptionskill = (stat:String) => {
// //   if (proficiencies.includes(stat)) {
// //     let total = (d20() + proficiencymod(level) + wismod);
// //     console.log('Your dice roll ${d20} and your wisdom modifier is ${wismod} and your proficiency bonus of ${proficiencymod(level)} a total of ${total}');
// //     return total;
// //   } else {
// //     let total = (d20() + wismod);
// //     console.log('Your dice roll ${d20} and your wisdom modifier is ${wismod} a total of ${total}');
// //     return total;
// //   }
// // }
// // const passiveperception = (stat:String) => {
// //   if (proficiencies.includes(stat)) {
// //     let total = (d20() + proficiencymod(level) + wismod);
// //     return total;
// //   } else {
// //     let total = (d20() + wismod);
// //     return total;
// //   }
// // }
// // const survivalskill = (stat:String) => {
// //   if (proficiencies.includes(stat)) {
// //     let total = (d20() + proficiencymod(level) + wismod);
// //     console.log('Your dice roll ${d20} and your wisdom modifier is ${wismod} and your proficiency bonus of ${proficiencymod(level)} a total of ${total}');
// //     return total;
// //   } else {
// //     let total = (d20() + wismod);
// //     console.log('Your dice roll ${d20} and your wisdom modifier is ${wismod} a total of ${total}');
// //     return total;
// //   }
// // }
// // //===============================CHARISMA SKILLS================================================================================================================
// // const deceptionskill = (stat:String) => {
// //   if (proficiencies.includes(stat)) {
// //     let total = (d20() + proficiencymod(level) + chamod);
// //     console.log('Your dice roll ${d20} and your charisma modifier is ${chamod} and your proficiency bonus of ${proficiencymod(level)} a total of ${total}');
// //     return total;
// //   } else {
// //     let total = (d20() + chamod);
// //     console.log('Your dice roll ${d20} and your charisma modifier is ${chamod} a total of ${total}');
// //     return total;
// //   }
// // }
// // const intimidationskill = (stat:String) => {
// //   if (proficiencies.includes(stat)) {
// //     let total = (d20() + proficiencymod(level) + chamod);
// //     console.log('Your dice roll ${d20} and your charisma modifier is ${chamod} and your proficiency bonus of ${proficiencymod(level)} a total of ${total}');
// //     return total;
// //   } else {
// //     let total = (d20() + chamod);
// //     console.log('Your dice roll ${d20} and your charisma modifier is ${chamod} a total of ${total}');
// //     return total;
// //   }
// // }
// // const performanceskill = (stat:String) => {
// //   if (proficiencies.includes(stat)) {
// //     let total = (d20() + proficiencymod(level) + chamod);
// //     console.log('Your dice roll ${d20} and your charisma modifier is ${chamod} and your proficiency bonus of ${proficiencymod(level)} a total of ${total}');
// //     return total;
// //   } else {
// //     let total = (d20() + chamod);
// //     console.log('Your dice roll ${d20} and your charisma modifier is ${chamod} a total of ${total}');
// //     return total;
// //   }
// // }
// // const persuasionskill = (stat:String) => {
// //   if (proficiencies.includes(stat)) {
// //     let total = (d20() + proficiencymod(level) + chamod);
// //     console.log('Your dice roll ${d20} and your charisma modifier is ${chamod} and your proficiency bonus of ${proficiencymod(level)} a total of ${total}');
// //     return total;
// //   } else {
// //     let total = (d20() + chamod);
// //     console.log('Your dice roll ${d20} and your charisma modifier is ${chamod} a total of ${total}');
// //     return total;
// //   }
// // }
// // //=========================================TOTAL HIT POINTS======================================================================================
//   // const hitdice = (stat:String) => {


//   // }



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
//       //  .then(renderCharacter); // we pass that JS object to that function here
// }
// // const hitdie = document.getElementsByClassName('hit_die')
// const respId = document.getElementById('resp-id')
// const pokeName = document.getElementById('resp-name')
// const pokeImg = document.getElementById('resp-sprite');
// const button = document.getElementById('btn')
// // const hitdice = (hitdicemod);
// // function renderCharacter(may pass in 'data') {
//   // we're going to modify the elements on the index.html page
//   // by plugging in the values of the properties of the data recevievd

//   var hitdie = document.getElementsByName("hit_die");
//   // characterClass.innerHTML = `Name: ${data.name}` // /name and .id have to be properties on the JSON object
//   // respId.innerHTML = `Id: ${data.id}`

//   // pokeImg.setAttribute("src", data.sprites.front_default);

//   // pokeImg.setAttribute("height", 300);
// // }

// const hitpointtotal = () => {
//   if (hitdie == 6) {
//     let total: number = (conmod * level) + (level * d6());
//     return total;
//   } else if (hitdie == 8){
//     let total: number  = (conmod * level) + (level * d8());
//     return total;
//   } else if (hitdie == 10) {
//     let total: number  = (conmod * level) + (level * d10());
//     return total;
//   } else (hitdie == 12)
//   let total: number  = (conmod * level) + (level * d12());
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
