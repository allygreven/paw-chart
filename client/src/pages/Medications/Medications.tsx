import { Accordion } from './Accordion';
import { FormEvent, useEffect, useState } from 'react';
import { MedsModal } from './MedsModal';
import { addMed, Medication, readMeds } from '../../data';
import { Interactions } from './Interactions';
import { useUser } from '../../components/useUser';

export function Medications() {
  const [isOpen, setIsOpen] = useState(false);
  const [medications, setMedications] = useState<Medication[]>([]);
  const [medication, setMedication] = useState('');
  const [dose, setDose] = useState('');
  const [directions, setDirections] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<unknown>();
  const { user } = useUser();

  async function handleAdd(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!user) {
      throw new Error('not signed in');
    }
    try {
      const newMedication = {
        name: medication,
        dose: dose,
        directions: directions,
        petId: user.pets[0].petId,
      };
      const newMed = await addMed(newMedication);

      setMedications((prevMedications) => [...prevMedications, newMed]);
      setMedication('');
      setDose('');
      setDirections('');
      setIsOpen(false);
    } catch (err) {
      alert(`Error adding medication: ${err}`);
    }
  }

  useEffect(() => {
    async function load() {
      try {
        if (!user) {
          throw new Error('not signed in');
        }
        const medications = await readMeds(user.pets[0].petId);
        setMedications(medications);
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    }
    load();
  }, [user]);

  if (isLoading) return <div>Loading...</div>;
  if (error) {
    return (
      <div>
        Error Loading Entries:
        {error instanceof Error ? error.message : 'Unknown Error'}
      </div>
    );
  }

  async function handleUpdate(med: Medication) {
    setMedications((prevMeds) =>
      prevMeds.map((m) => (m.medId === med.medId ? med : m)),
    );
  }

  async function handleDelete(med: Medication) {
    setMedications((prevMeds) => prevMeds.filter((m) => m.medId !== med.medId));
  }

  return (
    <div>
      <div className="text-grey-body bg-background flex flex-col items-center">
        <h1 className="font-heading mt-22 mb-7 text-2xl">Medications</h1>
        <button
          onClick={() => setIsOpen(true)}
          type="button"
          className="w-70 font-regular mb-6 cursor-pointer rounded-2xl bg-[#6A7A62] px-4 py-2 text-white shadow-lg hover:bg-[#8D9F84] focus:outline-none"
        >
          Add a Medication
        </button>

        {/* ADD MEDICATION MODAL */}

        <MedsModal
          className="bg-background top-2 mx-auto rounded-2xl shadow-lg backdrop:bg-black/50"
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
        >
          <form onSubmit={handleAdd} className="font-regular m-20">
            <h1 className="font-heading mb-8 ml-2 text-2xl">Add Medication</h1>
            <label>Medication Name</label>
            <input
              value={medication}
              onChange={(e) => setMedication(e.target.value)}
              required
              type="text"
              placeholder="Medication"
              className="mb-6 mt-2 block rounded-xl border border-gray-300 bg-white px-3 py-2 shadow-sm focus:outline-none sm:w-[350px] md:w-[350px] lg:w-[350px] xl:w-[340px]"
            ></input>
            <label>Dosage</label>
            <input
              value={dose}
              onChange={(e) => setDose(e.target.value)}
              required
              type="text"
              placeholder="Type here"
              className="mb-6 mt-2 block rounded-xl border border-gray-300 bg-white px-3 py-2 shadow-sm focus:outline-none sm:w-[350px] md:w-[350px] lg:w-[350px] xl:w-[340px]"
            ></input>
            <label>Directions</label>
            <input
              type="text"
              value={directions}
              onChange={(e) => setDirections(e.target.value)}
              placeholder="Not required"
              className="mb-12 mt-2 block rounded-xl border border-gray-300 bg-white px-3 py-2 shadow-sm focus:outline-none sm:w-[350px] md:w-[350px] lg:w-[350px] xl:w-[340px]"
            ></input>

            <div className="mt-4 flex justify-center space-x-4">
              <button
                onClick={() => {
                  setIsOpen(false);
                }}
                className="w-25 font-regular mb-1 cursor-pointer rounded-2xl bg-[#6A7A62] px-4 py-2 text-white hover:bg-[#8D9F84] focus:outline-none"
              >
                Cancel
              </button>

              <button
                type="submit"
                className="w-25 font-regular mb-1 ml-2 cursor-pointer rounded-2xl bg-[#6A7A62] px-4 py-2 text-white hover:bg-[#8D9F84] focus:outline-none"
              >
                Submit
              </button>
            </div>
          </form>
        </MedsModal>

        {/* CURRENT MEDICATIONS */}

        <div>
          <h2 className="font-heading mb-3 mt-5 text-xl">
            Current Medications
          </h2>
          <Accordion
            meds={medications}
            onUpdate={handleUpdate}
            onDelete={handleDelete}
          />
        </div>

        {/* INTERACTIONS */}
        <div>
          <Interactions />
        </div>
      </div>
    </div>
  );
}
