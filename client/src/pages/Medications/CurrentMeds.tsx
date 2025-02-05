import { Medication, removeMed, updateMed } from '../../data';
import { IoChevronDownOutline } from 'react-icons/io5';
import { FaRegTrashCan } from 'react-icons/fa6';
import { FiEdit } from 'react-icons/fi';
import { DeleteModal } from './DeleteModal';
import { FormEvent, useState } from 'react';
import { EditMedsModal } from './EditMedsModal';
// import { IoChevronUpOutline } from 'react-icons/io5';

type Props = {
  med: Medication;
  isOpen: boolean;
  onOpen: () => void;
  onUpdate: (med: Medication) => void;
  onDelete: (med: Medication) => void;
};

export function CurrentMeds({
  med,
  isOpen,
  onOpen,
  onUpdate,
  onDelete,
}: Props) {
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const [deleteMed, setDeleteMed] = useState<Medication>();
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [editMed, setEditMed] = useState<Medication>();
  const [editMedName, setEditMedName] = useState('');
  const [editDose, setEditDose] = useState('');
  const [editDir, setEditDir] = useState('');

  async function handleEditMed(event: FormEvent) {
    event.preventDefault();
    try {
      if (!editMed) throw new Error('Should never happen');

      const updatedMed = {
        ...editMed,
        name: editMedName,
        dose: editDose,
        directions: editDir,
      };

      const savedMed = await updateMed(updatedMed);

      alert('Medication updated!');
      setIsEditOpen(false);
      setEditMed(undefined);
      onUpdate(savedMed);
    } catch (error) {
      alert('there was an error updating medication' + error);
    }
  }

  async function handleDeleteMed() {
    // event.preventDefault();
    try {
      if (!deleteMed?.medId) throw new Error('Should never happen');
      await removeMed(deleteMed.medId);

      alert('Medication deleted!');
      setIsDeleteOpen(false);
      setDeleteMed(undefined);
      onDelete(deleteMed);
    } catch (error) {
      alert('there was an error deleting medication' + error);
    }
  }

  return (
    <div className="mb-3 border-b border-gray-300 text-grey-body">
      <div onClick={onOpen} className="cursor-pointer flex items-center w-full">
        <span className="ml-4 mb-4 mt-4">{med.name}</span>
        <span className="ml-6 text-gray-500">{med.dose}</span>
        <IoChevronDownOutline className="ml-auto mr-3 text-gray-500" />
      </div>
      {isOpen && (
        <div className="flex ml-6 mr-5 text-gray-500 border border-gray-300 border-dashed p-1 ">
          {med.directions}
          {/* <IoChevronUpOutline /> */}
          <FiEdit
            className="cursor-pointer ml-auto text-md"
            onClick={() => {
              setIsEditOpen(true);
              setEditMed(med);
              setEditMedName(med.name);
              setEditDose(med.dose);
              setEditDir(med.directions);
            }}
          />
          <FaRegTrashCan
            className="cursor-pointer ml-2 text-md"
            onClick={() => {
              setIsDeleteOpen(true);
              setDeleteMed(med);
            }}
          />
        </div>
      )}

      {/* EDIT MEDICATION MODAL */}

      <EditMedsModal
        className="bg-background rounded-2xl backdrop:bg-black/50 shadow-lg top-2 mx-auto"
        isOpen={isEditOpen}
        onClose={() => setIsEditOpen(false)}>
        <form onSubmit={handleEditMed} className="m-20 font-regular">
          <h1 className="font-heading text-2xl ml-2 mb-8">Edit Medication</h1>
          <label>Medication Name</label>
          <input
            value={editMedName}
            onChange={(e) => setEditMedName(e.target.value)}
            required
            type="text"
            placeholder="Search"
            className="mt-2 block w-85 mb-6 px-3 py-2 border border-gray-300 rounded-xl shadow-sm bg-white focus:outline-none "></input>
          <label>Dosage</label>
          <input
            value={editDose}
            onChange={(e) => setEditDose(e.target.value)}
            required
            type="text"
            placeholder="Type here"
            className="mt-2 block w-85 mb-6 px-3 py-2 border border-gray-300 rounded-xl shadow-sm bg-white focus:outline-none "></input>
          <label>Directions</label>
          <input
            type="text"
            value={editDir}
            onChange={(e) => setEditDir(e.target.value)}
            placeholder="Not required"
            className="mt-2 block w-85 mb-12 px-3 py-2 border border-gray-300 rounded-xl shadow-sm bg-white focus:outline-none "></input>
          <div className="flex justify-center space-x-4">
            <button
              type="button"
              onClick={() => {
                setIsEditOpen(false);
              }}
              className="w-25 bg-[#6A7A62] text-white font-regular py-2 px-4 rounded-2xl hover:bg-[#8D9F84] focus:outline-none cursor-pointer">
              Cancel
            </button>

            <button
              type="submit"
              className="flex justify-center w-25  bg-[#6A7A62] text-white font-regular py-2 px-4 rounded-2xl hover:bg-[#8D9F84] focus:outline-none cursor-pointer">
              Submit
            </button>
          </div>
        </form>
      </EditMedsModal>

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
