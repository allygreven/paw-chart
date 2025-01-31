import { useState } from 'react';
import { CurrentMeds } from './CurrentMeds';
import { Medication } from '../../data';

type Props = {
  meds: Medication[];
};

export function Accordion({ meds }: Props) {
  const [medId, setMedId] = useState<number>();

  return (
    <div className="bg-white shadow-lg font-regular">
      {meds.map((med) => (
        <CurrentMeds
          key={med.medId}
          med={med}
          isOpen={medId === med.medId}
          onClick={() =>
            medId === med.medId ? setMedId(undefined) : setMedId(med.medId)
          }
        />
      ))}
    </div>
  );
}
