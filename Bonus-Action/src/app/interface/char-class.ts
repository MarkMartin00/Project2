import { MultiClassing } from "./multi-classing";
import { Proficiency } from "./proficiency";
import { ProficiencyChoice } from "./proficiency-choice";
import { SavingThrow } from "./saving-throw";
import { Spellcasting } from "./spellcasting";
import { StartingEquipment } from "./starting-equipment";
import { StartingEquipmentOption } from "./starting-equipment-option";
import { Subclass } from "./sub-class";

export interface CharClass {
  index: string
  name: string
  hit_die: number
  proficiency_choices: ProficiencyChoice[]
  proficiencies: Proficiency[]
  saving_throws: SavingThrow[]
  starting_equipment: StartingEquipment[]
  starting_equipment_options: StartingEquipmentOption[]
  class_levels: string
  multi_classing: MultiClassing
  subclasses: Subclass[]
  spellcasting: Spellcasting
  spells: string
  url: string
}
