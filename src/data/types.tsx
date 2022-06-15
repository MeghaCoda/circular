interface NameValuePair<Type> {
  name: Type;
  value: Type;
}

interface Note {
  id: number;
  names: string[];
  enharmonic: boolean;
}

interface ModeNameList<Type> {
  ionian: Type;
  dorian: Type;
  phrygian: Type;
  lydian: Type;
  mixolydian: Type;
  aeolian: Type;
  locrian: Type;
}

type ModeName = keyof ModeNameList<string>;

interface ScaleNameList {
  major: ModeNameList<number[]>;
  minor: number[];
  harmonicMinor: ModeNameList<number[]>;
  melodicMinor: ModeNameList<number[]>;
}

export type { NameValuePair, Note, ModeName, ModeNameList, ScaleNameList };
