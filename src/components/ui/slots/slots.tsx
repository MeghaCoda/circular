import React from 'react';
import {
  NameValuePair,
  Note,
  ModeName,
  ModeNameList,
  ScaleNameList,
} from '../../../data/types';
import { SCALE_INTERVALS } from '../../../data/constants';
import {
  orderNotes,
  selectNotesByScale,
  getRotation,
  getSlotName,
  getScaleInterval,
} from '../../../helpers/utils';

interface SlotsProps {
  intervals: number;
  notes: Note[];
  keyName: KeyName;
  baseNotes: string[];
  scaleInterval: number[];
}

const Slots = (props: SlotsProps): JSX.Element => {
  const { intervals, notes, keyName, baseNotes } = props;
  const selectedScaleInterval: ScaleInterval = getScaleInterval(
    keyName,
    SCALE_INTERVALS
  );
  const slots: JSX.Element[] = [];
  const orderedNotes: Note[] = orderNotes(notes, keyName);
  const selectedNotes = selectNotesByScale(orderedNotes, scaleInterval);
  for (var i = 0; i < intervals; i++) {
    slots.push(
      <div
        className="slot"
        id={`slot-${i}`}
        key={`slot-${i}`}
        style={
          {
            '--data-rotate': `${getRotation(intervals, i)}deg`,
            '--data-text-rotate': `-${getRotation(intervals, i)}deg`,
          } as React.CSSProperties
        }
      >
        <p className="text">{getSlotName(notes, keyName)}</p>
      </div>
    );
  }
  return <>{slots}</>;
};

export { Slots };
