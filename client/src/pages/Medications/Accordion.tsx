import { useState } from "react";
import { CurrentMeds } from "./CurrentMeds";
import { Medication } from "../../data";

type Props = {
  meds: Medication[];
  onUpdate: (med: Medication) => void;
  onDelete: (med: Medication) => void;
};

export function Accordion({ meds, onUpdate, onDelete }: Props) {
  const [medId, setMedId] = useState<number>();

  return (
    <div className="w-125 text-grey-body font-regular mb-10 mt-5 border-collapse bg-white shadow-[0px_10px_10px_rgba(0,0,0,0.3)] drop-shadow-md">
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
