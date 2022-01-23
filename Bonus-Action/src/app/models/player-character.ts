<<<<<<< HEAD
import { Spell } from "./spell";
import { SheetService } from "../services/sheet.service";
import { Features } from "./feats";
=======
import { Spell } from './spell';
import { SheetService } from '../services/sheet.service';
>>>>>>> 8e612f2058089984f4e43295cafc4a5e5238f201

export class PlayerCharacter {
  service: SheetService = new SheetService();

  char_name: string;
  char_race: string;
  char_class: string;
  char_proficiencies: string[];
  char_lvl: number;
  char_prof_bonus: number;
  // Stats
  char_stats: Map<string, number>;
  // Abilities
  char_skills: Map<string, number>;
  // Spells
  char_spells: Spell[];

  constructor(
    char_name: string,
    race: string,
    char_class: string,
    char_proficiencies: string[],
    char_lvl: number
  ) {
    this.char_name = char_name;
    this.char_race = race;
    this.char_class = char_class;
    this.char_proficiencies = char_proficiencies;
    this.char_lvl = char_lvl;
    this.char_prof_bonus = this.getProficiencyMod(this.char_lvl);
    this.char_stats = new Map([
      ['str', 0],
      ['dex', 0],
      ['con', 0],
      ['int', 0],
      ['wis', 0],
      ['cha', 0],
    ]);
    this.char_skills = new Map([
      ['acrobatics', 0],
      ['animal-handling', 0],
      ['arcana', 0],
      ['athletics', 0],
      ['deception', 0],
      ['history', 0],
      ['insight', 0],
      ['intimidation', 0],
      ['investigation', 0],
      ['medicine', 0],
      ['nature', 0],
      ['perception', 0],
      ['performance', 0],
      ['persuasion', 0],
      ['religion', 0],
      ['sleight-of-hand', 0],
      ['stealth', 0],
      ['survival', 0],
    ]);
    this.char_spells = [];
  }

  // SAVING THROWS
  public savingThrow(stat: string) {
    let total = this.service.d20();
    console.log(`You rolled a "${total}"`);
    if (this.char_proficiencies.includes(stat)) {
      console.log(`Profficiency bonus of "${this.char_prof_bonus}" applied`);
      total += this.char_prof_bonus;
    }
    total += this.getStatModifier(this.char_stats.get(stat));
    console.log(
      `Stat modifier of "${this.getStatModifier(
        this.char_stats.get(stat)
      )}" applied for a total of "${total}"`
    );
    return total;
  }

  // ABILITY CHECKS
  public abilityCheck(skill: string) {
    let stat = this.getAbilityStat(skill);
    let total = this.service.d20();
    console.log(`You rolled a "${total}"`);
    if (this.char_proficiencies.includes(skill)) {
      console.log(`Profficiency bonus of "${this.char_prof_bonus}" applied`);
      total += this.char_prof_bonus;
    }
    //
    total += this.getStatModifier(this.char_stats.get(stat));
    console.log(
      `Stat modifier of "${this.getStatModifier(
        this.char_stats.get(stat)
      )}" applied for a total of "${total}"`
    );
    return total;
  }

  // STAT AUTOMATION
  public getStatModifier(stat: number) {
    switch (stat) {
      case 0 || 1:
        return -5;
      case 2 || 3:
        return -4;
      case 4 || 5:
        return -3;
      case 6 || 7:
        return -2;
      case 8 || 9:
        return -1;
      case 10 || 11:
        return 0;
      case 12 || 13:
        return 1;
      case 14 || 15:
        return 2;
      case 16 || 17:
        return 3;
      case 18 || 19:
        return 4;
      case 20 || 21:
        return 5;
      default:
        return 0;
    }
  }

  public getProficiencyMod(level: number) {
    switch (level) {
      case 1 || 2 || 3 || 4:
        return 2;
      case 5 || 6 || 7 || 8:
        return 3;
      case 9 || 10 || 11 || 12:
        return 4;
      case 13 || 14 || 15 || 16:
        return 5;
      case 17 || 18 || 19 || 20:
        return 6;
      default:
        return 0;
    }
  }

  public getAbilityStat(skill: string) {
    if (
      skill == 'acrobatics' ||
      skill == 'sleight-of-hand' ||
      skill == 'stealth'
    ) {
      return 'dex';
    } else if (
      skill == 'animal-handling' ||
      skill == 'insight' ||
      skill == 'medicine' ||
      skill == 'perception'
    ) {
      return 'wis';
    } else if (
      skill == 'arcana' ||
      skill == 'history' ||
      skill == 'investigation' ||
      skill == 'nature' ||
      skill == 'religion'
    ) {
      return 'int';
    } else if (skill == 'athletics') {
      return 'str';
    } else if (
      skill == 'deception' ||
      skill == 'intimidation' ||
      skill == 'performance' ||
      skill == 'persuasion'
    ) {
      return 'cha';
    } else return '';
  }
}
