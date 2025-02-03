import { useState } from 'react';
import { CurrentMeds } from './CurrentMeds';
import { Medication } from '../../data';

type Props = {
  meds: Medication[];
  onUpdate: (med: Medication) => void;
  onDelete: (med: Medication) => void;
};

export function Accordion({ meds, onUpdate, onDelete }: Props) {
  const [medId, setMedId] = useState<number>();

  return (
    <div className=" bg-white w-full mt-5 mb-10 drop-shadow-md shadow-[0px_10px_10px_rgba(0,0,0,0.3)] font-regular border-collapse bg-white  ">
      {meds.map((med) => (
        <CurrentMeds
          key={med.medId}
          med={med}
          isOpen={medId === med.medId}
          onOpen={() =>
            medId === med.medId ? setMedId(undefined) : setMedId(med.medId)
          }
          onUpdate={onUpdate}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}
