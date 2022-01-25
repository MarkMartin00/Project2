function getProficiencyMod(level) {
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
function getStatModifier(stat) {
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
function d20() {
    return Math.floor(Math.random() * 20) + 1;
}
function d6() {
    return Math.floor(Math.random() * 6) + 1;
}
function roll_for_stats() {
    var values = [];
    for (var i = 0; i < 6; i++) {
        var roll = [d6(), d6(), d6(), d6()];
        roll.sort((a,b) => (a - b));
        roll.splice(0, 1);
        values.push(roll.reduce(function (partial_sum, a) { return partial_sum + a; }, 0));
    }
    console.log("your stats are ".concat(values));
    return values;
}
var Character = /** @class */ (function () {
    function Character(char_name, race, char_class, char_proficiencies, char_lvl) {
        this.char_name = char_name;
        this.char_race = race;
        this.char_class = char_class;
        this.char_proficiencies = char_proficiencies;
        this.char_lvl = char_lvl;
        this.char_prof_bonus = proficiency_mod(this.char_lvl);
        this.char_stats = new Map([["str", 0], ["dex", 0], ["con", 0], ["int", 0], ["wis", 0], ["cha", 0]]);
    }
    return Character;
}());
var my_character = new Character("Lisa Lisa", "Human", "Monk", ["str", "wis", "int"], 2);
console.log(my_character.char_prof_bonus);
console.log(ability_mod(my_character.char_stats.get("dex")));
function saving_throw(stat) {
    var total = d20();
    console.log("DEBUG: You rolled a ".concat(total));
    if (my_character.char_proficiencies.includes(stat)) {
        console.log("DEBUG: Added prof bonus of ".concat(my_character.char_prof_bonus));
        total += my_character.char_prof_bonus;
    }
    console.log("DEBUG: Added ability mod of ".concat(ability_mod(my_character.char_stats.get(stat))));
    total += ability_mod(my_character.char_stats.get(stat));
    console.log("DEBUG: Total is ".concat(total));
    return total;
}

saving_throw("dex");
