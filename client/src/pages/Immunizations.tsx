export function Immunizations() {
  return (
    <div className="flex bg-background h-screen font-regular ">
      <h1 className="font-heading text-2xl">Immunizations</h1>
      <form className="flex flex-col space-y-4 p-6 max-w-lg mx-auto items-center">
        <label>Immunization</label>
        <select
          id="dropdown"
          // value={selectedOption}
          // onChange={handleChange}
          required>
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
          <option value="Option 13">
            Feline Rhinotracheitis Virus (FHV-1)
          </option>
          <option value="Option 14">Leptospirosis</option>
          <option value="Option 15">Lyme Disease (Borrelia burgdorferi)</option>
          <option value="Option 16">Rabies</option>
          <option value="Option 17">Ringworm</option>
          <option value="Option 18">Other</option>
        </select>
        <span className="text-xs">
          *DA2PP: (Distemper, Adenovirus I & II, Parvovirus, Parainfluenza) Also
          referred to as the 5-way vaccine
        </span>
        <span className="text-xs">
          **FVRCP: (Feline Viral Rhinotracheitis, Calicivirus, Panleukopenia,
          and Rabies)
        </span>
        <label>Date</label>
        <input
          type="text"
          name="date"
          placeholder="mm/dd/yyyy"
          className="mt-1 block w-70 px-3 py-2 border border-gray-300 rounded-xl shadow-sm bg-white focus:outline-none focus:border-blue-500"></input>
        <button
          type="submit"
          className="w-35 mb-6 bg-[#6A7A62] text-white py-2 px-4 rounded-xl hover:bg-[#8D9F84] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 cursor-pointer">
          Submit
        </button>
      </form>

      <div>
        <h2>Past Immunizations</h2>
      </div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {/* {data.map((row) => (
            <tr key={row.id}>
              <td>{row.id}</td>
              <td>{row.name}</td>
              <td>{row.age}</td>
              <td>{row.city}</td>
            </tr>
          ))} */}
        </tbody>
      </table>
    </div>
  );
}
