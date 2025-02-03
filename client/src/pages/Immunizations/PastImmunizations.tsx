import { useEffect, useState } from 'react';
import {
  Immunization,
  readImmunizations,
  removeImmunization,
} from '../../data';
import { FaRegTrashCan } from 'react-icons/fa6';
import { EditModal } from './EditModal';
import { useNavigate } from 'react-router-dom';

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
        throw new Error('Should never happen');
      await removeImmunization(deletingImmunization.immunizationId);

      alert('Immunization deleted!');
      setIsOpen(false);
      setDeletingImmunization(undefined);
      navigate('/');
    } catch (error) {
      alert('there was an error deleting immunization' + error);
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
        {error instanceof Error ? error.message : 'Unknown Error'}
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center">
      <h2 className="mt-1 mr-60">Past Immunizations</h2>
      <table className="w-full border-collapse bg-white mt-4 m-20 rounded-xl shadow-lg">
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
                {new Date(row.date).toLocaleDateString('en-us', {
                  month: 'numeric',
                  day: 'numeric',
                  year: 'numeric',
                })}
              </td>
              <td>
                <FaRegTrashCan
                  style={{
                    color: 'grey',
                    cursor: 'pointer',
                    fontSize: '18px',
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
        className="m-auto bg-background font-regular rounded-2xl backdrop:bg-black/50 shadow-lg top-2 mx-auto"
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}>
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
                setIsOpen(false);
                setDeletingImmunization(undefined);
              }}
              className="w-25 mb-12 m-3 bg-[#6A7A62] text-white font-regular py-2 px-4 rounded-2xl hover:bg-[#8D9F84] focus:outline-none cursor-pointer">
              Cancel
            </button>
            <button
              onClick={async () => {
                await handleDelete();
              }}
              className="w-25 mb-12 m-3 bg-[#6A7A62] text-white font-regular py-2 px-4 rounded-2xl hover:bg-[#8D9F84] focus:outline-none cursor-pointer">
              Delete
            </button>
          </div>
        </div>
      </EditModal>
    </div>
  );
}
