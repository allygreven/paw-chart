import { useEffect, useState } from "react";
import {
  Immunization,
  readImmunizations,
  removeImmunization,
} from "../../data";
import { FaRegTrashCan } from "react-icons/fa6";
import { EditModal } from "./EditModal";
import { useNavigate } from "react-router-dom";

export function PastImmunizations() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<unknown>();
  const [immunizations, setImmunizations] = useState<Immunization[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [deletingImmunization, setDeletingImmunization] =
    useState<Immunization>();

  const navigate = useNavigate();

  async function handleDelete() {
    try {
      if (!deletingImmunization?.immunizationId)
        throw new Error("Should never happen");
      await removeImmunization(deletingImmunization.immunizationId);

      alert("Immunization deleted!");
      setIsOpen(false);
      setDeletingImmunization(undefined);
      navigate("/");
    } catch (error) {
      alert("there was an error deleting immunization" + error);
    }
  }

  useEffect(() => {
    async function load() {
      try {
        const immunizations = await readImmunizations();
        setImmunizations(immunizations);
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    }
    load();
  }, []);

  if (isLoading) return <div>Loading...</div>;
  if (error) {
    return (
      <div>
        Error Loading Entries:
        {error instanceof Error ? error.message : "Unknown Error"}
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center">
      <h2 className="mr-60 mt-1">Past Immunizations</h2>
      <table className="m-20 mt-4 w-full border-collapse rounded-xl bg-white shadow-lg">
        <thead>
          <tr className="border-b border-gray-300">
            <th className="px-6 py-2 text-left">NAME</th>
            <th className="px-6 py-2 text-right">DATE</th>
          </tr>
        </thead>
        <tbody>
          {immunizations.map((row) => (
            <tr key={row.immunizationId} className="border-b border-gray-200">
              <td className="px-4 py-2">{row.name}</td>
              <td className="px-4 py-2 text-right">
                {new Date(row.date).toLocaleDateString("en-us", {
                  month: "numeric",
                  day: "numeric",
                  year: "numeric",
                })}
              </td>
              <td>
                <FaRegTrashCan
                  style={{
                    color: "grey",
                    cursor: "pointer",
                    fontSize: "18px",
                  }}
                  onClick={() => {
                    setIsOpen(true);
                    setDeletingImmunization(row);
                  }}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* MODAL TO DELETE IMMUNIZATION */}

      <EditModal
        className="bg-background font-regular top-2 m-auto mx-auto rounded-2xl shadow-lg backdrop:bg-black/50"
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
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
                setIsOpen(false);
                setDeletingImmunization(undefined);
              }}
              className="w-25 font-regular m-3 mb-12 cursor-pointer rounded-2xl bg-[#6A7A62] px-4 py-2 text-white hover:bg-[#8D9F84] focus:outline-none"
            >
              Cancel
            </button>
            <button
              onClick={async () => {
                await handleDelete();
              }}
              className="w-25 font-regular m-3 mb-12 cursor-pointer rounded-2xl bg-[#6A7A62] px-4 py-2 text-white hover:bg-[#8D9F84] focus:outline-none"
            >
              Delete
            </button>
          </div>
        </div>
      </EditModal>
    </div>
  );
}
