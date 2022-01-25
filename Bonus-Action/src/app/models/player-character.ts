import { Spell } from './spell';
import { SheetService } from '../services/sheet.service';
import { Features } from './features';

export class PlayerCharacter {
  service: SheetService = new SheetService();

  char_name: string;
  char_race: string;
  char_class: string;
  char_proficiencies: string[];
  char_level: number;
  char_background: string;
  char_alignment: string;
  char_prof_bonus: number;
  char_hp: number;
  char_hp_max: number;
  char_hp_temp: number;
  char_str: number;
  char_dex: number;
  char_con: number;
  char_int: number;
  char_wis: number;
  char_cha: number;
  char_strmod:number;
  char_dexmod:number;
  char_conmod:number;
  char_intmod:number;
  char_wismod:number;
  char_chamod:number;
  char_ac: number;
  char_spd: number;
  char_init: number;
  // Stats
  char_stats: Map<string, number>;
  // Abilities
  char_skills: Map<string, number>;
  // Spells
  char_spells: Spell[];

  constructor(
    char_name: string,
    char_race: string,
    char_class: string,
    char_level: number,
    char_background: string,
    char_alignment: string,
    char_str: number,
    char_dex: number,
    char_con: number,
    char_int: number,
    char_wis: number,
    char_cha: number,
    char_ac: number,
    char_spd: number,
    char_init: number
  ) {
    this.char_name = char_name;
    this.char_class = char_class;
    this.char_level = char_level;
    this.char_race = char_race;
    this.char_background = char_background;
    this.char_alignment = char_alignment;
    this.char_str = char_str;
    this.char_dex = char_dex;
    this.char_con = char_con;
    this.char_int = char_int;
    this.char_wis = char_wis;
    this.char_cha = char_cha;
    this.char_ac = char_ac;
    this.char_spd = char_spd;
    this.char_init = char_init;

    this.char_prof_bonus = this.getProficiencyMod(this.char_level);
    this.char_ac = 10;

    this.char_strmod = this.getStatModifier(char_str);
    this.char_dexmod = this.getStatModifier(char_dex);
    this.char_conmod = this.getStatModifier(char_con);
    this.char_intmod = this.getStatModifier(char_int);
    this.char_wismod = this.getStatModifier(char_wis);
    this.char_chamod = this.getStatModifier(char_cha);
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
  public calcAC() {
    if ((this.char_class = 'Barbarian')) {
      this.char_ac += this.getStatModifier(this.char_stats.get("dex")) + this.getStatModifier(this.char_stats.get("con"));
    } else {
      this.char_ac += this.getStatModifier(this.char_stats.get("dex"));
    }
  }

  public getStatModifier(stat: number) {
    switch (stat) {
      case 0:
      case 1:
        return -5;
      case 2:
      case 3:
        return -4;
      case 4:
      case 5:
        return -3;
      case 6:
      case 7:
        return -2;
      case 8:
      case 9:
        return -1;
      case 10:
      case 11:
        return 0;
      case 12:
      case 13:
        return 1;
      case 14:
      case 15:
        return 2;
      case 16:
      case 17:
        return 3;
      case 18:
      case 19:
        return 4;
      case 20:
      case 21:
        return 5;
      default:
        return 0;
    }
  }

  public getProficiencyMod(level: number) {
    switch (level) {
      case 0:
      case 1:
      case 2:
      case 3:
      case 4:
        return 2;
      case 5:
      case 6:
      case 7:
      case 8:
        return 3;
      case 9:
      case 10:
      case 11:
      case 12:
        return 4;
      case 13:
      case 14:
      case 15:
      case 16:
        return 5;
      case 17:
      case 18:
      case 19:
      case 20:
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
