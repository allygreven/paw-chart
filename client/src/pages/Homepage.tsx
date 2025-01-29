import { CgPill } from 'react-icons/cg';
import { FaThermometerFull } from 'react-icons/fa';
import { HiOutlineEnvelope } from 'react-icons/hi2';
import { LuMapPin } from 'react-icons/lu';
import { LuCalendarDays } from 'react-icons/lu';
import { FaNotesMedical } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export function Homepage() {
  return (
    <div className="flex flex-col items-center h-screen bg-background">
      <h1 className="mt-8 text-2xl mb-4">Welcome, (name)!</h1>
      <ul className="mt-8 flex list-none space-x-4 ">
        <li>
          <button
            type="button"
            className="w-35 mb-6 bg-white color-grey-body text-md py-2 px-4 rounded-3xl hover:bg-[#EEEDE8] shadow-md focus:outline-none cursor-pointer">
            <Link to="/medications">
              <CgPill className="text-4xl" />
              <span>Medications</span>
            </Link>
          </button>
        </li>

        <li>
          <button
            type="button"
            className="w-35 mb-6 bg-white color-grey-body text-md py-2 px-4 rounded-3xl hover:bg-[#EEEDE8] shadow-md focus:outline-none cursor-pointer">
            <Link to="/symptom-checker">
              <FaThermometerFull className="text-4xl" />
              <span>Symptom Checker</span>
            </Link>
          </button>
        </li>

        <li>
          <button
            type="button"
            className="w-35 mb-6 bg-white color-grey-body text-md py-2 px-4 rounded-3xl hover:bg-[#EEEDE8] shadow-md focus:outline-none cursor-pointer">
            <Link to="/immunizations">
              <FaNotesMedical className="text-4xl" />
              <span>Immunizations</span>
            </Link>
          </button>
        </li>

        <li>
          <button
            type="button"
            className="w-35 mb-6 bg-white color-grey-body text-md py-2 px-4 rounded-3xl hover:bg-[#EEEDE8] shadow-md focus:outline-none cursor-pointer">
            <Link to="/message">
              <HiOutlineEnvelope className="text-4xl" />
              <span>Message</span>
            </Link>
          </button>
        </li>

        <li>
          <button
            type="button"
            className="w-35 mb-6 bg-white color-grey-body text-md py-2 px-4 rounded-3xl hover:bg-[#EEEDE8] shadow-md focus:outline-none cursor-pointer">
            <Link to="/nearby">
              <LuMapPin className="text-4xl" />
              <span>Nearby Vets</span>
            </Link>
          </button>
        </li>

        <li>
          <button
            type="button"
            className="w-35 mb-6 bg-white color-grey-body text-md py-2 px-4 rounded-3xl hover:bg-[#EEEDE8] shadow-md focus:outline-none cursor-pointer">
            <Link to="/appointments">
              <LuCalendarDays className="text-4xl" />
              <span>Appointments</span>
            </Link>
          </button>
        </li>
      </ul>
    </div>
  );
}
