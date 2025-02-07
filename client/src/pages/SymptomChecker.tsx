export function SymptomChecker() {
  return (
    <div className="bg-background font-regular text-grey-body flex h-screen flex-col items-center">
      <h1 className="font-heading mb-4 mt-6 text-2xl">Symptom Checker</h1>

      {/* dog or cat */}

      <div>
        <label className="text-grey-body pr-2">Dog</label>
        <input type="radio" name="type"></input>
        <label className="text-grey-body pl-5 pr-2">Cat</label>
        <input type="radio" name="type"></input>
      </div>

      <h2 className="font-heading mb-4 mt-6 text-xl">Common Symptoms</h2>
      <div className="max-w-3xl">
        <label className="m-2 cursor-pointer">
          Coughing
          <input type="checkbox" className="m-1" />
        </label>

        <label className="m-2 cursor-pointer">
          Diarrhea
          <input type="checkbox" className="m-1" />
        </label>

        <label className="m-2 cursor-pointer">
          Refusal to Eat
          <input type="checkbox" className="m-1" />
        </label>

        <label className="m-2 cursor-pointer">
          Swelling
          <input type="checkbox" className="m-1" />
        </label>

        <label className="m-2 cursor-pointer">
          Fever
          <input type="checkbox" className="m-1" />
        </label>

        <label className="m-2 cursor-pointer">
          Head Tilt
          <input type="checkbox" className="m-1" />
        </label>

        <label className="m-2 cursor-pointer">
          Itching
          <input type="checkbox" className="m-1" />
        </label>

        <label className="m-2 cursor-pointer">
          Lethargy
          <input type="checkbox" className="m-1" />
        </label>

        <label className="m-2 cursor-pointer">
          Vomiting
          <input type="checkbox" className="m-1" />
        </label>

        <label className="m-2 cursor-pointer">
          Seizures
          <input type="checkbox" className="m-1" />
        </label>

        <label className="m-2 cursor-pointer">
          Excessive Thirst
          <input type="checkbox" className="m-1" />
        </label>

        <label className="m-2 cursor-pointer">
          Eye Discharge
          <input type="checkbox" className="m-1" />
        </label>

        <label className="m-2 cursor-pointer">
          Head Shaking
          <input type="checkbox" className="m-1" />
        </label>

        <label>
          <input
            type="text"
            placeholder="other"
            className="w-45 block rounded-xl border border-gray-300 bg-white px-3 py-1 shadow-sm focus:outline-none"
          />
        </label>
      </div>
    </div>
  );
}
