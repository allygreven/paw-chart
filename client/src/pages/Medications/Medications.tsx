import { Accordion } from './Accordion';
import { FormEvent, useEffect, useState } from 'react';
import { MedsModal } from './MedsModal';
import { addMed, Medication, readMeds } from '../../data';
// import { useNavigate } from 'react-router-dom';

export function Medications() {
  const [isOpen, setIsOpen] = useState(false);
  const [medications, setMedications] = useState<Medication[]>([]);
  const [medication, setMedication] = useState('');
  const [dose, setDose] = useState('');
  const [directions, setDirections] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<unknown>();

  // const navigate = useNavigate();

  async function handleAdd(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    try {
      const newMedication = {
        name: medication,
        dose: dose,
        directions: directions,
      };
      const newMed = await addMed(newMedication);

      setMedications((prevMedications) => [...prevMedications, newMed]);
      setMedication('');
      setDose('');
      setDirections('');
      setIsOpen(false);
      // navigate('/medications');
    } catch (err) {
      alert(`Error adding medication: ${err}`);
    }
  }

  useEffect(() => {
    async function load() {
      try {
        const medications = await readMeds();
        setMedications(medications);
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
    <div className="flex flex-col items-center text-grey-body bg-background h-screen">
      <h1 className="font-heading text-2xl mt-6 mb-7">Medications</h1>
      <button
        onClick={() => setIsOpen(true)}
        type="button"
        className="w-70 mb-6 bg-[#6A7A62] font-regular text-white py-2 px-4 shadow-lg rounded-xl hover:bg-[#8D9F84] focus:outline-none cursor-pointer">
        Add a Medication
      </button>

      {/* ADD MEDICATION MODAL */}

      <MedsModal
        className="bg-background rounded-2xl backdrop:bg-black/50 shadow-lg top-2 mx-auto"
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}>
        <form onSubmit={handleAdd} className="m-20 font-regular">
          <h1 className="font-heading text-2xl ml-2 mb-8">Add Medication</h1>
          <label>Medication Name</label>
          <input
            value={medication}
            onChange={(e) => setMedication(e.target.value)}
            required
            type="text"
            placeholder="Search"
            className="mt-2 block w-85 mb-6 px-3 py-2 border border-gray-300 rounded-xl shadow-sm bg-white focus:outline-none "></input>
          <label>Dosage</label>
          <input
            value={dose}
            onChange={(e) => setDose(e.target.value)}
            required
            type="text"
            placeholder="Type here"
            className="mt-2 block w-85 mb-6 px-3 py-2 border border-gray-300 rounded-xl shadow-sm bg-white focus:outline-none "></input>
          <label>Directions</label>
          <input
            type="text"
            value={directions}
            onChange={(e) => setDirections(e.target.value)}
            placeholder="Not required"
            className="mt-2 block w-85 mb-12 px-3 py-2 border border-gray-300 rounded-xl shadow-sm bg-white focus:outline-none "></input>
          <div className="flex justify-center">
            <button
              type="submit"
              className="flex justify-center w-25 mb-6 bg-[#6A7A62] text-white font-regular py-2 px-4 rounded-2xl hover:bg-[#8D9F84] focus:outline-none cursor-pointer">
              Submit
            </button>
          </div>
        </form>
      </MedsModal>

      {/* CURRENT MEDICATIONS */}

      <div>
        <h2 className="font-heading text-xl mt-5 mb-3">Current Medications</h2>
        <Accordion meds={medications} />
      </div>

      {/* INTERACTIONS */}
      <div>
        <h2 className="font-heading text-xl mr-70">Interactions</h2>
      </div>
    </div>
  );
}
