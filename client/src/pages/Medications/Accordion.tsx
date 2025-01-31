import { useState } from 'react';
import { CurrentMeds } from './CurrentMeds';
import { Medication } from '../../data';

type Props = {
  meds: Medication[];
};

export function Accordion({ meds }: Props) {
  const [medId, setMedId] = useState<number>();

  return (
    <div className="bg-white w-full max-w-xl drop-shadow-md shadow-[0px_10px_10px_rgba(0,0,0,0.3)] font-regular w-full border-collapse bg-white mt-4 m-20 ">
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
