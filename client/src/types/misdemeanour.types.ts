export const MISDEMEANOURS = [
  "rudeness",
  "vegetables",
  "lift",
  "united",
] as const;
export type MisdemeanourKind = (typeof MISDEMEANOURS)[number];

export const JUST_TALK = "just-talk";
export type JustTalk = typeof JUST_TALK;

export type Misdemeanour = {
  citizenId: number;
  misdemeanour: MisdemeanourKind;
  date: string; // we'll stringify this for easy sending via HTTP rather than storing the full Date object
};

export interface MisdemeanourContext {
  misdemeanours: Array<Misdemeanour>;
  setMisdemeanours: React.Dispatch<React.SetStateAction<Misdemeanour[]>>;
  //setMisdemeanours :(misdemeanours:Array<Misdemeanour>)=>void
}
