import { Medication, removeMed } from '../../data';
import { IoChevronDownOutline } from 'react-icons/io5';
import { FaRegTrashCan } from 'react-icons/fa6';
import { FiEdit } from 'react-icons/fi';
import { DeleteModal } from './DeleteModal';
import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { IoChevronUpOutline } from 'react-icons/io5';

type Props = {
  med: Medication;
  isOpen: boolean;
  onClick: () => void;
};

export function CurrentMeds({ med, isOpen, onClick }: Props) {
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const [deleteMed, setDeleteMed] = useState<Medication>();
  // const navigate = useNavigate();

  async function handleDeleteMed() {
    try {
      if (!deleteMed?.medId) throw new Error('Should never happen');
      await removeMed(deleteMed.medId);

      alert('Medication deleted!');
      setIsDeleteOpen(false);
      setDeleteMed(undefined);
      // navigate('/medications');
    } catch (error) {
      alert('there was an error deleting medication' + error);
    }
  }

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
          <FiEdit className="cursor-pointer" />
          <FaRegTrashCan
            className="cursor-pointer"
            onClick={() => {
              console.log('clicked!');
              setIsDeleteOpen(true);
              setDeleteMed(med);
            }}
          />
        </div>
      )}

      {/* DELETE MEDICATION MODAL */}

      <DeleteModal
        className="m-auto bg-background font-regular rounded-2xl backdrop:bg-black/50 shadow-lg top-2 mx-auto"
        isOpen={isDeleteOpen}
        onClose={() => setIsDeleteOpen(false)}>
        <div className="flex flex-col items-center">
          <span className="mt-12 font-heading text-xl">
            Are you sure you want to delete?
          </span>
          <span className="mt-3 ml-3 mr-3  text-left">
            This item will be deleted immediately.
          </span>
          <span className="mt-.5 mb-6 ">You can’t undo this action.</span>
          <div className="modal-actions">
            <button
              onClick={() => {
                setIsDeleteOpen(false);
                setDeleteMed(undefined);
              }}
              className="w-25 mb-12 m-3 bg-[#6A7A62] text-white font-regular py-2 px-4 rounded-2xl hover:bg-[#8D9F84] focus:outline-none cursor-pointer">
              Cancel
            </button>
            <button
              onClick={async () => {
                await handleDeleteMed();
              }}
              className="w-25 mb-12 m-3 bg-[#6A7A62] text-white font-regular py-2 px-4 rounded-2xl hover:bg-[#8D9F84] focus:outline-none cursor-pointer">
              Delete
            </button>
          </div>
        </div>
      </DeleteModal>
    </div>
  );
}
