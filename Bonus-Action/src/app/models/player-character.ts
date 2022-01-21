export class PlayerCharacter {
  char_name: string;
  char_race: string;
  char_class: string;
  char_proficiencies: string[];
  char_lvl: number;
  char_prof_bonus: number;
  char_stats: Map<string, number>;


  constructor(char_name: string, race: string, char_class: string, char_proficiencies: string[], char_lvl: number){
    this.char_name = char_name;
    this.char_race = race;
    this.char_class = char_class;
    this.char_proficiencies = char_proficiencies;
    this.char_lvl = char_lvl;
    this.char_prof_bonus = proficiency_mod(this.char_lvl);
    this.char_stats = new Map([["str", 0], ["dex", 0], ["con", 0], ["int", 0], ["wis", 0], ["cha", 0]]);
  }
}