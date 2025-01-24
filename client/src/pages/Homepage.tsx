import { CgPill } from 'react-icons/cg';
import { FaThermometerFull } from 'react-icons/fa';
import { HiOutlineEnvelope } from 'react-icons/hi2';
import { LuMapPin } from 'react-icons/lu';
import { LuCalendarDays } from 'react-icons/lu';

export function Homepage() {
  return (
    <div>
      <ul className="list-none">
        <li>
          <CgPill /> Medications
        </li>
        <li>
          <FaThermometerFull /> Symptom Checker
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
