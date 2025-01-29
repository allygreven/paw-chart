export function AddImmunizations() {
  return (
    <form className="flex flex-col space-y-4 p-6 max-w-lg mx-auto ">
      <label className="mb-2">Immunization</label>
      <select
        id="dropdown"
        // value={selectedOption}
        // onChange={handleChange}
        required
        className="mt-1 mb-1 block w-85 px-3 py-2 border border-gray-300 rounded-xl shadow-sm bg-white focus:outline-none ">
        <option value="Immunizations" disabled>
          -- Select an option --
        </option>
        <option value="Option 1">Bordetella bronchiseptica</option>
        <option value="Option 2">Calicivirus (part of FVRCP)</option>
        <option value="Option 3">Canine Adenovirus (CAV-2)</option>
        <option value="Option 4">Canine Distemper Virus (CDV)</option>
        <option value="Option 5">Canine Parainfluenza Virus (CPiV)</option>
        <option value="Option 6">Canine Parvovirus (CPV-2)</option>
        <option value="Option 7">Chlamydia felis</option>
        <option value="Option 8">DA2PP</option>
        <option value="Option 9">Feline Immunodeficiency Virus (FIV)</option>
        <option value="Option 10">Feline Infectious Peritonitis (FIP)</option>
        <option value="Option 11">Feline Leukemia Virus (FeLV)</option>
        <option value="Option 12">Feline Panleukopenia Virus (FPV)</option>
        <option value="Option 13">Feline Rhinotracheitis Virus (FHV-1)</option>
        <option value="Option 14">Leptospirosis</option>
        <option value="Option 15">Lyme Disease (Borrelia burgdorferi)</option>
        <option value="Option 16">Rabies</option>
        <option value="Option 17">Ringworm</option>
        <option value="Option 18">Other</option>
      </select>

      <span className="text-[7px] mb-0 mt-0">
        *DA2PP: (Distemper, Adenovirus I & II, Parvovirus, Parainfluenza) Also
        referred to as the 5-way vaccine
      </span>
      <span className="text-[7px] mt-0 mb-6">
        **FVRCP: (Feline Viral Rhinotracheitis, Calicivirus, Panleukopenia, and
        Rabies)
      </span>

      <label className="mb-2">Date</label>
      <input
        type="text"
        name="date"
        placeholder="mm/dd/yyyy"
        className="mt-1 block w-85 px-3 py-2 border border-gray-300 rounded-xl shadow-sm bg-white focus:outline-none focus:border-blue-500"></input>
      <div className="flex justify-center">
        <button
          type="submit"
          className="w-25 mt-4 mb-6 bg-[#6A7A62] text-white py-2 px-4 shadow-lg rounded-2xl hover:bg-[#8D9F84] focus:outline-none cursor-pointer">
          Submit
        </button>
      </div>
    </form>
  );
}
