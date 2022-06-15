import {
  NameValuePair,
  Note,
  ModeName,
  ModeNameList,
  ScaleNameList,
} from '../data/types';

import {
  BASE_NOTES,
  KEY_NAMES,
  SCALE_NAMES,
  SCALE_INTERVALS,
  MODE_NAMES,
  NOTES,
  DEFAULT_NOTE,
} from '../data/constants';

const getScaleInterval = (scale: string, scaleIntervals: []): ScaleInterval => {
  return [];
};

const getRotation = (numberOfSlots: number, slotNumber: number): number => {
  const degrees = 360;
  const rotationPerSlice = degrees / numberOfSlots;
  return rotationPerSlice * slotNumber;
};

const orderNotes = (notes: Note[], keyName: KeyName): Note[] => {
  const startingNoteIndex = notes.findIndex(
    (i) => i.names.indexOf(keyName.value) !== -1
  );
  const orderedNotes = [
    ...notes.splice(0, startingNoteIndex),
    ...notes.splice(startingNoteIndex, notes.length - 1),
  ];
  return orderedNotes;
};

const selectNotesByScale = (
  orderedNotes: Note[],
  scaleInterval: number[]
): Note[] => {
  return [];
};

const getSlotName = (notes: Note[], keyName: KeyName): string => '';

export {
  getSlotName,
  selectNotesByScale,
  getRotation,
  getScaleInterval,
  orderNotes,
};
