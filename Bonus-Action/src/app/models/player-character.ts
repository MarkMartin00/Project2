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
  feature_name: string;
  equipment_name: string;
  magical_equipment: any;
  equipment_proficiencies: any;

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
      if (
        (this.feature_name = 'Unarmored_Defense') &&
        (this.equipment_name = 'shield')
      ) {
        this.char_ac +=
          10 +
          2 +
          this.getStatModifier(this.char_stats.get('dex')) +
          this.getStatModifier(this.char_stats.get('con'));
        return this.char_ac;
      } else if ((this.feature_name = 'Unarmored_Defense')) {
        this.char_ac +=
          10 +
          this.getStatModifier(this.char_stats.get('dex')) +
          this.getStatModifier(this.char_stats.get('con'));
        return this.char_ac;
      }
    } else if ((this.char_class = 'Monk')) {
      if (
        (this.feature_name = 'Unarmored_Defense') &&
        (this.equipment_name = 'shield')
      ) {
        this.char_ac +=
          10 +
          2 +
          this.getStatModifier(this.char_stats.get('dex')) +
          this.getStatModifier(this.char_stats.get('wis'));
        return this.char_ac;
      } else if ((this.feature_name = 'Unarmored_Defense')) {
        this.char_ac +=
          10 +
          this.getStatModifier(this.char_stats.get('dex')) +
          this.getStatModifier(this.char_stats.get('wis'));
        return this.char_ac;
      }
    } else if ((this.char_class = '')) {
      if (
        (this.equipment_name = 'padded_armor') &&
        (this.equipment_name = 'shield')
      ) {
        this.char_ac +=
          12 +
          2 +
          this.getStatModifier(this.char_stats.get('dex')) +
          this.magical_equipment.get('plus');
        return this.char_ac;
      } else if ((this.equipment_name = 'padded_armor')) {
        this.char_ac +=
          12 +
          this.getStatModifier(this.char_stats.get('dex')) +
          this.magical_equipment.get('plus');
        return this.char_ac;
      } else if (
        (this.equipment_name = 'studded_armor') &&
        (this.equipment_name = 'shield')
      ) {
        this.char_ac +=
          12 +
          2 +
          this.getStatModifier(this.char_stats.get('dex')) +
          this.magical_equipment.get('plus');
        return this.char_ac;
      } else if ((this.equipment_name = 'studded_armor')) {
        this.char_ac +=
          12 +
          this.getStatModifier(this.char_stats.get('dex')) +
          this.magical_equipment.get('plus');
        return this.char_ac;
      } else if (
        (this.equipment_name = 'light_armor') &&
        (this.equipment_name = 'shield')
      ) {
        this.char_ac +=
          11 +
          2 +
          this.getStatModifier(this.char_stats.get('dex')) +
          this.magical_equipment.get('plus');
        return this.char_ac;
      } else if ((this.equipment_name = 'light_armor')) {
        this.char_ac +=
          11 +
          this.getStatModifier(this.char_stats.get('dex')) +
          this.magical_equipment.get('plus');
        return this.char_ac;
      } else if (
        (this.equipment_name = 'hide_armor') &&
        (this.equipment_name = 'shield')
      ) {
        this.char_ac +=
          12 + 2 + this.statModifierMax() + this.magical_equipment.get('plus');
        return this.char_ac;
      } else if ((this.equipment_name = 'hide_armor')) {
        this.char_ac +=
          12 + this.statModifierMax() + this.magical_equipment.get('plus');
        return this.char_ac;
      } else if (
        (this.equipment_name = 'chain_shirt') &&
        (this.equipment_name = 'shield')
      ) {
        this.char_ac +=
          13 + 2 + this.statModifierMax() + this.magical_equipment.get('plus');
        return this.char_ac;
      } else if ((this.equipment_name = 'chain_shirt')) {
        this.char_ac +=
          13 + this.statModifierMax() + this.magical_equipment.get('plus');
        return this.char_ac;
      } else if (
        (this.equipment_name = 'half_plate') &&
        (this.equipment_name = 'shield')
      ) {
        this.char_ac +=
          15 + 2 + this.statModifierMax() + this.magical_equipment.get('plus');
        return this.char_ac;
      } else if ((this.equipment_name = 'half_plate')) {
        this.char_ac +=
          15 + this.statModifierMax() + this.magical_equipment.get('plus');
        return this.char_ac;
      } else if (
        ((this.equipment_name = 'scale_mail') ||
          (this.equipment_name = 'breastplate_armor') ||
          (this.equipment_name = 'ring_mail')) &&
        (this.equipment_name = 'shield')
      ) {
        this.char_ac += 14 + 2 + this.magical_equipment.get('plus');
        return this.char_ac;
      } else if (
        (this.equipment_name = 'scale_mail') ||
        (this.equipment_name = 'breastplate_armor') ||
        (this.equipment_name = 'ring_mail')
      ) {
        this.char_ac += 14 + this.magical_equipment.get('plus');
        return this.char_ac;
      } else if (
        (this.equipment_name = 'chain_mail') &&
        (this.equipment_name = 'shield')
      ) {
        this.char_ac += 16 + 2 + this.magical_equipment.get('plus');
        return this.char_ac;
      } else if ((this.equipment_name = 'chain_mail')) {
        this.char_ac += 16 + this.magical_equipment.get('plus');
        return this.char_ac;
      } else if (
        (this.equipment_name = 'splint_armor') &&
        (this.equipment_name = 'shield')
      ) {
        this.char_ac += 17 + 2 + this.magical_equipment.get('plus');
        return this.char_ac;
      } else if ((this.equipment_name = 'splint_armor')) {
        this.char_ac += 17 + this.magical_equipment.get('plus');
        return this.char_ac;
      } else if (
        (this.equipment_name = 'plate_armor') &&
        (this.equipment_name = 'shield')
      ) {
        this.char_ac += 18 + 2 + this.magical_equipment.get('plus');
        return this.char_ac;
      } else if ((this.equipment_name = 'plate_armor')) {
        this.char_ac += 18 + this.magical_equipment.get('plus');
        return this.char_ac;
      } else {
        this.char_ac += 10 + this.getStatModifier(this.char_stats.get('dex'));
      }
    }
  }

  public statModifierMax() {
    if (this.getStatModifier(this.char_stats.get('dex')) >= 2) {
      return 2;
    } else {
      return this.getStatModifier(this.char_stats.get('dex'));
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
  public d4() {
    var d4 = Math.floor(Math.random() * (4 - 1 + 1)) + 1;
    return d4;
  }
  public d6() {
    var d6 = Math.floor(Math.random() * (6 - 1 + 1)) + 1;
    return d6;
  }
  public d8() {
    var d8 = Math.floor(Math.random() * (8 - 1 + 1)) + 1;
    return d8;
  }
  public d10() {
    var d10 = Math.floor(Math.random() * (10 - 1 + 1)) + 1;
    return d10;
  }
  public d12() {
    var d12 = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
    return d12;
  }
  public d20() {
    var d20 = Math.floor(Math.random() * (20 - 1 + 1)) + 1;
    return d20;
  }

  public meleeAttackRoll(martial:boolean, simple:boolean) {
    if ((this.equipment_proficiencies.includes(martial=true)) || (this.equipment_proficiencies.includes(simple=true))) {
      let attack = d20() + this.getProficiencyMod() + this.getStatModifier();
      alert(
        'Your attack roll is a ${d20} with an added proficiency bonus of ${this.getProficiencyMod() and your ability modifier of ${this.getStatModifier()} which totals ${attack}'
      );
    } else {
      let attack = d20() + this.getStatModifier();
      alert(
        'Your attack roll is a ${d20} with  your ability modifier of ${this.getStatModifier()} since you are not proficient with this weapon. This totals ${attack}'
      );
    }
  }

  public meleeAttack() {
    let damage: number;
    if (
      (this.equipment_name = 'Dagger') ||
      (this.equipment_name = 'Dart') ||
      (this.equipment_name = 'Whip')
    ) {
      damage =
        this.d4() +
        this.getStatModifier(this.char_stats.get('dex')) +
        this.magical_equipment.get('plus');
      alert("You've done ${damage} piercing damage!");
      return damage;
    } else if (
      (this.equipment_name = 'Scrimitar') ||
      (this.equipment_name = 'Handaxe')
    ) {
      damage =
        this.d6() +
        this.getStatModifier(this.char_stats.get('str')) +
        this.magical_equipment.get('plus');
      alert("You've done ${damage} slashing damage!");
      return damage;
    } else if (
      (this.equipment_name = 'Club') ||
      (this.equipment_name = 'Light-Hammer')
    ) {
      damage =
        this.d4() +
        this.getStatModifier(this.char_stats.get('str')) +
        this.magical_equipment.get('plus');
      alert("You've done ${damage} bludgeoning damage!");
      return damage;
    } else if (
      (this.equipment_name = 'Shortsword') ||
      (this.equipment_name = 'Javelin')
    ) {
      damage =
        this.d6() +
        this.getStatModifier(this.char_stats.get('str')) +
        this.magical_equipment.get('plus');
      alert("You've done ${damage} piercing damage!");
      return damage;
    } else if (
      (this.equipment_name = 'Mace') ||
      (this.equipment_name = 'Quarterstaff-1hand')
    ) {
      damage =
        this.d6() +
        this.getStatModifier(this.char_stats.get('str')) +
        this.magical_equipment.get('plus');
      alert("You've done ${damage} bludgeoning damage!");
      return damage;
    } else if ((this.equipment_name = 'Sickle')) {
      damage =
        this.d4() +
        this.getStatModifier(this.char_stats.get('str')) +
        this.magical_equipment.get('plus');
      alert("You've done ${damage} slashing damage!");
      return damage;
    } else if (
      (this.equipment_name = 'Spear-1hand') ||
      (this.equipment_name = 'Trident-1hand')
    ) {
      damage =
        this.d6() +
        this.getStatModifier(this.char_stats.get('str')) +
        this.magical_equipment.get('plus');
      alert("You've done ${damage} piercing damage!");
      return damage;
    } else if (
      (this.equipment_name = 'Spear-2hand') ||
      (this.equipment_name = 'Morningstar')
    ) {
      damage =
        this.d8() +
        this.getStatModifier(this.char_stats.get('str')) +
        this.magical_equipment.get('plus');
      alert("You've done ${damage} piercing damage!");
      return damage;
    } else if (
      (this.equipment_name = 'Light-Crossbow') ||
      (this.equipment_name = 'Rapier') ||
      (this.equipment_name = 'Longbow')
    ) {
      damage =
        this.d8() +
        this.getStatModifier(this.char_stats.get('dex')) +
        this.magical_equipment.get('plus');
      alert("You've done ${damage} piercing damage!");
      return damage;
    } else if (
      (this.equipment_name = 'Shortbow') ||
      (this.equipment_name = 'Hand-Crossbow')
    ) {
      damage =
        this.d6() +
        this.getStatModifier(this.char_stats.get('dex')) +
        this.magical_equipment.get('plus');
      alert("You've done ${damage} piercing damage!");
      return damage;
    } else if ((this.equipment_name = 'Sling')) {
      damage =
        this.d4() +
        this.getStatModifier(this.char_stats.get('dex')) +
        this.magical_equipment.get('plus');
      alert("You've done ${damage} bludgeoning damage!");
      return damage;
    } else if ((this.equipment_name = 'Heavy-Crossbow')) {
      damage =
        this.d10() +
        this.getStatModifier(this.char_stats.get('dex')) +
        this.magical_equipment.get('plus');
      alert("You've done ${damage} piercing damage!");
      return damage;
    } else if (
      (this.equipment_name = 'Battleaxe-1hand') ||
      (this.equipment_name = 'Longsword-1hand')
    ) {
      damage =
        this.d8() +
        this.getStatModifier(this.char_stats.get('str')) +
        this.magical_equipment.get('plus');
      alert("You've done ${damage} slashing damage!");
      return damage;
    } else if (
      (this.equipment_name = 'Flail') ||
      (this.equipment_name = 'Warhammer-1hand') ||
      (this.equipment_name = 'Quarterstaff-2hand') ||
      (this.equipment_name = 'Greatclub')
    ) {
      damage =
        this.d8() +
        this.getStatModifier(this.char_stats.get('str')) +
        this.magical_equipment.get('plus');
      alert("You've done ${damage} bludgeoning damage!");
      return damage;
    } else if (
      (this.equipment_name = 'Glaive-2hand') ||
      (this.equipment_name = 'Longsword-2hand') ||
      (this.equipment_name = 'Halberd-2hand') ||
      (this.equipment_name = 'Battleaxe-2hand')
    ) {
      damage =
        this.d10() +
        this.getStatModifier(this.char_stats.get('str')) +
        this.magical_equipment.get('plus');
      alert("You've done ${damage} slashing damage!");
      return damage;
    } else if ((this.equipment_name = 'Greataxe-2hand')) {
      damage =
        this.d12() +
        this.getStatModifier(this.char_stats.get('str')) +
        this.magical_equipment.get('plus');
      alert("You've done ${damage} slashing damage!");
      return damage;
    } else if ((this.equipment_name = 'Greatsword-2hand')) {
      damage =
        this.d6() +
        this.d6() +
        this.getStatModifier(this.char_stats.get('str')) +
        this.magical_equipment.get('plus');
      alert("You've done ${damage} bludgeoning damage!");
      return damage;
    } else if ((this.equipment_name = 'Lance-2hand')) {
      damage =
        this.d12() +
        this.getStatModifier(this.char_stats.get('str')) +
        this.magical_equipment.get('plus');
      alert("You've done ${damage} piercing damage!");
      return damage;
    } else if ((this.equipment_name = 'Maul-2hand')) {
      damage =
        this.d6() +
        this.d6() +
        this.getStatModifier(this.char_stats.get('str')) +
        this.magical_equipment.get('plus');
      alert("You've done ${damage} bludgeoning damage!");
      return damage;
    } else if ((this.equipment_name = 'Pike-2hand')) {
      damage =
        this.d10() +
        this.getStatModifier(this.char_stats.get('str')) +
        this.magical_equipment.get('plus');
      alert("You've done ${damage} piercing damage!");
      return damage;
    } else if (
      (this.equipment_name = 'Trident-2hand') ||
      (this.equipment_name = 'War-pick')
    ) {
      damage =
        this.d8() +
        this.getStatModifier(this.char_stats.get('str')) +
        this.magical_equipment.get('plus');
      alert("You've done ${damage} piercing damage!");
      return damage;
    } else if ((this.equipment_name = 'Warhammer-2hand')) {
      damage =
        this.d10() +
        this.getStatModifier(this.char_stats.get('str')) +
        this.magical_equipment.get('plus');
      alert("You've done ${damage} bludgeoning damage!");
      return damage;
    }
    return alert('You did 1 bludgeoning damage with an unarmed strike!');
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


