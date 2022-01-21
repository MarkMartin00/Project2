import { Info } from "./info";
import { SpellcastingAbility } from "./spellcasting-ability";

export interface Spellcasting {
  level: number
  spellcasting_ability: SpellcastingAbility
  info: Info[]
}
