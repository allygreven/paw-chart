export function Medications() {
  return (
    <div className="flex bg-[#F6F2EF] h-screen">
      <h1 className="font-heading">Medications</h1>

      <button
        type="button"
        className="w-35 mb-6 bg-[#6A7A62] text-white py-2 px-4 rounded-xl hover:bg-[#8D9F84] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 cursor-pointer">
        Add a Medication
      </button>

      <h2 className="font-heading">Current Medications</h2>
    </div>
  );
}
