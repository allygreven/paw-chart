import { Medication } from '../../data';
import { IoChevronDownOutline } from 'react-icons/io5';
import { FaRegTrashCan } from 'react-icons/fa6';
import { FiEdit } from 'react-icons/fi';
// import { IoChevronUpOutline } from 'react-icons/io5';

type Props = {
  med: Medication;
  isOpen: boolean;
  onClick: () => void;
};

export function CurrentMeds({ med, isOpen, onClick }: Props) {
  return (
    <div className="mb-3 border-b border-gray-300">
      <div
        onClick={onClick}
        className="cursor-pointer inline-flex  items-center max-w-lg">
        <span className="ml-4 mb-4 mt-4">{med.name}</span>
        <span className="ml-6 text-gray-500">{med.dose}</span>
        <div className="ml-auto text-gray-500">
          <IoChevronDownOutline />
        </div>
      </div>
      {isOpen && (
        <div className="ml-6 mr-5 text-gray-500 border border-gray-300 border-dashed p-1 flex">
          {med.directions}
          {/* <IoChevronUpOutline /> */}
          <FiEdit style={{ cursor: 'pointer' }} />
          <FaRegTrashCan style={{ cursor: 'pointer' }} />
        </div>
      )}
    </div>
  );
}
