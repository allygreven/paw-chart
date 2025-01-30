import { FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export function AddImmunizations() {
  const [immunization, setImmunization] = useState('');
  const [date, setDate] = useState('');
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
        }),
      };
      const res = await fetch('/api/immunizations', req);
      if (!res.ok) {
        throw new Error(`fetch Error ${res.status}`);
      }
      // const addedImmunizations = await res.json();
      // setImmunization(immunization.concat(addedImmunizations))
      // setImmunization([...immunization, addedImmunizations])
      navigate('/');
    } catch (err) {
      alert(`Error adding immunization: ${err}`);
    }
  }

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col space-y-4 p-6 max-w-lg mx-auto ">
        <label className="mb-2">Immunization</label>
        <select
          id="dropdown"
          value={immunization}
          onChange={(e) => setImmunization(e.target.value)}
          required
          className="mt-1 mb-1 block w-full px-3 py-2 border border-gray-300 rounded-xl shadow-sm bg-white focus:outline-none ">
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

        {/* <span className="text-[7px] mb-0 mt-0">
          *DA2PP: (Distemper, Adenovirus I & II, Parvovirus, Parainfluenza) Also
          referred to as the 5-way vaccine
        </span>
        <span className="text-[7px] mt-0 mb-6">
          **FVRCP: (Feline Viral Rhinotracheitis, Calicivirus, Panleukopenia,
          and Rabies)
        </span> */}

        <label className="mb-2 mt-4">Date</label>
        <input
          type="text"
          name="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          placeholder="mm/dd/yyyy"
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-xl shadow-sm bg-white focus:outline-none focus:border-blue-500"></input>
        <div className="flex justify-center">
          <button
            type="submit"
            className="w-25 mt-4 mb-6 bg-[#6A7A62] text-white py-2 px-4 shadow-lg rounded-2xl hover:bg-[#8D9F84] focus:outline-none cursor-pointer">
            Submit
          </button>
        </div>
      </form>
    </>
  );
}
