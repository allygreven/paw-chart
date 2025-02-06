import { CgPill } from "react-icons/cg";
import { FaThermometerFull } from "react-icons/fa";
import { HiOutlineEnvelope } from "react-icons/hi2";
import { LuMapPin } from "react-icons/lu";
import { LuCalendarDays } from "react-icons/lu";
import { FaNotesMedical } from "react-icons/fa";
import { Link } from "react-router-dom";

export function Homepage() {
  return (
    <div className="bg-background text-grey-body flex flex-col items-center">
      <h1 className="font-regular mb-4 mt-8 text-3xl">Welcome, (name)!</h1>
      <ul className="mt-8 flex list-none space-x-4">
        <li>
          <button
            type="button"
            className="text-grey-body text-md mb-6 w-full cursor-pointer rounded-3xl bg-white py-1 shadow-md hover:bg-[#EEEDE8] focus:outline-none"
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
            className="text-grey-body text-md mb-6 w-full cursor-pointer rounded-3xl bg-white py-1 shadow-md hover:bg-[#EEEDE8] focus:outline-none"
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
            className="text-grey-body text-md mb-6 w-full cursor-pointer rounded-3xl bg-white py-1 shadow-md hover:bg-[#EEEDE8] focus:outline-none"
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

        <li>
          <button
            type="button"
            className="text-grey-body text-md mb-6 w-full cursor-pointer rounded-3xl bg-white py-1 shadow-md hover:bg-[#EEEDE8] focus:outline-none"
          >
            <Link to="/message" className="flex flex-col items-center p-2">
              <HiOutlineEnvelope className="text-4xl" />
              <span>Message</span>
            </Link>
          </button>
        </li>

        <li>
          <button
            type="button"
            className="text-grey-body text-md mb-6 w-full cursor-pointer rounded-3xl bg-white py-1 shadow-md hover:bg-[#EEEDE8] focus:outline-none"
          >
            <Link to="/nearby" className="flex flex-col items-center p-2">
              <LuMapPin className="text-4xl" />
              <span>Nearby Vets</span>
            </Link>
          </button>
        </li>

        <li>
          <button
            type="button"
            className="text-grey-body text-md mb-6 w-full cursor-pointer rounded-3xl bg-white py-1 shadow-md hover:bg-[#EEEDE8] focus:outline-none"
          >
            <Link to="/appointments" className="flex flex-col items-center p-2">
              <LuCalendarDays className="text-4xl" />
              <span>Appointments</span>
            </Link>
          </button>
        </li>
      </ul>

      {/* <div className="bg-[url('/public/images/dog-and-cat.png')] bg-cover bg-center relative"></div> */}
      <img
        src="/images/dog-and-cat.png"
        alt="dog and cat looking up"
        className="max-w-full"
      />
    </div>
  );
}
