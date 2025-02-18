import { CgPill } from 'react-icons/cg';
import { FaThermometerFull } from 'react-icons/fa';
import { FaNotesMedical } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useUser } from '../components/useUser';

export function Homepage() {
  const { user } = useUser();

  return (
    <div className="bg-background text-grey-body flex flex-col items-center">
      <h1 className="font-regular mt-25 mb-4 text-3xl">
        Welcome, {user?.pets[0]?.name || 'Guest'}!
      </h1>
      <ul className="mt-8 flex list-none space-x-4">
        <li>
          <button
            type="button"
            className="text-grey-body text-md w-30 mb-6 cursor-pointer rounded-3xl bg-white py-1 shadow-md hover:bg-[#EEEDE8] focus:outline-none"
          >
            <Link to="/medications" className="flex flex-col items-center p-2">
              <CgPill className="text-4xl" />
              <span>Medications</span>
            </Link>
          </button>
        </li>

        <li>
          <button
            type="button"
            className="text-grey-body w-30 h-21 mb-6 cursor-pointer rounded-3xl bg-white py-1 text-xs shadow-md hover:bg-[#EEEDE8] focus:outline-none"
          >
            <Link
              to="/symptom-checker"
              className="flex flex-col items-center p-2"
            >
              <FaThermometerFull className="text-4xl" />
              <span>Symptom Checker</span>
            </Link>
          </button>
        </li>

        <li>
          <button
            type="button"
            className="text-grey-body text-md w-30 mb-6 cursor-pointer rounded-3xl bg-white py-1 shadow-md hover:bg-[#EEEDE8] focus:outline-none"
          >
            <Link
              to="/immunizations"
              className="flex flex-col items-center p-2"
            >
              <FaNotesMedical className="text-4xl" />
              <span>Immunizations</span>
            </Link>
          </button>
        </li>
      </ul>

      <img
        src="/images/dog-and-cat.png"
        alt="dog and cat looking up"
        className="max-w-full"
      />
    </div>
  );
}
