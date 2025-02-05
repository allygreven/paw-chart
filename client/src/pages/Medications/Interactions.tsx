import { useState } from 'react';
import { readInteraction } from '../../data';
import Markdown from 'react-markdown';
import { IoAlertCircleOutline } from 'react-icons/io5';

export function Interactions() {
  const [message, setMessage] = useState<string>('');
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
        <h2 className="font-heading text-xl mb-3">Interactions</h2>
        <button
          onClick={handleSubmit}
          type="button"
          className={`

          w-30 mb-4 bg-[#6A7A62] text-white font-regular py-2 px-4 rounded-2xl hover:bg-[#8D9F84] focus:outline-none cursor-pointer`}>
          Click here
        </button>
      </div>
      <div className="w-125 p-4 mb-6 bg-white font-regular drop-shadow-md shadow-[0px_10px_10px_rgba(0,0,0,0.3)]">
        {message && (
          <div className="flex items-start gap-2 ">
            <IoAlertCircleOutline className="text-red-500 text-5xl" />
            <Markdown className="text-med">{message}</Markdown>
          </div>
        )}
      </div>
    </div>
  );
}

// put in button css
// ${isLoading ? 'cursor-wait opacity-50' : 'hover:bg-blue-700'}
