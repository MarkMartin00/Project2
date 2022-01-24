import { PlayerCharacter } from "./player-character";
import { SheetService } from "../services/sheet.service";
import { R3DeclareNgModuleFacade } from "@angular/compiler/src/compiler_facade_interface";
import { Features } from "./features";

export class Spell {
  service: SheetService = new SheetService;

  spell_name: string;
  spell_description: string[];
  higher_level: string[];
  range: string;
  components: string[];
  material: string;
  ritual: boolean;
  duration: string;
  concentration: boolean;
  casting_time: string;
  spell_level: number;
  attack_type: string;
  damage_type: string;
  damage_slot: number;
  damage_total: string;
  school: string;
  classes: string[];
  dc_type: string;
  dc_success: string;
  area_effect_type: string;
  area_effect_size: number;
  subclasses: string[];

  constructor(
    spell_name: string,
    spell_description: string[],
    higher_level: string[],
    range: string,
    components: string[],
    material: string,
    ritual: boolean,
    duration: string,
    concentration: boolean,
    casting_time: string,
    spell_level: number,
    attack_type: string,
    damage_type: string,
    damage_slot: number,
    damage_total: string,
    school: string,
    classes: string[],
    dc_type: string,
    dc_success: string,
    area_effect_type: string,
    area_effect_size: number,
    subclasses: string[]

  ){
    this.spell_name = spell_name;
    this.spell_description = spell_description;
    this.higher_level = higher_level;
    this.range = range;
    this.components = components;
    this.material = material;
    this.ritual = ritual;
    this.duration = duration;
    this.concentration = concentration;
    this.casting_time = casting_time;
    this.spell_level = spell_level;
    this.attack_type = attack_type;
    this.damage_type = damage_type;
    this.damage_slot = damage_slot;
    this.damage_total = damage_total;
    this.school = school;
    this.classes = classes;
    this.dc_type = dc_type;
    this.dc_success = dc_success;
    this.area_effect_type = area_effect_type;
    this.area_effect_size = area_effect_size;
    this.subclasses = subclasses;
  }







}
