// An interface for a tag
export interface Tag {
  name:
    | "command"
    | "unit"
    | "rule"
    | "faction"
    | "phase"
    | "1cp"
    | "re-roll"
    | "stratagem"; // A LOT of tags still to come
  description?: string; // the description of the tag
}

// An example of a tag object
//   const commandTag: Tag = {
//     name: "command",
//     description: "An optional description that will be displayed as tooltip",
//   };
