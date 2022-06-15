import { NameValuePair, Note, ModeNameList, ScaleNameList } from './types';

const KEY_NAMES: NameValuePair<string>[] = [
  { name: 'Ab', value: 'Ab' },
  { name: 'A', value: 'A' },
  { name: 'A#', value: 'A#' },
  { name: 'Bb', value: 'Bb' },
  { name: 'B', value: 'B' },
  { name: 'B#', value: 'B#' },
  { name: 'Cb', value: 'Cb' },
  { name: 'C', value: 'C' },
  { name: 'C#', value: 'C#' },
  { name: 'Db', value: 'Db' },
  { name: 'D', value: 'D' },
  { name: 'D#', value: 'D#' },
  { name: 'Eb', value: 'Eb' },
  { name: 'E', value: 'E' },
  { name: 'E#', value: 'E#' },
  { name: 'Fb', value: 'Fb' },
  { name: 'F', value: 'F' },
  { name: 'F#', value: 'F#' },
  { name: 'Gb', value: 'Gb' },
  { name: 'G', value: 'G' },
  { name: 'G#', value: 'G#' },
];
const SCALE_NAMES: NameValuePair<string>[] = [
  { name: 'major', value: 'major' },
  { name: 'natural minor', value: 'minor' },
  { name: 'melodic minor', value: 'melodicMinor' },
  { name: 'harmonic minor', value: 'harmonicMinor' },
];

const MAJOR_SCALE_INTERVALS: ModeNameList<number[]> = {
  ionian: [2, 2, 1, 2, 2, 2, 1],
  dorian: [2, 1, 2, 2, 2, 1, 2],
  phrygian: [1, 2, 2, 2, 1, 2, 2],
  lydian: [2, 2, 2, 1, 2, 2, 1],
  mixolydian: [2, 2, 1, 2, 2, 1, 2],
  aeolian: [2, 1, 2, 2, 1, 2, 2],
  locrian: [1, 2, 2, 1, 2, 2, 2],
};

const HARMONIC_MINOR_SCALES: ModeNameList<number[]> = {
  ionian: [2, 1, 2, 2, 1, 3, 1],
  dorian: [1, 2, 2, 1, 3, 1, 2],
  phrygian: [2, 2, 1, 3, 1, 2, 1],
  lydian: [2, 1, 3, 1, 2, 1, 2],
  mixolydian: [1, 3, 1, 2, 1, 2, 2],
  aeolian: [3, 1, 2, 1, 2, 2, 1],
  locrian: [1, 2, 1, 2, 2, 1, 3],
};

const MELODIC_MINOR_SCALES: ModeNameList<number[]> = {
  ionian: [2, 1, 2, 2, 2, 2, 1],
  dorian: [1, 2, 2, 2, 2, 1, 2],
  phrygian: [2, 2, 2, 2, 1, 2, 1],
  lydian: [2, 2, 2, 1, 2, 1, 2],
  mixolydian: [2, 2, 1, 2, 1, 2, 2],
  aeolian: [2, 1, 2, 1, 2, 2, 2],
  locrian: [1, 2, 1, 2, 2, 2, 2],
};
const SCALE_INTERVALS: ScaleNameList = {
  major: MAJOR_SCALE_INTERVALS,
  minor: MAJOR_SCALE_INTERVALS['aeolian'],
  harmonicMinor: HARMONIC_MINOR_SCALES,
  melodicMinor: MELODIC_MINOR_SCALES,
};

const MODE_NAMES: ModeNameList<string> = {
  ionian: 'ionian',
  dorian: 'dorian',
  phrygian: 'phrygian',
  lydian: 'lydian',
  mixolydian: 'mixolydian',
  aeolian: 'aeolian',
  locrian: 'locrian',
};

const BASE_NOTES: string[] = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
const NOTES: Note[] = [
  {
    id: 0,
    names: ['G#', 'Ab'],
    enharmonic: true,
  },
  {
    id: 1,
    names: ['Gx', 'A', 'Bbb'],
    enharmonic: false,
  },
  {
    id: 2,
    names: ['Cbb', 'A#', 'Bb'],
    enharmonic: true,
  },
  {
    id: 3,
    names: ['Ax', 'B', 'Cb'],
    enharmonic: false,
  },
  {
    id: 4,
    names: ['B#', 'C', 'Dbb'],
    enharmonic: false,
  },
  {
    id: 5,
    names: ['Bx', 'Db', 'C#'],
    enharmonic: true,
  },
  {
    id: 6,
    names: ['Cx', 'D', 'Ebb'],
    enharmonic: false,
  },
  {
    id: 7,
    names: ['Fbb', 'Eb', 'D#'],
    enharmonic: true,
  },
  {
    id: 8,
    names: ['Dx', 'E', 'Fb'],
    enharmonic: false,
  },
  {
    id: 9,
    names: ['E#', 'F', 'Gbb'],
    enharmonic: false,
  },
  {
    id: 10,
    names: ['Ex', 'Gb', 'F#'],
    enharmonic: true,
  },
  {
    id: 11,
    names: ['Fx', 'G', 'Abb'],
    enharmonic: false,
  },
];

const DEFAULT_NOTE = NOTES[4];

export {
  BASE_NOTES,
  KEY_NAMES,
  SCALE_NAMES,
  SCALE_INTERVALS,
  MODE_NAMES,
  NOTES,
  DEFAULT_NOTE,
};
