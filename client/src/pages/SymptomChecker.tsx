export function SymptomChecker() {
  return (
    <div className="flex flex-col bg-background h-screen font-regular items-center text-grey-body">
      <h1 className="font-heading text-2xl mt-6 mb-4">Symptom Checker</h1>

      {/* dog or cat */}

      <div>
        <label className="pr-2 text-grey-body">Dog</label>
        <input type="radio" name="type"></input>
        <label className="pr-2 pl-5 text-grey-body">Cat</label>
        <input type="radio" name="type"></input>
      </div>

      <h2 className="font-heading text-xl mt-6 mb-4">Common Symptoms</h2>
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
          <input type="text" placeholder="other" />
        </label>
      </div>
    </div>
  );
}
