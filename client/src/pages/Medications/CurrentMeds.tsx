import { Medication, removeMed, updateMed } from "../../data";
import { IoChevronDownOutline } from "react-icons/io5";
import { FaRegTrashCan } from "react-icons/fa6";
import { FiEdit } from "react-icons/fi";
import { DeleteModal } from "./DeleteModal";
import { FormEvent, useState } from "react";
import { EditMedsModal } from "./EditMedsModal";
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
  const [editMedName, setEditMedName] = useState("");
  const [editDose, setEditDose] = useState("");
  const [editDir, setEditDir] = useState("");

  async function handleEditMed(event: FormEvent) {
    event.preventDefault();
    try {
      if (!editMed) throw new Error("Should never happen");

      const updatedMed = {
        ...editMed,
        name: editMedName,
        dose: editDose,
        directions: editDir,
      };

      const savedMed = await updateMed(updatedMed);

      alert("Medication updated!");
      setIsEditOpen(false);
      setEditMed(undefined);
      onUpdate(savedMed);
    } catch (error) {
      alert("there was an error updating medication" + error);
    }
  }

  async function handleDeleteMed() {
    // event.preventDefault();
    try {
      if (!deleteMed?.medId) throw new Error("Should never happen");
      await removeMed(deleteMed.medId);

      alert("Medication deleted!");
      setIsDeleteOpen(false);
      setDeleteMed(undefined);
      onDelete(deleteMed);
    } catch (error) {
      alert("there was an error deleting medication" + error);
    }
  }

  return (
    <div className="text-grey-body mb-3 border-b border-gray-300">
      <div onClick={onOpen} className="flex w-full cursor-pointer items-center">
        <span className="mb-4 ml-4 mt-4">{med.name}</span>
        <span className="ml-6 text-gray-500">{med.dose}</span>
        <IoChevronDownOutline className="ml-auto mr-3 text-gray-500" />
      </div>
      {isOpen && (
        <div className="ml-6 mr-5 flex border border-dashed border-gray-300 p-1 text-gray-500">
          {med.directions}
          {/* <IoChevronUpOutline /> */}
          <FiEdit
            className="text-md ml-auto cursor-pointer"
            onClick={() => {
              setIsEditOpen(true);
              setEditMed(med);
              setEditMedName(med.name);
              setEditDose(med.dose);
              setEditDir(med.directions);
            }}
          />
          <FaRegTrashCan
            className="text-md ml-2 cursor-pointer"
            onClick={() => {
              setIsDeleteOpen(true);
              setDeleteMed(med);
            }}
          />
        </div>
      )}

      {/* EDIT MEDICATION MODAL */}

      <EditMedsModal
        className="bg-background top-2 mx-auto rounded-2xl shadow-lg backdrop:bg-black/50"
        isOpen={isEditOpen}
        onClose={() => setIsEditOpen(false)}
      >
        <form onSubmit={handleEditMed} className="font-regular m-20">
          <h1 className="font-heading mb-8 ml-2 text-2xl">Edit Medication</h1>
          <label>Medication Name</label>
          <input
            value={editMedName}
            onChange={(e) => setEditMedName(e.target.value)}
            required
            type="text"
            placeholder="Search"
            className="w-85 mb-6 mt-2 block rounded-xl border border-gray-300 bg-white px-3 py-2 shadow-sm focus:outline-none"
          ></input>
          <label>Dosage</label>
          <input
            value={editDose}
            onChange={(e) => setEditDose(e.target.value)}
            required
            type="text"
            placeholder="Type here"
            className="w-85 mb-6 mt-2 block rounded-xl border border-gray-300 bg-white px-3 py-2 shadow-sm focus:outline-none"
          ></input>
          <label>Directions</label>
          <input
            type="text"
            value={editDir}
            onChange={(e) => setEditDir(e.target.value)}
            placeholder="Not required"
            className="w-85 mb-12 mt-2 block rounded-xl border border-gray-300 bg-white px-3 py-2 shadow-sm focus:outline-none"
          ></input>
          <div className="flex justify-center space-x-4">
            <button
              type="button"
              onClick={() => {
                setIsEditOpen(false);
              }}
              className="w-25 font-regular cursor-pointer rounded-2xl bg-[#6A7A62] px-4 py-2 text-white hover:bg-[#8D9F84] focus:outline-none"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="w-25 font-regular flex cursor-pointer justify-center rounded-2xl bg-[#6A7A62] px-4 py-2 text-white hover:bg-[#8D9F84] focus:outline-none"
            >
              Submit
            </button>
          </div>
        </form>
      </EditMedsModal>

      {/* DELETE MEDICATION MODAL */}

      <DeleteModal
        className="bg-background font-regular top-2 m-auto mx-auto rounded-2xl shadow-lg backdrop:bg-black/50"
        isOpen={isDeleteOpen}
        onClose={() => setIsDeleteOpen(false)}
      >
        <div className="flex flex-col items-center">
          <span className="font-heading mt-12 text-xl">
            Are you sure you want to delete?
          </span>
          <span className="ml-3 mr-3 mt-3 text-left">
            This item will be deleted immediately.
          </span>
          <span className="mt-.5 mb-6">You can’t undo this action.</span>
          <div className="modal-actions">
            <button
              onClick={() => {
                setIsDeleteOpen(false);
                setDeleteMed(undefined);
              }}
              className="w-25 font-regular m-3 mb-12 cursor-pointer rounded-2xl bg-[#6A7A62] px-4 py-2 text-white hover:bg-[#8D9F84] focus:outline-none"
            >
              Cancel
            </button>
            <button
              onClick={async () => {
                await handleDeleteMed();
              }}
              className="w-25 font-regular m-3 mb-12 cursor-pointer rounded-2xl bg-[#6A7A62] px-4 py-2 text-white hover:bg-[#8D9F84] focus:outline-none"
            >
              Delete
            </button>
          </div>
        </div>
      </DeleteModal>
    </div>
  );
}
