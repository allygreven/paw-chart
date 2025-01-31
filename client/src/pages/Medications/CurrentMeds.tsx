import { Medication } from '../../data';

type Props = {
  med: Medication;
  isOpen: boolean;
  onClick: () => void;
};

export function CurrentMeds({ med, isOpen, onClick }: Props) {
  return (
    <div className="med">
      <div onClick={onClick} className="name">
        <span>{med.name}</span>
        <span>{med.dose}</span>
      </div>
      {isOpen && <div className="directions">{med.directions}</div>}
    </div>
  );
}
