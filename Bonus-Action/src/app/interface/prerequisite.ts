import { AbilityScore } from "./ability-score";

export interface Prerequisite {
  ability_score: AbilityScore
  minimum_score: number
}
