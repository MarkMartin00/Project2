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
    this.char_prof_bonus = this.getProficiencyMod(this.char_level);
    this.char_ac = 10;
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
  public calcAC() {
    if ((this.char_class = 'Barbarian')) {
      if ((this.char_features = 'Unarmored_Defense') && (this.char_equipment = 'shield')) {
        this.char_ac += 10 + 2 + this.getStatModifier(this.char_stats.get("dex")) + this.getStatModifier(this.char_stats.get("con"));
        return this.char_ac;
      } else if (this.char_features = 'Unarmored Defense') {
        this.char_ac += 10 + this.getStatModifier(this.char_stats.get("dex")) + this.getStatModifier(this.char_stats.get("con"));
        return this.char_ac;
      }
    } else if ((this.char_class = 'Monk')) {
      if ((this.char_features = 'Unarmored_Defense') && (this.char_equipment = 'shield')) {
        this.char_ac += 10 + 2 + this.getStatModifier(this.char_stats.get("dex")) + this.getStatModifier(this.char_stats.get("wis"));
        return this.char_ac;
      } else if (this.char_features = 'Unarmored Defense') {
        this.char_ac += 10 + this.getStatModifier(this.char_stats.get("dex")) + this.getStatModifier(this.char_stats.get("wis"));
        return this.char_ac;
      }
    } else if ((this.char_class = '')) {
      if ((this.char_equipment = 'padded_armor') && (this.char_equipment = 'shield')) {
        this.char_ac += 12 + 2 + this.getStatModifier(this.char_stats.get("dex")) + this.magical_equipment.get("plus");
        return this.char_ac;
      } else if ((this.char_equipment = 'padded_armor')) {
        this.char_ac += 12 + this.getStatModifier(this.char_stats.get("dex")) + this.magical_equipment.get("plus");
        return this.char_ac;
      } else if ((this.char_equipment = 'light_armor') && (this.char_equipment = 'shield')) {
        this.char_ac += 11 + 2 + this.getStatModifier(this.char_stats.get("dex")) + this.magical_equipment.get("plus");
        return this.char_ac;
      } else if ((this.char_equipment = 'light_armor')) {
        this.char_ac += 11 + this.getStatModifier(this.char_stats.get("dex")) + this.magical_equipment.get("plus");
        return this.char_ac;
      } else if ((this.char_equipment = 'hide_armor') && (this.char_equipment = 'shield')) {
        this.char_ac += 12 + 2 + this.statModifierMax() + this.magical_equipment.get("plus");
        return this.char_ac;
      } else if ((this.char_equipment = 'hide_armor')) {
        this.char_ac += 12 + this.statModifierMax() + this.magical_equipment.get("plus");
        return this.char_ac;
      } else if ((this.char_equipment = 'chain_shirt') && (this.char_equipment = 'shield')) {
        this.char_ac += 13 + 2 + this.statModifierMax() + this.magical_equipment.get("plus");
        return this.char_ac;
      } else if ((this.char_equipment = 'chain_shirt')) {
        this.char_ac += 13 + this.statModifierMax() + this.magical_equipment.get("plus");
        return this.char_ac;
      } else if ((this.char_equipment = 'half_plate') && (this.char_equipment = 'shield')) {
        this.char_ac += 15 + 2 + this.statModifierMax() + this.magical_equipment.get("plus");
        return this.char_ac;
      } else if ((this.char_equipment = 'half_plate')) {
        this.char_ac += 15 + this.statModifierMax() + this.magical_equipment.get("plus");
        return this.char_ac;
      } else if (((this.char_equipment = 'scale_mail') || (this.char_equipment = 'breastplate_armor') || (this.char_equipment = 'ring_mail')) && (this.char_equipment = 'shield')) {
        this.char_ac += 14 + 2 + this.magical_equipment.get("plus");
        return this.char_ac;
      } else if ((this.char_equipment = 'scale_mail') || (this.char_equipment = 'breastplate_armor') || (this.char_equipment = 'ring_mail')) {
        this.char_ac += 14 + this.magical_equipment.get("plus");
        return this.char_ac;
      } else if ((this.char_equipment = 'chain_mail') && (this.char_equipment = 'shield')) {
        this.char_ac += 16 + 2 + this.magical_equipment.get("plus");
        return this.char_ac;
      } else if ((this.char_equipment = 'chain_mail')) {
        this.char_ac += 16 + this.magical_equipment.get("plus");
        return this.char_ac;
      } else if ((this.char_equipment = 'splint_armor') && (this.char_equipment = 'shield')) {
        this.char_ac += 17 + 2 + this.magical_equipment.get("plus");
        return this.char_ac;
      } else if ((this.char_equipment = 'splint_armor')) {
        this.char_ac += 17 + this.magical_equipment.get("plus");
        return this.char_ac;
      } else if ((this.char_equipment = 'plate_armor') && (this.char_equipment = 'shield')) {
        this.char_ac += 18 + 2 + this.magical_equipment.get("plus");
        return this.char_ac;
      } else if ((this.char_equipment = 'plate_armor')) {
        this.char_ac += 18 + this.magical_equipment.get("plus");
        return this.char_ac;
      }
    }}

  public statModifierMax() {
    if (this.getStatModifier(this.char_stats.get("dex")) >= 2) {
      return 2;
    } else {
      return this.getStatModifier(this.char_stats.get("dex"));
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
