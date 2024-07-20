import { Phase } from './Phase';
import { Rule } from './Rule';
import { Tag } from './Tag';
import { Target } from './Target';

// An interface for a stratagem rule
export interface StratagemRule extends Rule {
  stratagem: Stratagem; // the reference to the stratagem
}

// An example of a stratagem rule object with tags
// const commandReRollRule: StratagemRule = {
//   stratagem: commandReRoll,
// };

// An interface for a stratagem
export interface Stratagem {
  name: string; // the name of the stratagem
  quote?: string; // the quote for the stratagem
  description: string; // the description of the stratagem
  cost: number; // the command point cost of the stratagem
  category: 'Battle Tactic' | 'Epic Deed' | 'Strategic Ploy' | 'Wargear'; // the category of the stratagem
  when: "Either Player's Turn" | 'Your Turn' | "Opponent's Turn"; // when the stratagem can be used
  phase: Phase;
  condition: string; // the condition for using the stratagem
  target?: Target[];
  effect: string; // the effect of using the stratagem
  tags?: Tag[]; // the searchable tags for the stratagem
}

// An example of a stratagem object
// const commandReRoll: Stratagem = {
//     name: "Command Re-roll",
//     cost: 1,
//     category: "Battle Tactic",
//     timing: "Either Player's Turn",
//     description:
//     "A great commander can bend even the vagaries of fate and fortune to their will, the better to ensure victory.",
//     condition:
//     "In any phase, just after you have made a Hit roll, a Wound roll, a Damage roll, a saving throw, an Advance roll, a Charge roll, a Desperate Escape test, a Hazardous test, or just after you have rolled the dice to determine the number of attacks made with a weapon, for an attack, model or unit from your army.",
//     effect: "You re-roll that roll, test or saving throw",
//     tags: [ "stratagem" ,"command", "re-roll", "battle tactic", "either player's turn", "1CP", "test", "saving throw"],
// };

// An interface for a firebase document that contains an array of stratagems
export interface StratagemsDocument {
  id: string; // the document id
  stratagems: Stratagem[]; // the array of stratagems
  tags: Tag[]; // the searchable tags for the rule
}

// An example of a firebase document object
// const stratagemsDocument: StratagemsDocument = {
//     id: "core-stratagems",
//     stratagems: [commandReRoll],
//     tags: ["rule", "stratagem"],
// };
