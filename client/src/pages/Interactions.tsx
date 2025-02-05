import { useState } from 'react';
import { readInteraction } from '../data';
import Markdown from 'react-markdown';

export function Interactions() {
  const [message, setMessage] = useState<string>('');

  async function handleSubmit() {
    try {
      const interactions = await readInteraction();
      setMessage(interactions);
    } catch (err) {
      alert(`Error fetching OpenAi API: ${err}`);
    }
  }

  return (
    <div>
      <h2 className="font-heading text-xl mb-3">Interactions</h2>
      <button
        onClick={handleSubmit}
        type="button"
        className="w-40 mb-1 bg-[#6A7A62] text-white font-regular py-2 px-4 rounded-2xl hover:bg-[#8D9F84] focus:outline-none cursor-pointer">
        Interactions
      </button>
      <div className="bg-white font-regular">
        {message && <Markdown>{message}</Markdown>}
      </div>
    </div>
  );
}
