import { Tag } from "./Tag";

// An interface for a stratagem rule
export interface Rule {
  title: string; // the text of the rule
  subtitle: string; // the subtitle for the rule
  description: string; // the description of the rule
  type: "Stratagem" | "Unit" | "Weapon" | "Movement"; // the type of the rule
  tags: Tag[]; // the searchable tags for the rule
}

// An example of a stratagem rule object
// const commandReRollRule: Rule = {
//     title: "Stratagems",
//     subtitle: "Command Re-roll",
//     description: "To use a Stratagem you must pay the CP specified. ■ The same Stratagem cannot be used more than once in the same phase.",
//     type: "Stratagem",
//     tags: ["stratagem", "command", "re-roll", "battle tactic", "either player's turn", "1CP", "saving throw"],
// };

// An example of a unit rule object
// const spaceMarineRule: Rule = {
//     title: "Space Marines",
//     subtitle: "Space Marines",
//     description: "Space Marines are genetically modified superhuman soldiers, the elite warriors of the Imperium of Man.",
//     type: "Unit",
//     tags: ["space marine", "imperium", "unit"],
// };
