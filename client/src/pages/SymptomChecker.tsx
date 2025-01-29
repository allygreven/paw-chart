export function SymptomChecker() {
  return (
    <div className="flex flex-col bg-background h-screen font-regular items-center">
      <h1 className="font-heading text-2xl mt-6">Symptom Checker</h1>

      {/* dog or cat */}

      <div>
        <label className="pr-2 text-grey-body">Dog</label>
        <input type="radio" name="type"></input>
        <label className="pr-2 pl-5 text-grey-body">Cat</label>
        <input type="radio" name="type"></input>
      </div>

      <h2></h2>
    </div>
  );
}
