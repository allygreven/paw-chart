export function SymptomChecker() {
  return (
    <div className="bg-background font-regular text-grey-body flex h-screen flex-col items-center">
      <h1 className="font-heading mb-4 mt-6 text-2xl">Symptom Checker</h1>

      <h2 className="font-heading mr-100 mb-3 mt-6 text-xl">Common Symptoms</h2>
      <div className="max-w-150 bg-white p-4 shadow-[0px_10px_10px_rgba(0,0,0,0.3)] drop-shadow-md">
        <label className="m-2 cursor-pointer">
          Coughing
          <input type="checkbox" value="coughing" className="m-1" />
        </label>

        <label className="m-2 cursor-pointer">
          Diarrhea
          <input type="checkbox" value="diarrhea" className="m-1" />
        </label>

        <label className="m-2 cursor-pointer">
          Refusal to Eat
          <input type="checkbox" value="refusal to eat" className="m-1" />
        </label>

        <label className="m-2 cursor-pointer">
          Swelling
          <input type="checkbox" value="swelling" className="m-1" />
        </label>

        <label className="m-2 cursor-pointer">
          Fever
          <input type="checkbox" value="fever" className="m-1" />
        </label>

        <label className="m-2 cursor-pointer">
          Head Tilt
          <input type="checkbox" value="head tilt" className="m-1" />
        </label>

        <label className="m-2 cursor-pointer">
          Itching
          <input type="checkbox" value="itching" className="m-1" />
        </label>

        <label className="m-2 cursor-pointer">
          Lethargy
          <input type="checkbox" value="lethargy" className="m-1" />
        </label>

        <label className="m-2 cursor-pointer">
          Vomiting
          <input type="checkbox" value="vomiting" className="m-1" />
        </label>

        <label className="m-2 cursor-pointer">
          Seizures
          <input type="checkbox" value="seizures" className="m-1" />
        </label>

        <label className="m-2 cursor-pointer">
          Excessive Thirst
          <input type="checkbox" value="excessive thirst" className="m-1" />
        </label>

        <label className="m-2 cursor-pointer">
          Eye Discharge
          <input type="checkbox" value="eye discharge" className="m-1" />
        </label>

        <label className="m-2 cursor-pointer">
          Head Shaking
          <input type="checkbox" value="head shaking" className="m-1" />
        </label>

        <label className="m-2 cursor-pointer">
          Limping
          <input type="checkbox" value="limping" className="m-1" />
        </label>

        <label>
          <input
            type="text"
            placeholder="other"
            className="w-45 block rounded-xl border border-gray-300 bg-white px-3 py-1 shadow-sm focus:outline-none"
          />
        </label>
      </div>

      <h2 className="font-heading mr-100 mt-15 mb-3 text-xl">
        Possible Conditions
      </h2>
    </div>
  );
}
