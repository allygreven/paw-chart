export function SymptomChecker() {
  return (
    <div className="flex bg-background h-screen">
      <h1 className="font-heading">Symptom Checker</h1>

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
