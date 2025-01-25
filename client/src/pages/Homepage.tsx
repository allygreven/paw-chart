import { CgPill } from 'react-icons/cg';
import { FaThermometerFull } from 'react-icons/fa';
import { HiOutlineEnvelope } from 'react-icons/hi2';
import { LuMapPin } from 'react-icons/lu';
import { LuCalendarDays } from 'react-icons/lu';
import { FaNotesMedical } from 'react-icons/fa';

export function Homepage() {
  return (
    <div className="flex bg-[#F6F2EF] h-screen">
      <ul className="list-none">
        <li>
          <CgPill /> Medications
        </li>
        <li>
          <FaThermometerFull /> Symptom Checker
        </li>
        <li>
          <FaNotesMedical /> Immunizations
        </li>
        <li>
          <HiOutlineEnvelope /> Message
        </li>
        <li>
          <LuMapPin /> Nearby Vets
        </li>
        <li>
          <LuCalendarDays /> Appointments
        </li>
      </ul>
    </div>
  );
}
