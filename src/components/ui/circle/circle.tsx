import React from 'react';
import { BASE_NOTES, NOTES } from '../../../data/constants';
import { Note, KeyName } from '../../../data/types';
import './circle-styles.scss';
import { Slots } from '../slots/slots';

const selectNotesByScale = () => {};

/*
What is the logic around finding a note?
BASE_NOTES = [A,B,C,D,E,F,G]
first, order the notes
*/

interface CircleProps {
  intervals?: number;
  keyName: KeyName;
  note: Note;
  scaleInterval: number[];
}

const Circle = (props: CircleProps): JSX.Element => {
  const intervals = props.intervals || 12;
  const keyName = props.keyName || NOTES.find((i) => i.id === 4) || NOTES[0];

  return (
    <div className="circle-container" data-slices={intervals}>
      <div className="circle display-circle"></div>
      <Slots
        intervals={intervals}
        notes={NOTES}
        keyName={keyName}
        baseNotes={BASE_NOTES}
      />
    </div>
  );
};

export default Circle;
