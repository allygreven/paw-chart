import { useState } from 'react';
import { readInteraction } from '../../data';
import Markdown from 'react-markdown';
import { IoAlertCircleOutline } from 'react-icons/io5';
import { useUser } from '../../components/useUser';
import { RotatingLines } from 'react-loader-spinner';

export function Interactions() {
  const [message, setMessage] = useState<string>('');
  const { user } = useUser();
  const [spinner, setSpinner] = useState(false);

  async function handleSubmit() {
    try {
      if (!user) {
        throw new Error('not signed in');
      }
      setSpinner(true);
      const interactions = await readInteraction(user.pets[0].petId);
      setMessage(interactions);
      setSpinner(false);
    } catch (err) {
      alert(`Error fetching OpenAi API: ${err}`);
      setSpinner(false);
    }
  }

  if (spinner)
    return (
      <div>
        <RotatingLines
          visible={true}
          height="90"
          width="90"
          color="grey"
          strokeWidth="5"
          animationDuration="0.75"
          ariaLabel="rotating-lines-loading"
          wrapperStyle={{}}
          wrapperClass=""
        />
      </div>
    );

  return (
    <div className="">
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
      <div className="xl:w-125 font-regular mb-6 bg-white p-4 shadow-[0px_10px_10px_rgba(0,0,0,0.3)] drop-shadow-md sm:w-80">
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
