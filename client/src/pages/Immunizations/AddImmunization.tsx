import { FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../../components/useUser';

export function AddImmunizations() {
  const [immunization, setImmunization] = useState('');
  const [date, setDate] = useState('');
  const { user } = useUser();

  const navigate = useNavigate();

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    try {
      const req = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: immunization,
          date: date,
          petId: user?.pets[0].petId,
        }),
      };
      const res = await fetch('/api/immunizations', req);
      if (!res.ok) {
        throw new Error(`fetch Error ${res.status}`);
      }
      navigate('/');
    } catch (err) {
      alert(`Error adding immunization: ${err}`);
    }
  }

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="mx-auto flex max-w-lg flex-col space-y-4 p-6"
      >
        <label className="mb-2">Immunization</label>
        <select
          id="dropdown"
          value={immunization}
          onChange={(e) => setImmunization(e.target.value)}
          required
          className="mb-1 mt-1 block w-full rounded-xl border border-gray-300 bg-white px-3 py-2 shadow-sm focus:outline-none"
        >
          <option>-- Select an option --</option>
          <option>Bordetella bronchiseptica</option>
          <option>Calicivirus (part of FVRCP)</option>
          <option>Canine Adenovirus (CAV-2)</option>
          <option>Canine Distemper Virus (CDV)</option>
          <option>Canine Parainfluenza Virus (CPiV)</option>
          <option>Canine Parvovirus (CPV-2)</option>
          <option>Chlamydia felis</option>
          <option>DA2PP</option>
          <option>Feline Immunodeficiency Virus (FIV)</option>
          <option>Feline Infectious Peritonitis (FIP)</option>
          <option>Feline Leukemia Virus (FeLV)</option>
          <option>Feline Panleukopenia Virus (FPV)</option>
          <option>Feline Rhinotracheitis Virus (FHV-1)</option>
          <option>Leptospirosis</option>
          <option>Lyme Disease (Borrelia burgdorferi)</option>
          <option>Rabies</option>
          <option>Ringworm</option>
          <option>Other</option>
        </select>

        <label className="mb-2 mt-4">Date</label>
        <input
          type="text"
          name="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          placeholder="mm/dd/yyyy"
          className="mt-1 block w-full rounded-xl border border-gray-300 bg-white px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none"
        ></input>
        <div className="flex justify-center">
          <button
            type="submit"
            className="w-25 mb-6 mt-4 cursor-pointer rounded-2xl bg-[#6A7A62] px-4 py-2 text-white shadow-lg hover:bg-[#8D9F84] focus:outline-none"
          >
            Submit
          </button>
        </div>
      </form>
    </>
  );
}
