import { PlayerCharacter } from "./player-character";
import { Spell } from "./spell";
import { SheetService } from "../services/sheet.service";
import { R3DeclareNgModuleFacade } from "@angular/compiler/src/compiler_facade_interface";

export class Features {
  service: SheetService = new SheetService;

    feature_name: string;
    feature_description: string[];
    level_gained: number;
    prerequisites: string[];
    char_class: string;
    subclasses: string[];
    feature_specific: string[]; //this is the fighting style types etc for subclasses
    subclass_parent: string;

  constructor(
    feature_name: string,
    feature_description: string[],
    level_gained: number,
    prerequisites: string[],
    char_class: string,
    subclasses: string[],
    feature_specific: string[], //this is the fighting style types etc for subclasses
    subclass_parent: string,

  ){
    this.feature_name = feature_name;
    this.feature_description = feature_description;
    this.level_gained = level_gained;
    this.prerequisites = prerequisites;
    this.char_class = char_class;
    this.subclasses = subclasses;
    this.feature_specific = feature_specific; //this is the fighting style types etc for subclasses
    this.subclass_parent = subclass_parent;
  }







}
