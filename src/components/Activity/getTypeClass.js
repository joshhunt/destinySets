import styles from './styles.styl';

// Yeah I know, this isnt great.

const defs = {
  "Elimination": styles.typePvp,
  "Inferno Rumble": styles.typePvp,
  "Inferno Supremacy": styles.typePvp,
  "Zone Control": styles.typePvp,
  "Trials of Osiris": styles.typePvp,
  "Mayhem Rumble": styles.typePvp,
  "Arsenal": styles.typePvp,
  "Sparrow Racing": styles.typePvp,
  "Iron Banner Control": styles.typePvp,
  "Inferno Clash": styles.typePvp,
  "Doubles": styles.typePvp,
  "Inferno Skirmish": styles.typePvp,
  "Supremacy": styles.typePvp,
  "Salvage": styles.typePvp,
  "Inferno Control": styles.typePvp,
  "Rift": styles.typePvp,
  "The Crucible": styles.typePvp,
  "Mayhem Clash": styles.typePvp,
  "Combined Arms": styles.typePvp,
  "Iron Banner Clash": styles.typePvp,
  "Mayhem Supremacy": styles.typePvp,
  "Inferno 6v6": styles.typePvp,
  "Clash": styles.typePvp,
  "Rumble": styles.typePvp,
  "Rumble Supremacy": styles.typePvp,
  "Control": styles.typePvp,
  "Inferno Salvage": styles.typePvp,
  "Skirmish": styles.typePvp,

  "Story": styles.typeStory,
  "Story Challenge": styles.typeStory,
  "Quest": styles.typeStory,

  "Patrol": styles.typeExplore,

  "Raid": styles.typeRaid,

  "Challenge of the Elders": styles.typeArena,
  "Prison of Elders": styles.typeArena,

  "Strike": styles.typeStrike,
};

export default function getForActivityName(type) {
  return defs[type] || styles.typeMisc;
}
