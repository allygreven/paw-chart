import { useState } from "react";
import { readInteraction } from "../../data";
import Markdown from "react-markdown";
import { IoAlertCircleOutline } from "react-icons/io5";

export function Interactions() {
  const [message, setMessage] = useState<string>("");
  // const [isLoading, setIsLoading] = useState(false);

  async function handleSubmit() {
    try {
      const interactions = await readInteraction();
      setMessage(interactions);
      // setIsLoading(true);
    } catch (err) {
      alert(`Error fetching OpenAi API: ${err}`);
    }
  }

  return (
    <div>
      <div className="inline-flex items-center gap-4">
        <h2 className="font-heading mb-3 text-xl">Interactions</h2>
        <button
          onClick={handleSubmit}
          type="button"
          className={`w-30 font-regular mb-4 cursor-pointer rounded-2xl bg-[#6A7A62] px-4 py-2 text-white hover:bg-[#8D9F84] focus:outline-none`}
        >
          Click here
        </button>
      </div>
      <div className="w-125 font-regular mb-6 bg-white p-4 shadow-[0px_10px_10px_rgba(0,0,0,0.3)] drop-shadow-md">
        {message && (
          <div className="flex items-start gap-2">
            <IoAlertCircleOutline className="text-5xl text-red-500" />
            <Markdown className="text-med">{message}</Markdown>
          </div>
        )}
      </div>
    </div>
  );
}

// put in button css
// ${isLoading ? 'cursor-wait opacity-50' : 'hover:bg-blue-700'}
