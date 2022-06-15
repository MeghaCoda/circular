import React from 'react';
import { InputNumber } from 'primereact/inputnumber';
import { Dropdown } from 'primereact/dropdown';
import {
  KEY_NAMES,
  SCALE_NAMES,
  SCALE_INTERVALS,
  MODE_NAMES,
  NOTES,
  DEFAULT_NOTE,
} from '../../data/constants';
import { Note, KeyName, ScaleInterval } from '../../data/types';
import Circle from '../ui/circle/circle';
import 'primereact/resources/primereact.css';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import './circles-styles.scss';

const Circles = (): JSX.Element => {
  const [numberOfIntervals, setNumberOfIntervals] = React.useState<number>(12);
  const [keyName, setKeyName] = React.useState<KeyName>(KEY_NAMES[7]);
  const [note, setNote] = React.useState<Note>(NOTES[5]);
  const [scale, setScale] = React.useState<string>(SCALE_NAMES[0].name);
  const [scaleInterval, setScaleInterval] = React.useState<ScaleInterval>(
    SCALE_INTERVALS.major.ionian
  );

  const updateIntervals = (newNumber: number): void => {
    setNumberOfIntervals(newNumber);
  };

  React.useEffect(() => {
    getNoteByKeyName(keyName);
  }, [keyName]);

  React.useEffect(() => {
    setScaleInterval(SCALE_INTERVALS[scale]));
  }, [scale]);

  const getNoteByKeyName = (keyName: KeyName): void => {
    const note =
      NOTES.find((i) => i.names.indexOf(keyName.value) !== 0) || DEFAULT_NOTE;
    setNote(note);
  };

  const updateKey = (key: KeyName): void => {
    setKeyName(key);
  };

  const updateScale = (scaleName: string): void => {
    setScale(scaleName);
  };
  return (
    <div id="circles-container">
      <div id="controls" className="display-flex">
        <div className="column">
          <h3>How many intervals would you like to analyze?</h3>
          <InputNumber
            id="interval"
            inputId="minmax"
            value={numberOfIntervals}
            onValueChange={(e) => updateIntervals(e.value || 0)}
            mode="decimal"
            min={5}
            max={72}
          />
        </div>
        <div className="column">
          <h3>In what key?</h3>
          <Dropdown
            value={keyName}
            options={KEY_NAMES}
            onChange={(e) => updateKey(e.value)}
            optionLabel="name"
            placeholder="Select a Key"
          />
        </div>
        <div className="column">
          <h3>What scale?</h3>
          <Dropdown
            value={scale}
            options={SCALE_NAMES}
            onChange={(e) => updateScale(e.value)}
            optionLabel="name"
            placeholder="Select a Scale"
          />
        </div>
      </div>
      <div id="circle-wrapper">
        <Circle
          intervals={numberOfIntervals}
          keyName={keyName}
          note={note}
          scaleInterval={scaleInterval}
        />
      </div>
    </div>
  );
};

export default Circles;
