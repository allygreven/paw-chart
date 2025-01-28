import { CgPill } from 'react-icons/cg';
import { FaThermometerFull } from 'react-icons/fa';
import { HiOutlineEnvelope } from 'react-icons/hi2';
import { LuMapPin } from 'react-icons/lu';
import { LuCalendarDays } from 'react-icons/lu';
import { FaNotesMedical } from 'react-icons/fa';

export function Homepage() {
  return (
    <div className="flex flex-col items-center h-screen bg-background">
      <h1 className="text-2xl mb-4">Welcome, (name)!</h1>
      <ul className="flex list-none space-x-4">
        <li className="bg-white">
          <CgPill className="text-4xl" /> Medications
        </li>
        <li className="bg-white rounded-3xl border-gray-300">
          <FaThermometerFull className="text-4xl" /> Symptom Checker
        </li>
        <li className="bg-white">
          <FaNotesMedical className="text-4xl" /> Immunizations
        </li>
        <li className="bg-white">
          <HiOutlineEnvelope className="text-4xl" /> Message
        </li>
        <li className="bg-white">
          <LuMapPin className="text-4xl" /> Nearby Vets
        </li>
        <li className="bg-white">
          <LuCalendarDays className="text-4xl" /> Appointments
        </li>
      </ul>
    </div>
  );
}
